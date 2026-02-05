import { cn } from '@/lib/utils';

const SIZES = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-12 h-12 text-base',
} as const;

interface AvatarProps {
  /** User's initials (e.g., "JD" for John Doe) */
  initials: string;
  /** Avatar size */
  size?: keyof typeof SIZES;
  /** Custom background gradient/color */
  bgClass?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Avatar component displaying user initials
 * @example <Avatar initials="DW" size="md" />
 */
export function Avatar({
  initials,
  size = 'md',
  bgClass = 'bg-gradient-to-br from-purple-400 to-purple-600',
  className,
}: AvatarProps) {
  return (
    <div
      className={cn(
        'rounded-full flex items-center justify-center text-white font-medium',
        SIZES[size],
        bgClass,
        className
      )}
    >
      {initials.slice(0, 2).toUpperCase()}
    </div>
  );
}
