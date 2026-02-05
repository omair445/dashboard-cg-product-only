import { cn } from '@/lib/utils';
import { Icon } from './Icon';
import type { TrendDirection } from '@/types';

interface TrendProps {
  /** Trend direction */
  direction: TrendDirection;
  /** Percentage value */
  value: number;
  /** Show "vs. last period" label */
  showLabel?: boolean;
  /** Additional CSS classes */
  className?: string;
}

const TREND_CONFIG = {
  up: {
    icon: 'trending-up',
    color: 'text-trend-up',
  },
  down: {
    icon: 'trending-down',
    color: 'text-trend-down',
  },
  flat: {
    icon: 'minus',
    color: 'text-t-secondary',
  },
} as const;

/**
 * Trend indicator with arrow and percentage
 * @example <Trend direction="up" value={12.4} showLabel />
 */
export function Trend({
  direction,
  value,
  showLabel = false,
  className,
}: TrendProps) {
  const config = TREND_CONFIG[direction];

  return (
    <div className={cn('flex flex-col', className)}>
      <span className={cn('flex items-center text-xs font-medium', config.color)}>
        <Icon name={config.icon} size="xs" className="mr-0.5" />
        {value.toFixed(1)}%
      </span>
      {showLabel && (
        <span className="text-xs text-t-secondary">
          vs. last
          <br />
          period
        </span>
      )}
    </div>
  );
}
