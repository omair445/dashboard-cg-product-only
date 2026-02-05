'use client';

import { cn } from '@/lib/utils';
import { Icon } from '../atoms/Icon';
import { forwardRef } from 'react';

const VARIANTS = {
  primary: 'bg-primary-500 text-white hover:bg-primary-600',
  secondary: 'bg-white border border-card-border text-t-base-blue hover:bg-gray-50',
  ghost: 'text-t-secondary hover:bg-gray-50',
  filled: 'bg-t-base-blue text-white hover:bg-primary-700',
  yellow: 'bg-[#eeff9d] border border-[#bae100] text-t-base-blue shadow-[0px_4px_6px_0px_rgba(210,251,12,0.4)] hover:opacity-90',
  danger: 'bg-status-bad text-white hover:opacity-90',
} as const;

const SIZES = {
  sm: 'px-3 py-2 text-sm rounded-full gap-1.5',
  md: 'px-4 py-2 text-sm rounded-full gap-2',
  lg: 'px-4 py-2.5 text-sm rounded-full gap-2',
} as const;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button variant */
  variant?: keyof typeof VARIANTS;
  /** Button size */
  size?: keyof typeof SIZES;
  /** Icon name (left side) */
  leftIcon?: string;
  /** Icon name (right side) */
  rightIcon?: string;
  /** Full width button */
  fullWidth?: boolean;
  /** Loading state */
  loading?: boolean;
}

/**
 * Button component with variants
 * @example <Button variant="primary" leftIcon="plus">Add Item</Button>
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      leftIcon,
      rightIcon,
      fullWidth = false,
      loading = false,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          'inline-flex items-center justify-center font-medium transition-colors',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          VARIANTS[variant],
          SIZES[size],
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {loading ? (
          <Icon name="loader-2" size="sm" className="animate-spin" />
        ) : (
          leftIcon && <Icon name={leftIcon} size="sm" />
        )}
        {children}
        {rightIcon && !loading && <Icon name={rightIcon} size="sm" />}
      </button>
    );
  }
);

Button.displayName = 'Button';
