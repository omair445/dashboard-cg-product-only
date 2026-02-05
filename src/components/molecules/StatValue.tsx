import { cn } from '@/lib/utils';
import { Text } from '../atoms/Text';
import { Trend } from '../atoms/Trend';
import type { TrendDirection } from '@/types';

const SIZES = {
  md: 'stat',
  lg: 'stat',
  xl: 'stat-lg',
} as const;

interface StatValueProps {
  /** Numeric or string value to display */
  value: string | number;
  /** Value size */
  size?: keyof typeof SIZES;
  /** Optional trend indicator */
  trend?: {
    direction: TrendDirection;
    value: number;
  };
  /** Show trend label */
  showTrendLabel?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Large stat value with optional trend
 * @example <StatValue value="2,543" trend={{ direction: 'up', value: 1.5 }} />
 */
export function StatValue({
  value,
  size = 'md',
  trend,
  showTrendLabel = false,
  className,
}: StatValueProps) {
  return (
    <div className={cn('flex items-baseline gap-2', className)}>
      <Text variant={SIZES[size]} as="span">
        {typeof value === 'number' ? value.toLocaleString() : value}
      </Text>
      {trend && (
        <Trend
          direction={trend.direction}
          value={trend.value}
          showLabel={showTrendLabel}
        />
      )}
    </div>
  );
}
