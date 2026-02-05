import { cn } from '@/lib/utils';
import { Dot } from '../atoms/Dot';
import { Text } from '../atoms/Text';

type Level = 'low' | 'medium' | 'high';

const LEVEL_CONFIG = {
  low: { color: 'green' as const, label: 'Low' },
  medium: { color: 'yellow' as const, label: 'Medium' },
  high: { color: 'red' as const, label: 'High' },
} as const;

interface ProbabilityIndicatorProps {
  /** Probability/threat level */
  level: Level;
  /** Custom label */
  label?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Probability/threat level indicator with colored dot
 * @example <ProbabilityIndicator level="low" />
 */
export function ProbabilityIndicator({
  level,
  label,
  className,
}: ProbabilityIndicatorProps) {
  const config = LEVEL_CONFIG[level];

  return (
    <div className={cn('flex items-center gap-1', className)}>
      <Dot color={config.color} size="sm" />
      <Text variant="body" color="secondary">
        {label || config.label}
      </Text>
    </div>
  );
}
