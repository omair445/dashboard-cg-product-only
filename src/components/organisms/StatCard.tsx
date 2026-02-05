import { cn } from '@/lib/utils';
import { LabelWithTooltip } from '../molecules/LabelWithTooltip';
import { StatValue } from '../molecules/StatValue';
import { Dot } from '../atoms/Dot';
import type { TrendDirection } from '@/types';

interface StatCardProps {
  /** Stat label */
  label: string;
  /** Tooltip text */
  tooltip?: string;
  /** Stat value */
  value: string | number;
  /** Trend data */
  trend?: {
    direction: TrendDirection;
    value: number;
  };
  /** Color indicator type */
  indicator?: {
    type: 'bar' | 'dot';
    color: 'green' | 'yellow' | 'red' | 'blue' | 'purple' | 'gray';
  };
  /** Additional CSS classes */
  className?: string;
}

const BAR_COLORS = {
  green: 'bg-sea-600',
  yellow: 'bg-yellow-600',
  red: 'bg-cherry-600',
  blue: 'bg-neon-600',
  purple: 'bg-violet-600',
  gray: 'bg-gray-300',
} as const;

/**
 * Stat card with label, value, trend, and optional indicator
 * @example
 * <StatCard
 *   label="Valid"
 *   value="1,786"
 *   trend={{ direction: 'up', value: 1.2 }}
 *   indicator={{ type: 'dot', color: 'green' }}
 * />
 */
export function StatCard({
  label,
  tooltip,
  value,
  trend,
  indicator,
  className,
}: StatCardProps) {
  return (
    <div className={cn('bg-gray-50 rounded-xl p-4 border border-gray-100', className)}>
      <div className="flex items-start gap-2">
        {/* Indicator */}
        {indicator && (
          <div className="mt-1 flex-shrink-0">
            {indicator.type === 'bar' ? (
              <div className={cn('w-2 h-8 rounded', BAR_COLORS[indicator.color])} />
            ) : (
              <Dot color={indicator.color} size="sm" className="mt-2" />
            )}
          </div>
        )}

        <div className="flex-1 min-w-0">
          <LabelWithTooltip label={label} tooltip={tooltip} className="mb-1" />
          <StatValue value={value} size="md" trend={trend} />
        </div>
      </div>
    </div>
  );
}
