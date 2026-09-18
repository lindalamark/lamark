import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import Link from 'next/link';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  href?: string;
  withArrow?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', href, withArrow = false, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-display uppercase tracking-widest text-sm transition-all duration-300';
    
    const variants = {
      primary: 'bg-lamark-black text-lamark-offwhite hover:bg-lamark-red px-8 py-4',
      secondary: 'bg-lamark-offwhite text-lamark-black hover:bg-lamark-black hover:text-lamark-offwhite px-8 py-4',
      outline: 'border border-lamark-black text-lamark-black hover:bg-lamark-black hover:text-lamark-offwhite px-8 py-4',
      ghost: 'text-lamark-black hover:text-lamark-red px-0 py-2',
    };

    const content = (
      <>
        {children}
        {withArrow && <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>}
      </>
    );

    if (href) {
      return (
        <Link href={href} className={cn(baseStyles, variants[variant], 'group', className)}>
          {content}
        </Link>
      );
    }

    return (
      <button ref={ref} className={cn(baseStyles, variants[variant], 'group', className)} {...props}>
        {content}
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button };
