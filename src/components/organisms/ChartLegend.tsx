import { cn } from '@/lib/utils';
import { ChartLegendItem } from '../molecules/ChartLegendItem';

interface LegendItem {
  color: 'green' | 'yellow' | 'red' | 'blue' | 'purple' | 'gray';
  label: string;
}

interface ChartLegendProps {
  /** Legend items */
  items: LegendItem[];
  /** Layout direction */
  direction?: 'horizontal' | 'vertical';
  /** Additional CSS classes */
  className?: string;
}

/**
 * Chart legend with multiple items
 * @example
 * <ChartLegend
 *   items={[
 *     { color: 'green', label: 'Valid clicks' },
 *     { color: 'red', label: 'Invalid traffic' },
 *   ]}
 * />
 */
export function ChartLegend({
  items,
  direction = 'horizontal',
  className,
}: ChartLegendProps) {
  return (
    <div
      className={cn(
        'flex items-center',
        direction === 'horizontal' ? 'gap-6 justify-center' : 'flex-col gap-2 items-start',
        className
      )}
    >
      {items.map((item) => (
        <ChartLegendItem key={item.label} color={item.color} label={item.label} />
      ))}
    </div>
  );
}
