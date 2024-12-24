import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';
import { cn } from 'src/shared/utils/className';

type SkeletonProps = {
  shape?: 'circle' | 'rectangle';
};

const skeletonVariant = cva('h-10 bg-gray-300 animate-pulse', {
  defaultVariants: {
    shape: 'rectangle',
  },
  variants: {
    shape: {
      circle: 'rounded-full w-10 ',
      rectangle: 'rounded-md w-full',
    },
  },
});
export type SkeletonVariant = VariantProps<typeof skeletonVariant>;
const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps & React.ComponentProps<'div'>>(
  ({ className, shape = 'rectangle', ...props }, ref) => {
    return <div className={cn(skeletonVariant({ shape }), className)} ref={ref} {...props} />;
  },
);

Skeleton.displayName = 'Skeleton';

export { Skeleton as AppSkeleton };
