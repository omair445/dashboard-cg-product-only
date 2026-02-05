'use client';

import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

interface FilterButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button label */
  label: string;
  /** Left icon name */
  icon?: string;
  /** Show ClickGuard logo icon */
  showLogo?: boolean;
  /** Active/selected state */
  isActive?: boolean;
  /** Pill shape (rounded-full) vs rounded-xl */
  pill?: boolean;
}

// Small ClickGuard logo for dropdown
function SmallLogo() {
  return (
    <div className="w-6 h-6 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
      <svg width="15" height="18" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.24795 9.62263L11.3594 9.02399C11.5152 8.97735 11.7645 8.97735 11.9125 9.02399L14.0239 9.62263C14.1798 9.66927 14.4291 9.70038 14.5927 9.70038H17.4832C17.6391 9.70038 17.7715 9.56821 17.7715 9.41272V7.50795C17.7715 7.35246 17.6469 7.18143 17.491 7.14255L11.9125 5.5721C11.7567 5.52545 11.5074 5.52545 11.3594 5.5721L5.78089 7.14255C5.62507 7.1892 5.5004 7.35246 5.5004 7.50795V17.7626C5.5004 17.9181 5.60949 18.1202 5.74973 18.198L11.3905 21.5876C11.523 21.6731 11.7489 21.6731 11.8892 21.5876L17.5299 18.198C17.6702 18.1125 17.7792 17.9181 17.7792 17.7626V16.9696C17.7792 16.8141 17.6469 16.6818 17.491 16.6818H14.6005C14.4446 16.6818 14.2031 16.7518 14.0629 16.8296L11.8892 18.128C11.7489 18.2135 11.5308 18.2135 11.3905 18.128L9.21679 16.8296C9.07655 16.7441 8.96748 16.5498 8.96748 16.3942V9.98804C8.96748 9.83254 9.09213 9.6615 9.24795 9.62263Z" fill="white"/>
        <path d="M22.8215 3.069L12.0853 0.0524781C11.8438 -0.0174927 11.4386 -0.0174927 11.1971 0.0524781L0.453099 3.069C0.211572 3.13898 0.00900269 3.40331 0.00900269 3.65209V20.6783C0.00900269 20.9349 0.1882 21.2459 0.406352 21.378L11.2438 27.9008C11.462 28.0331 11.8204 28.0331 12.0385 27.9008L22.876 21.378C23.0942 21.2459 23.2734 20.9349 23.2734 20.6783V11.932C23.2734 11.6754 23.0631 11.4733 22.8137 11.4733H12.1087C11.8515 11.4733 11.649 11.6832 11.649 11.932V14.4742C11.649 14.7308 11.8593 14.933 12.1087 14.933H19.3388C19.5959 14.933 19.7985 15.1429 19.7985 15.3917V18.7192C19.7985 18.9757 19.6193 19.2867 19.4012 19.4189L12.0385 23.8503C11.8204 23.9825 11.462 23.9825 11.2438 23.8503L3.8812 19.4189C3.66305 19.2867 3.48386 18.9757 3.48386 18.7192V6.14771C3.48386 5.89115 3.68643 5.62682 3.92796 5.55685L11.1971 3.50437C11.4386 3.4344 11.8438 3.4344 12.0853 3.50437L19.3544 5.55685C19.5959 5.62682 19.7985 5.89115 19.7985 6.14771V9.23421C19.7985 9.49076 20.0089 9.6929 20.2582 9.6929H22.806C23.0631 9.6929 23.2656 9.48299 23.2656 9.23421V3.65209C23.2656 3.39553 23.0631 3.1312 22.8215 3.069Z" fill="white"/>
      </svg>
    </div>
  );
}

// Calendar icon SVG
function CalendarIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 10H3M16 2V6M8 2V6M7.8 22H16.2C17.8802 22 18.7202 22 19.362 21.673C19.9265 21.3854 20.3854 20.9265 20.673 20.362C21 19.7202 21 18.8802 21 17.2V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22Z" stroke="#111553" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Chevron down icon SVG
function ChevronDownIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 9L12 15L18 9" stroke="#111553" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/**
 * Filter dropdown trigger button - matches Figma design
 * @example <FilterButton label="Platforms" icon="globe" />
 */
export const FilterButton = forwardRef<HTMLButtonElement, FilterButtonProps>(
  ({ label, icon, showLogo = false, isActive = false, pill = true, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'flex items-center gap-2 px-4 py-2.5 text-base font-medium transition-colors border',
          pill ? 'rounded-full' : 'rounded-xl',
          'border-t-dark-blue text-t-base-blue hover:bg-gray-50',
          className
        )}
        {...props}
      >
        {showLogo && <SmallLogo />}
        {icon === 'calendar' && !showLogo && <CalendarIcon />}
        <span className="whitespace-nowrap">{label}</span>
        <ChevronDownIcon />
      </button>
    );
  }
);

FilterButton.displayName = 'FilterButton';
