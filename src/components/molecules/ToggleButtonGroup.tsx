'use client';

import { cn } from '@/lib/utils';

interface Option {
  id: string;
  label: string;
}

interface ToggleButtonGroupProps {
  /** Array of toggle options */
  options: Option[];
  /** Currently selected option id */
  value: string;
  /** Callback when selection changes */
  onChange: (id: string) => void;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Toggle button group component - matches Figma design exactly (node 19:20116)
 * Active: Purple gradient with white text
 * Inactive: Transparent with gray text
 */
export function ToggleButtonGroup({ options, value, onChange, className }: ToggleButtonGroupProps) {
  return (
    <div className={cn('flex items-center p-1 bg-[#f2f2f2] rounded-full w-fit', className)}>
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => onChange(option.id)}
          className={cn(
            'px-3 py-2 text-base font-medium rounded-full transition-all',
            value === option.id
              ? 'text-white'
              : 'text-[#9391bd] hover:text-[#7169ff]'
          )}
          style={value === option.id ? {
            backgroundImage: 'linear-gradient(-81.6deg, #918AFF 3.89%, #5E54FD 93.12%)'
          } : undefined}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
