import { cn } from '@/lib/utils';
import { INDICATOR_COLORS } from '@/lib/constants';

const SIZES = {
  sm: 'w-2 h-2',
  md: 'w-3 h-3',
  lg: 'w-4 h-4',
} as const;

type DotColor = keyof typeof INDICATOR_COLORS;

interface DotProps {
  /** Dot color */
  color: DotColor;
  /** Dot size */
  size?: keyof typeof SIZES;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Small colored indicator dot
 * @example <Dot color="green" size="sm" />
 */
export function Dot({ color, size = 'sm', className }: DotProps) {
  return (
    <span
      className={cn(
        'rounded-full inline-block flex-shrink-0',
        SIZES[size],
        INDICATOR_COLORS[color],
        className
      )}
      aria-hidden="true"
    />
  );
}
