import { cn } from '@/lib/utils';
import { Text } from '../atoms/Text';
import { Icon } from '../atoms/Icon';

interface LabelWithTooltipProps {
  /** Label text */
  label: string;
  /** Tooltip content (shows info icon if provided) */
  tooltip?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Label with optional info tooltip icon
 * @example <LabelWithTooltip label="Processed ad clicks" tooltip="Total clicks processed" />
 */
export function LabelWithTooltip({
  label,
  tooltip,
  className,
}: LabelWithTooltipProps) {
  return (
    <div className={cn('flex items-center gap-1', className)}>
      <Text variant="body" color="secondary">
        {label}
      </Text>
      {tooltip && (
        <span className="text-gray-400 cursor-help" title={tooltip}>
          <Icon name="info-circle" size="sm" />
        </span>
      )}
    </div>
  );
}
