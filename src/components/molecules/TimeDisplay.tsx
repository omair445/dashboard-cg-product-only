import { cn } from '@/lib/utils';
import { Text } from '../atoms/Text';
import { formatRelativeTime, formatDate } from '@/lib/formatters';

interface TimeDisplayProps {
  /** Date to display */
  date: Date;
  /** Show relative time (e.g., "3 minutes ago") */
  showRelative?: boolean;
  /** Show absolute time */
  showAbsolute?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Time display with relative and/or absolute format
 * @example <TimeDisplay date={new Date()} showRelative showAbsolute />
 */
export function TimeDisplay({
  date,
  showRelative = true,
  showAbsolute = true,
  className,
}: TimeDisplayProps) {
  return (
    <div className={cn('flex flex-col', className)}>
      {showRelative && (
        <Text variant="body" color="primary" as="div">
          {formatRelativeTime(date)}
        </Text>
      )}
      {showAbsolute && (
        <Text variant="caption" color="muted" as="div">
          {formatDate(date)}
        </Text>
      )}
    </div>
  );
}
