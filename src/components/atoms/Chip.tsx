import { cn } from '@/lib/utils';
import { Icon } from './Icon';

interface ChipProps {
  /** Chip label */
  label: string;
  /** Optional value displayed after label */
  value?: string;
  /** Show remove button */
  removable?: boolean;
  /** Remove callback */
  onRemove?: () => void;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Removable filter chip/tag
 * @example <Chip label="Type:" value="Ad click" removable onRemove={() => {}} />
 */
export function Chip({
  label,
  value,
  removable = false,
  onRemove,
  className,
}: ChipProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-1 px-3 py-1.5 bg-gray-100 rounded-full text-sm',
        className
      )}
    >
      <span className="text-t-secondary">{label}</span>
      {value && <span className="font-medium text-t-base-blue">{value}</span>}
      {removable && (
        <button
          onClick={onRemove}
          className="ml-1 hover:text-t-base-blue text-t-secondary transition-colors"
          aria-label={`Remove ${label} filter`}
        >
          <Icon name="x" size="xs" />
        </button>
      )}
    </div>
  );
}
