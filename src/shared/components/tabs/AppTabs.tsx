'use client';

import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as React from 'react';
import { cn } from 'src/shared/utils/className';

export type CustomTabsProps = {
  readonly dir?: 'center' | 'ltr' | 'rtl';
} & Omit<React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>, 'dir'>;

const Tabs = React.forwardRef<React.ComponentRef<typeof TabsPrimitive.Root>, CustomTabsProps>(
  ({ className, dir: dirProp = 'ltr', ...props }, ref) => {
    const dir = dirProp as TabsPrimitive.TabsProps['dir'];
    return (
      <TabsPrimitive.Root
        className={cn(
          'data-[orientation="vertical"]:flex',
          dirProp === 'center' &&
            '[&>div:nth-child(1)]:w-full data-[orientation="vertical"]:[&>div:nth-child(1)]:w-fit',
          className,
        )}
        dir={dir}
        ref={ref}
        {...props}
      />
    );
  },
);
Tabs.displayName = TabsPrimitive.Root.displayName;

const TabsList = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    className={cn(
      'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground data-[orientation="vertical"]:h-auto data-[orientation="vertical"]:flex-col',
      className,
    )}
    ref={ref}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    className={cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',
      className,
    )}
    ref={ref}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    className={cn(
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[orientation="vertical"]:mt-0 ltr:data-[orientation="vertical"]:ml-2 rtl:data-[orientation="vertical"]:mr-2',
      className,
    )}
    ref={ref}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs as AppTabs, TabsContent as AppTabsContent, TabsList as AppTabsList, TabsTrigger as AppTabsTrigger };
