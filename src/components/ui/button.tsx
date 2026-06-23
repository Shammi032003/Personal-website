import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary:
          'bg-white text-ink hover:bg-white/90 hover:shadow-[0_0_40px_-6px_rgba(255,255,255,0.45)]',
        accent:
          'bg-accent text-white hover:bg-accent-deep hover:shadow-[0_0_44px_-8px_rgba(59,130,246,0.8)]',
        outline:
          'border border-white/15 bg-white/[0.02] text-white hover:bg-white/[0.06] hover:border-white/30',
        ghost: 'text-muted hover:text-white hover:bg-white/[0.04]',
        link: 'text-accent-soft underline-offset-4 hover:underline',
      },
      size: {
        sm: 'h-9 px-4',
        default: 'h-11 px-6',
        lg: 'h-13 px-8 text-[0.95rem]',
        icon: 'h-11 w-11',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
