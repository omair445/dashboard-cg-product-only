'use client';

import { cn } from '@/lib/utils';
import { Icon } from '../atoms/Icon';
import { forwardRef } from 'react';

const VARIANTS = {
  default: 'bg-white border border-card-border text-t-secondary hover:bg-gray-50',
  primary: 'bg-primary-500 text-white hover:bg-primary-600',
  ghost: 'text-t-secondary hover:bg-gray-100',
  interactive: 'bg-interactive text-white hover:opacity-90',
} as const;

const SIZES = {
  sm: 'p-1.5',
  md: 'p-2',
  lg: 'p-3',
} as const;

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Tabler icon name */
  icon: string;
  /** Button variant */
  variant?: keyof typeof VARIANTS;
  /** Button size */
  size?: keyof typeof SIZES;
  /** Accessible label */
  'aria-label': string;
}

/**
 * Icon-only button
 * @example <IconButton icon="bell" variant="default" aria-label="Notifications" />
 */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, variant = 'default', size = 'md', className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-lg transition-colors',
          VARIANTS[variant],
          SIZES[size],
          className
        )}
        {...props}
      >
        <Icon name={icon} size={size === 'sm' ? 'sm' : 'md'} />
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';
