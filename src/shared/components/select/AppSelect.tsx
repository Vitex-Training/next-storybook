import React, {
  BaseSyntheticEvent,
  FocusEvent,
  OptionHTMLAttributes,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { cn } from 'src/shared/utils/className';
import { v4 as uuidv4 } from 'uuid';

import { AppButton, ButtonProps } from '../button/AppButton';

type Option = {
  id: string;
  label: React.ReactNode;
  ref: HTMLDivElement | null;
  value: OptionHTMLAttributes<HTMLOptionElement>['value'];
};
type CarouselContextType = {
  addOption: (value: OptionHTMLAttributes<HTMLOptionElement>['value'], label: React.ReactNode) => string;
  closeWhenBlurOutside: (e: React.FocusEvent<HTMLDivElement, Element>) => void;
  focusOptionId: string;
  onSelectItem: (optionId: string) => void;
  openOptions: boolean;
  // optionIdsRef value was used only for check the numberth of option to check which option is next or prev of other option, it not reliable for other purpose
  optionIdsRef: React.RefObject<string[]>;
  options: Option[];
  selectedOptionId: string;
  setOpenOptions: (openOptions: boolean) => void;
  state: 'closed' | 'open';
  toggleOpen: () => void;
  updateRef: (optionId: string, ref: HTMLDivElement | null) => void;
};
const SelectContext = React.createContext<CarouselContextType | null>(null);

type SelectProviderPros = {
  readonly defaultValue?: OptionHTMLAttributes<HTMLOptionElement>['value'];
  readonly onValueChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};
export const focusInCurrentTarget = <T extends HTMLElement>(
  currentTarget: BaseSyntheticEvent<globalThis.FocusEvent, EventTarget & T, EventTarget>['currentTarget'],
  relatedTarget: FocusEvent<T, Element>['relatedTarget'],
) => {
  if (relatedTarget === null) return false;

  let node = relatedTarget.parentNode;

  while (node !== null) {
    if (node === currentTarget) return true;
    node = node.parentNode;
  }

  return false;
};
const Select = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'> & SelectProviderPros>(
  ({ children, className, defaultValue: defaultValueProp, onValueChange: onValueChangeProp, ...props }, ref) => {
    const [openOptions, setOpenOptions] = useState(false);
    const [selectedOptionId, _setSelectedOptionId] = useState<string>('');
    const [options, setOptions] = useState<Option[]>([]);
    const [focusOptionId, setFocusOptionId] = useState('');
    const [selectId, setSelectId] = useState('');
    const optionIdsRef = useRef<string[]>([]);
    const [lockUpdateOptions, setLockUpdateOptions] = useState(false);

    const setSelectedOptionId = useCallback(
      (optionId: string) => {
        if (typeof onValueChangeProp === 'function') {
          const foundOption = options.find((option) => option.id === optionId);
          if (foundOption && foundOption) {
            const selectEl = document.querySelector(`[data-select-id="${selectId}"]`) as HTMLSelectElement;
            if (selectEl) {
              const changeEvent = new Event('change', { bubbles: true, cancelable: true });
              selectEl.value = foundOption.value?.toString() ?? '';
              selectEl.dispatchEvent(changeEvent);

              onValueChangeProp(changeEvent as unknown as React.ChangeEvent<HTMLSelectElement>);
            }
          }
        }
        _setSelectedOptionId(optionId);
      },
      [_setSelectedOptionId, onValueChangeProp, options, selectId],
    );

    const closeWhenBlurOutside = (e: React.FocusEvent<HTMLDivElement, Element>) => {
      const isClickInside = focusInCurrentTarget<HTMLDivElement>(e.currentTarget, e.relatedTarget);

      if (!isClickInside) {
        setTimeout(function () {
          setOpenOptions(false);
        }, 200);
      }
    };

    const navigateByKeyboard = (e: React.KeyboardEvent<HTMLDivElement>) => {
      const currentIndex = options.findIndex((option) => option.id === focusOptionId);
      if (e.key === 'ArrowDown') {
        setFocusOptionId((currentFocusOptionId) => {
          const nextIndex = currentIndex === options.length - 1 ? 0 : currentIndex + 1;

          const nextFocusOptionId = options[nextIndex]?.id;

          return nextFocusOptionId ?? currentFocusOptionId;
        });
      } else if (e.key === 'ArrowUp') {
        setFocusOptionId((currentFocusOptionId) => {
          const prevIndex = currentIndex === 0 ? options.length - 1 : currentIndex - 1;

          const prevFocusOptionId = options[prevIndex]?.id;

          return prevFocusOptionId ?? currentFocusOptionId;
        });
      } else if (e.key === 'Enter') {
        const foundOption = options.find((option) => {
          return option.id === focusOptionId;
        });
        if (foundOption) {
          setSelectedOptionId(foundOption.id);
          setOpenOptions(false);
        }
      }
    };

    const toggleOpen = () => {
      setOpenOptions(!openOptions);
    };

    const onSelectItem = (optionId: string) => {
      const foundOption = options.find((option) => option.id === optionId);
      if (foundOption) {
        setSelectedOptionId(foundOption.id);
        setOpenOptions(false);
      }
    };

    const addOption = useCallback(
      (value: OptionHTMLAttributes<HTMLOptionElement>['value'], label: React.ReactNode) => {
        let itemId: string;
        if (!lockUpdateOptions) {
          // if this is the item first mount, generate itemId
          itemId = uuidv4();
          setOptions((prev) => [...prev, { id: itemId, label, ref: null, value }]);
        } else {
          // if this is second the item mounted because of rebuild=> check oldId
          const numberOfItems = optionIdsRef.current.length;
          itemId = optionIdsRef.current[numberOfItems % options.length]!;
        }

        // update the itemsRef to store the numberth of item
        optionIdsRef.current.push(itemId);
        return itemId;
      },
      [lockUpdateOptions, options.length],
    );

    const updateRef = useCallback((optionId: string, ref: HTMLDivElement | null) => {
      setOptions((prev) => {
        const foundOption = prev.find((option) => option.id === optionId);
        const otherOption = prev.filter((option) => option.id !== optionId);
        if (foundOption) {
          return [...otherOption, { ...foundOption, ref }];
        }
        return prev;
      });
    }, []);

    const state = openOptions ? 'open' : 'closed';
    const contextValue: CarouselContextType = {
      addOption,
      closeWhenBlurOutside,
      focusOptionId,
      onSelectItem,
      openOptions,
      optionIdsRef,
      options,
      selectedOptionId,
      setOpenOptions,
      state,
      toggleOpen,
      updateRef,
    };

    useEffect(() => {
      setLockUpdateOptions(true);
      if (defaultValueProp) {
        const foundOption = options.find((option) => {
          return option.value === defaultValueProp;
        });

        if (foundOption) {
          setSelectedOptionId(foundOption?.id);
        }
      }
    }, [defaultValueProp, options, setSelectedOptionId]);

    useEffect(() => {
      const selectId = uuidv4();
      setSelectId(selectId);
    }, [setSelectId]);

    useEffect(() => {
      const foundOption = options.find((option) => {
        return option.id === focusOptionId;
      });

      if (foundOption && foundOption.ref) {
        foundOption.ref?.focus();
      }
    }, [focusOptionId, options]);

    return (
      <SelectContext.Provider value={contextValue}>
        <div
          className={cn('select-wrapper relative', className)}
          onBlur={closeWhenBlurOutside}
          onKeyDown={(e) => navigateByKeyboard(e)}
          {...props}
          ref={ref}>
          <select data-select-id={selectId} defaultValue={defaultValueProp} hidden tabIndex={-1}>
            <option value=''></option>
            {options.map((option, i) => {
              return (
                <option data-option-id={option.id} key={i} value={option.value}>
                  {option.label}
                </option>
              );
            })}
          </select>
          {children}
        </div>
      </SelectContext.Provider>
    );
  },
);
Select.displayName = 'Select';

export function useSelect() {
  const context = React.useContext(SelectContext);
  if (!context) {
    throw new Error('useSelect must be used within a Select.');
  }

  return context;
}

const SelectTrigger = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, ...props }, ref) => {
  const { openOptions, state, toggleOpen } = useSelect();
  return (
    <AppButton
      aria-expanded={openOptions}
      className={cn('', className)}
      data-state={state}
      onClick={toggleOpen}
      type='button'
      {...props}
      ref={ref}
    />
  );
});
SelectTrigger.displayName = 'SelectTrigger';

type SelectValueProps = {
  readonly placeholder: string;
};
const SelectValue = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'> & SelectValueProps>(
  ({ className, placeholder, ...props }, ref) => {
    const { options, selectedOptionId } = useSelect();
    const selectedOption = useMemo(
      () =>
        options.find((option) => {
          return option.id === selectedOptionId;
        }),
      [selectedOptionId, options],
    );

    return (
      <span className={cn('', className)} {...props} ref={ref}>
        {!!selectedOption ? selectedOption?.label : placeholder}
      </span>
    );
  },
);
SelectValue.displayName = 'SelectValue';

const SelectContent = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(({ className, ...props }, ref) => {
  const { openOptions } = useSelect();
  return (
    <div
      className={cn(
        'absolute left-0 top-full rounded-md border border-gray-400 bg-white p-2',
        openOptions ? 'flex flex-col' : 'hidden',
        className,
      )}
      {...props}
      ref={ref}
    />
  );
});
SelectContent.displayName = 'SelectContent';

const SelectGroup = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(({ className, ...props }, ref) => {
  return <div className={cn('', className)} role='group' {...props} ref={ref} />;
});
SelectGroup.displayName = 'SelectGroup';

type SelectItemProps = {
  readonly value: OptionHTMLAttributes<HTMLOptionElement>['value'];
};
const SelectItem = ({
  children,
  className,
  value,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & SelectItemProps) => {
  const { addOption, onSelectItem, selectedOptionId, updateRef } = useSelect();
  const [optionId, setOptionId] = useState('');
  const optionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const optionId = addOption(value, children);
    setOptionId(optionId);
    if (optionRef.current) {
      updateRef(optionId, optionRef.current);
    }
  }, [addOption, setOptionId, updateRef, value, children]);
  const isSelected = selectedOptionId === optionId;
  return (
    <div
      aria-selected={isSelected}
      className={cn('hover:bg-gray-400 focus:bg-red-400', 'data-[selected=true]:bg-gray-200', className)}
      data-selected={isSelected}
      // this is onMouseDown instead of onClick cuz the order of event: onMouseDown fired before the onBlur, onBlur event on div wrapper make the element not in the dom, so if onClick, the onClick of this element not fired
      onMouseDown={() => onSelectItem(optionId)}
      role='option'
      {...props}
      ref={optionRef}
      tabIndex={-1}>
      <span>{children}</span>
    </div>
  );
};
SelectItem.displayName = 'SelectItem';

const SelectLabel = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(({ className, ...props }, ref) => {
  return <div className={cn('pointer-events-none font-semibold', className)} {...props} ref={ref} />;
});
SelectLabel.displayName = 'SelectLabel';

export {
  Select as AppSelect,
  SelectContent as AppSelectContent,
  SelectGroup as AppSelectGroup,
  SelectItem as AppSelectItem,
  SelectLabel as AppSelectLabel,
  SelectTrigger as AppSelectTrigger,
  SelectValue as AppSelectValue,
};
