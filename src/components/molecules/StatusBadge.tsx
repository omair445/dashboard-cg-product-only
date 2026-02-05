import { cn } from '@/lib/utils';
import { STATUS_CONFIG } from '@/lib/constants';
import type { Status } from '@/types';

interface StatusBadgeProps {
  /** Status type */
  status: Status;
  /** Custom label (defaults to status name) */
  label?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Color-coded status badge/pill
 * @example <StatusBadge status="normal" />
 */
export function StatusBadge({ status, label, className }: StatusBadgeProps) {
  const config = STATUS_CONFIG[status];

  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-1 rounded-full text-xs font-medium',
        config.bgColor,
        config.textColor,
        className
      )}
    >
      {label || config.label}
    </span>
  );
}
