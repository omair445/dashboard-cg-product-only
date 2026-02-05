import { cn } from '@/lib/utils';
import { ProgressSegment } from '../atoms/ProgressSegment';

interface Segment {
  /** Percentage (0-100) */
  percentage: number;
  /** Color class (e.g., 'bg-sea-600') */
  colorClass: string;
  /** Optional label */
  label?: string;
}

interface ProgressBarProps {
  /** Progress segments */
  segments: Segment[];
  /** Bar height */
  height?: 'sm' | 'md' | 'lg';
  /** Show percentage labels */
  showLabels?: boolean;
  /** Additional CSS classes */
  className?: string;
}

const HEIGHTS = {
  sm: 'h-2',
  md: 'h-3',
  lg: 'h-4',
} as const;

/**
 * Multi-segment progress bar
 * @example
 * <ProgressBar
 *   segments={[
 *     { percentage: 70, colorClass: 'bg-sea-600' },
 *     { percentage: 10, colorClass: 'bg-yellow-600' },
 *     { percentage: 20, colorClass: 'bg-cherry-600' },
 *   ]}
 * />
 */
export function ProgressBar({
  segments,
  height = 'md',
  showLabels = false,
  className,
}: ProgressBarProps) {
  // Filter out zero-percentage segments
  const validSegments = segments.filter((s) => s.percentage > 0);

  const getPosition = (index: number, total: number) => {
    if (total === 1) return 'only' as const;
    if (index === 0) return 'start' as const;
    if (index === total - 1) return 'end' as const;
    return 'middle' as const;
  };

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <div className={cn('flex items-center gap-0.5 rounded-full overflow-hidden', HEIGHTS[height])}>
        {validSegments.map((segment, index) => (
          <ProgressSegment
            key={index}
            percentage={segment.percentage}
            colorClass={segment.colorClass}
            position={getPosition(index, validSegments.length)}
          />
        ))}
      </div>
      {showLabels && (
        <div className="flex items-center gap-2">
          {validSegments.map((segment, index) => (
            <span
              key={index}
              className={cn(
                'px-2 py-0.5 rounded text-xs font-medium text-t-base-blue',
                segment.colorClass
              )}
            >
              {segment.percentage.toFixed(1)}%
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
