import { cn } from '@/lib/utils';
import { Card } from '../layout/Card';
import { LabelWithTooltip } from '../molecules/LabelWithTooltip';
import { StatValue } from '../molecules/StatValue';
import { Text } from '../atoms/Text';
import type { TrendDirection } from '@/types';

interface KPICardProps {
  /** KPI label */
  label: string;
  /** Tooltip text */
  tooltip?: string;
  /** KPI value */
  value: string | number;
  /** Trend data */
  trend?: {
    direction: TrendDirection;
    value: number;
  };
  /** Subtext below value */
  subtext?: string;
  /** Subtext color variant */
  subtextColor?: 'primary' | 'secondary' | 'success';
  /** Additional CSS classes */
  className?: string;
}

/**
 * Large KPI card for prominent metrics
 * @example
 * <KPICard
 *   label="Blocked clicks"
 *   value={819}
 *   trend={{ direction: 'up', value: 12.4 }}
 *   subtext="vs. last period"
 * />
 */
export function KPICard({
  label,
  tooltip,
  value,
  trend,
  subtext,
  subtextColor = 'secondary',
  className,
}: KPICardProps) {
  return (
    <Card padding="md" className={cn('', className)}>
      <LabelWithTooltip label={label} tooltip={tooltip} className="mb-2" />
      <StatValue value={value} size="xl" trend={trend} showTrendLabel />
      {subtext && (
        <Text
          variant="caption"
          color={subtextColor === 'primary' ? 'primary' : subtextColor === 'success' ? 'success' : 'secondary'}
          as="p"
          className="mt-1"
        >
          {subtext}
        </Text>
      )}
    </Card>
  );
}
