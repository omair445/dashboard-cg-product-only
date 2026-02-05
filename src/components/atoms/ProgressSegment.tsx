import { cn } from '@/lib/utils';

type Position = 'start' | 'middle' | 'end' | 'only';

interface ProgressSegmentProps {
  /** Width percentage (0-100) */
  percentage: number;
  /** Background color class */
  colorClass: string;
  /** Position in the progress bar for rounded corners */
  position: Position;
  /** Additional CSS classes */
  className?: string;
}

const POSITION_RADIUS = {
  start: 'rounded-l-full',
  middle: '',
  end: 'rounded-r-full',
  only: 'rounded-full',
} as const;

/**
 * Single segment of a multi-color progress bar
 * @example <ProgressSegment percentage={70} colorClass="bg-sea-600" position="start" />
 */
export function ProgressSegment({
  percentage,
  colorClass,
  position,
  className,
}: ProgressSegmentProps) {
  if (percentage <= 0) return null;

  return (
    <div
      className={cn('h-full', colorClass, POSITION_RADIUS[position], className)}
      style={{ width: `${percentage}%` }}
      role="progressbar"
      aria-valuenow={percentage}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  );
}
