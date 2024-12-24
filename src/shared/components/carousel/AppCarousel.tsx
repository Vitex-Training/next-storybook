import { cva, VariantProps } from 'class-variance-authority';
import React, { useEffect, useRef, useState } from 'react';
import { cn } from 'src/shared/utils/className';
import { v4 as uuidv4 } from 'uuid';

import { AppButton, ButtonProps } from '../button/AppButton';

interface CarouselContextType {
  addItemId: () => string;
  autoPlay: boolean;
  direction: 'next' | 'prev';

  duration: number;
  itemIds: string[];
  orientation: 'horizontal' | 'vertical';
  pause: () => void;
  runLoop: () => void;
  selectedItem: string;
  setDirection: (direction: 'next' | 'prev') => void;
  setSelectedItem: (item: string) => void;
  temporaryPause: boolean;
}
const CarouselContext = React.createContext<CarouselContextType | null>(null);

type CarouselProviderProps = {
  readonly autoPlay?: boolean;
  readonly children: React.ReactNode;
  readonly duration?: number;
  readonly orientation?: 'horizontal' | 'vertical';
};
const Carousel = ({
  autoPlay = false,
  children,
  duration = 2000,
  orientation = 'horizontal',
}: CarouselProviderProps) => {
  const [selectedItem, setSelectedItem] = useState('');
  const [itemIds, setItemIds] = useState<string[]>([]);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const itemIdsRef = useRef<string[]>([]);
  const [isLockUpdateItemIds, setIsLockUpdateItemIds] = useState(false);
  const [temporaryPause, setTemporaryPause] = useState(false);

  const addItemId = () => {
    let itemId: string;
    if (!isLockUpdateItemIds) {
      // if this is the item first mount, generate newId
      itemId = uuidv4();
      setItemIds((prev) => {
        return [...prev, itemId];
      });
    } else {
      // if this is second the item mounted because of rebuild=> check oldId
      const numberOfItems = itemIdsRef.current.length;
      itemId = itemIdsRef.current[numberOfItems % itemIds.length]!;
    }

    // update the itemsRef to store the numberth of item
    itemIdsRef.current.push(itemId);
    return itemId;
  };

  const pause = () => {
    setTemporaryPause(true);
  };

  const runLoop = () => {
    setTemporaryPause(false);
  };

  const contextValue: CarouselContextType = {
    addItemId,
    autoPlay,
    direction,
    duration,
    itemIds,
    orientation,
    pause,
    runLoop,
    selectedItem,
    setDirection,
    setSelectedItem,
    temporaryPause,
  };

  useEffect(() => {
    if (!selectedItem && itemIdsRef.current[0]) {
      setSelectedItem(itemIdsRef.current[0]);
    }
    setIsLockUpdateItemIds(true);
  }, [setSelectedItem, selectedItem, setIsLockUpdateItemIds]);

  return (
    <CarouselContext.Provider value={contextValue}>
      <div className='flex items-center'>{children}</div>
    </CarouselContext.Provider>
  );
};
Carousel.displayName = 'Carousel';

export function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error('useCarousel must be used within a Carousel.');
  }

  return context;
}

const carouselVariants = cva('overflow-auto h-20  w-full items-center ', {
  defaultVariants: {
    orientation: 'horizontal',
  },
  variants: {
    orientation: {
      horizontal: 'flex-row',
      vertical: ' flex-col',
    },
  },
});
export type AppCarouselVariant = VariantProps<typeof carouselVariants>;
const CarouselContent = React.forwardRef<HTMLUListElement, AppCarouselVariant & React.ComponentProps<'ul'>>(
  ({ children, className, orientation = 'horizontal', ...props }, ref) => {
    const { autoPlay, duration, itemIds, selectedItem, setDirection, setSelectedItem, temporaryPause } = useCarousel();

    useEffect(() => {
      let timeId: NodeJS.Timeout;
      if (autoPlay && !temporaryPause && Number.isInteger(duration)) {
        timeId = setInterval(function () {
          const currentItemIndex = itemIds.findIndex((itemId) => itemId === selectedItem);
          const nextItemIndex = (currentItemIndex + 1) % itemIds.length;

          if (nextItemIndex !== -1) {
            const item = itemIds.find((itemId) => itemIds[nextItemIndex] === itemId);
            setSelectedItem(item!);
            setDirection('next');
          }
        }, duration);
      }
      return () => {
        clearInterval(timeId);
      };
    }, [autoPlay, selectedItem, temporaryPause, duration, itemIds, setDirection, setSelectedItem]);
    return (
      <div className='relative mx-auto max-w-2xl flex-1 overflow-hidden'>
        <ul
          className={cn(carouselVariants({ orientation }), className)}
          data-selected={selectedItem}
          ref={ref}
          {...props}>
          {children}
        </ul>
      </div>
    );
  },
);
CarouselContent.displayName = 'CarouselContent';

const CarouselItem = React.forwardRef<HTMLLIElement, React.ComponentProps<'li'>>(({ className, ...props }, ref) => {
  const { addItemId, autoPlay, direction, orientation, pause, runLoop, selectedItem } = useCarousel();
  const isFirstMount = useRef(true);
  const [itemId, setItemId] = useState('');

  useEffect(() => {
    if (isFirstMount || process.env.NODE_ENV === 'production') {
      const newId = addItemId();
      setItemId(newId);
    }
    return () => {
      isFirstMount.current = false;
    };
  }, [addItemId]);

  return (
    <li
      {...(autoPlay && {
        onMouseOut: runLoop,
        onMouseOver: pause,
      })}
      {...(itemId && { 'data-carousel-id': itemId })}
      className={cn(
        'absolute flex h-20 w-full flex-shrink-0 items-center justify-center bg-slate-400 p-3 transition duration-500',
        orientation === 'horizontal'
          ? direction === 'next'
            ? selectedItem === itemId
              ? 'animate-in fade-in-0 slide-in-from-left-full fill-mode-forwards'
              : 'animate-out fade-out-0 slide-out-to-right-full fill-mode-forwards'
            : selectedItem === itemId
              ? 'animate-in fade-in-0 slide-in-from-right-full fill-mode-forwards'
              : 'animate-out fade-out-0 slide-out-to-left-full fill-mode-forwards'
          : direction === 'next'
            ? selectedItem === itemId
              ? 'animate-in fade-in-0 slide-in-from-top-full fill-mode-forwards'
              : 'animate-out fade-out-0 slide-out-to-bottom-full fill-mode-forwards'
            : selectedItem === itemId
              ? 'animate-in fade-in-0 slide-in-from-bottom-full fill-mode-forwards'
              : 'animate-out fade-out-0 slide-out-to-top-full fill-mode-forwards',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
CarouselItem.displayName = 'CarouselItem';

const CarouselNext = React.forwardRef<HTMLButtonElement, ButtonProps>(({ ...props }, ref) => {
  const { itemIds, selectedItem, setDirection, setSelectedItem } = useCarousel();

  const handleNext = () => {
    const currentItemIndex = itemIds.findIndex((itemId) => itemId === selectedItem);
    const nextItemIndex = (currentItemIndex + 1) % itemIds.length;

    if (nextItemIndex !== -1) {
      const item = itemIds.find((itemId) => itemIds[nextItemIndex] === itemId);
      setSelectedItem(item!);
      setDirection('next');
    }
  };

  return <AppButton onClick={handleNext} {...props} ref={ref} />;
});
CarouselNext.displayName = 'CarouselNext';

const CarouselPrevious = React.forwardRef<HTMLButtonElement, ButtonProps>(({ ...props }, ref) => {
  const { itemIds, selectedItem, setDirection, setSelectedItem } = useCarousel();

  const handlePrevious = () => {
    const currentItemIndex = itemIds.findIndex((itemId) => itemId === selectedItem);
    const nextItemIndex = (currentItemIndex - 1 + itemIds.length) % itemIds.length;

    if (nextItemIndex !== -1) {
      const item = itemIds.find((itemId) => itemIds[nextItemIndex] === itemId);
      setSelectedItem(item!);
      setDirection('prev');
    }
  };

  return <AppButton onClick={handlePrevious} {...props} ref={ref} />;
});
CarouselPrevious.displayName = 'CarouselPrevious';

export {
  Carousel as AppCarousel,
  CarouselContent as AppCarouselContent,
  CarouselItem as AppCarouselItem,
  CarouselNext as AppCarouselNext,
  CarouselPrevious as AppCarouselPrevious,
};
