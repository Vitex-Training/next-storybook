import { cva, VariantProps } from 'class-variance-authority';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { cn } from 'src/shared/utils/className';

import { AppButton, ButtonProps } from '../button/AppButton';

const SIDEBAR_WIDTH = '16rem';
const SIDEBAR_KEYBOARD_SHORTCUT = 'b';

interface SidebarContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
  state: 'collapsed' | 'expanded';
  toggleOpen: () => void;
}

const SidebarContext = React.createContext<null | SidebarContextType>(null);

interface SidebarProviderProps {
  readonly defaultOpen?: boolean;
  readonly onOpenChange?: (open: boolean) => void;
  readonly open?: boolean;
}

const SidebarProvider = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'> & SidebarProviderProps>(
  ({ children, className, defaultOpen = false, onOpenChange: setOpenProp, open: openProp, ...props }, ref) => {
    const [_open, _setOpen] = useState(defaultOpen);

    const open = openProp ?? _open;

    const setOpen = useCallback(
      (open: boolean) => {
        if (typeof setOpenProp === 'function') {
          setOpenProp(open);
        } else {
          _setOpen(open);
        }
      },
      [_setOpen, setOpenProp],
    );

    const toggleOpen = useCallback(() => {
      setOpen(!open);
    }, [open, setOpen]);

    const state = open ? 'expanded' : 'collapsed';

    const contextValue: SidebarContextType = {
      open,
      setOpen,
      state,
      toggleOpen,
    };
    return (
      <SidebarContext.Provider value={contextValue}>
        <div className={cn('flex items-start', className)} ref={ref} {...props}>
          {children}
        </div>
      </SidebarContext.Provider>
    );
  },
);

SidebarProvider.displayName = 'SidebarProvider';

export function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider.');
  }

  return context;
}

const sidebarVariants = cva(
  'duration-200 w-0 bg-white  group-data-[state=expanded]/sidebar:w-[--sidebar-width]  overflow-hidden max-h-0 group-data-[state=expanded]/sidebar:min-h-svh  transition-[width,left,right] ease-linear',
  {
    defaultVariants: {
      side: 'left',
      variant: 'sidebar',
    },
    variants: {
      side: {
        left: ' left-[calc(var(--sidebar-width)*-1)] group-data-[state=expanded]/sidebar:left-0 ',
        right: 'right-[calc(-100vw-var(--sidebar-width)*1)] group-data-[state=expanded]/sidebar:right-0 ',
      },
      variant: {
        floating: 'fixed top-0 ',
        sidebar: 'relative top-0',
      },
    },
  },
);

export type AppSidebarVariant = VariantProps<typeof sidebarVariants>;

type SidebarProps = {
  readonly side?: 'left' | 'right';
  readonly variant?: 'floating' | 'sidebar';
};

const Sidebar = React.forwardRef<HTMLDivElement, AppSidebarVariant & React.ComponentProps<'div'> & SidebarProps>(
  ({ children, className, side, style, variant, ...props }, ref) => {
    const { state } = useSidebar();

    return (
      <div
        className={`group/sidebar ${side === 'right' ? 'order-1' : ''}`}
        data-side={side}
        data-state={state}
        data-variant={variant}
        ref={ref}
        style={
          {
            '--sidebar-width': SIDEBAR_WIDTH,
            ...style,
          } as React.CSSProperties
        }>
        <div
          className={cn(
            sidebarVariants({ side, variant }),
            side === 'right' && variant === 'sidebar' && state === 'collapsed' ? 'fixed' : '',
            className,
          )}
          data-sidebar='sidebar'
          {...props}>
          {children}
        </div>
      </div>
    );
  },
);

Sidebar.displayName = 'Sidebar';

const SidebarTrigger = ({ ...props }: ButtonProps) => {
  const openButtonRef = useRef<HTMLButtonElement>(null);

  const handleKeyShort = (e: KeyboardEvent) => {
    if (e.key === SIDEBAR_KEYBOARD_SHORTCUT) {
      if (openButtonRef) {
        e.preventDefault();
        openButtonRef.current?.focus();
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyShort);
    return () => {
      window.removeEventListener('keydown', handleKeyShort);
    };
  }, []);
  const { toggleOpen } = useSidebar();

  return <AppButton onClick={toggleOpen} ref={openButtonRef} type='button' {...props} />;
};
SidebarTrigger.displayName = 'SidebarTrigger';

const SidebarClose = React.forwardRef<HTMLButtonElement, ButtonProps>(({ ...props }, ref) => {
  const { toggleOpen } = useSidebar();

  return <AppButton onClick={toggleOpen} type='button' {...props} ref={ref} />;
});
SidebarClose.displayName = 'SidebarClose';

export {
  Sidebar as AppSidebar,
  SidebarClose as AppSidebarClose,
  SidebarProvider as AppSidebarProvider,
  SidebarTrigger as AppSidebarTrigger,
};
