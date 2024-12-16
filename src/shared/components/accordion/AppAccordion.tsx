'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { cva, VariantProps } from 'class-variance-authority';
import { ChevronDown } from 'lucide-react';
import * as React from 'react';
import { cn } from 'src/shared/utils/className';

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item className={cn('border-b', className)} ref={ref} {...props} />
));
AccordionItem.displayName = 'AccordionItem';

const triggerIconVariant = cva(
  'flex flex-1 items-center py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
  {
    defaultVariants: {
      iconPosition: 'start',
    },
    variants: {
      iconPosition: {
        end: 'justify-between',
        start: 'gap-2',
      },
    },
  },
);

export type AppTriggerIconVariant = VariantProps<typeof triggerIconVariant>;

const AccordionTrigger = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Trigger>,
  AppTriggerIconVariant & React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ children, className, iconPosition = 'end', ...props }, ref) => (
  <AccordionPrimitive.Header className='flex'>
    <AccordionPrimitive.Trigger className={cn(triggerIconVariant({ className, iconPosition }))} ref={ref} {...props}>
      {iconPosition === 'start' && <ChevronDown className='size-4 shrink-0 transition-transform duration-200' />}
      {children}
      {iconPosition === 'end' && <ChevronDown className='size-4 shrink-0 transition-transform duration-200' />}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ children, className, ...props }, ref) => (
  <AccordionPrimitive.Content
    className='overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down'
    ref={ref}
    {...props}>
    <div className={cn('pb-4 pt-0', className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export {
  Accordion as AppAccordion,
  AccordionContent as AppAccordionContent,
  AccordionItem as AppAccordionItem,
  AccordionTrigger as AppAccordionTrigger,
};
