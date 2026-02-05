import { cn } from '@/lib/utils';
import { Dot } from '../atoms/Dot';
import { Text } from '../atoms/Text';

interface ChartLegendItemProps {
  /** Legend color */
  color: 'green' | 'yellow' | 'red' | 'blue' | 'purple' | 'gray';
  /** Legend label */
  label: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Single chart legend item
 * @example <ChartLegendItem color="green" label="Valid clicks" />
 */
export function ChartLegendItem({ color, label, className }: ChartLegendItemProps) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Dot color={color} size="md" />
      <Text variant="body" color="secondary">
        {label}
      </Text>
    </div>
  );
}
