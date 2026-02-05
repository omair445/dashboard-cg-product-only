import { cn } from '@/lib/utils';
import { Icon } from '../atoms/Icon';
import { Text } from '../atoms/Text';

const COLORS = {
  green: 'bg-sea-600',
  yellow: 'bg-yellow-600',
  red: 'bg-cherry-600',
  blue: 'bg-neon-600',
  purple: 'bg-violet-600',
  gray: 'bg-gray-200',
} as const;

interface EntityBadgeProps {
  /** Badge color */
  color: keyof typeof COLORS;
  /** Icon name or emoji */
  icon?: string;
  /** Use emoji instead of icon */
  emoji?: string;
  /** Primary label */
  label: string;
  /** Secondary label (subtitle) */
  sublabel?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Entity indicator with colored circle and label
 * @example <EntityBadge color="green" icon="globe" label="clickguard.com" />
 */
export function EntityBadge({
  color,
  icon,
  emoji,
  label,
  sublabel,
  className,
}: EntityBadgeProps) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div
        className={cn(
          'w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0',
          COLORS[color]
        )}
      >
        {emoji ? (
          <span className="text-xs">{emoji}</span>
        ) : icon ? (
          <Icon name={icon} size="xs" className="text-t-base-blue" />
        ) : null}
      </div>
      <div className="flex flex-col min-w-0">
        <Text variant="body" color="primary" className="truncate">
          {label}
        </Text>
        {sublabel && (
          <Text variant="caption" color="secondary" className="truncate">
            {sublabel}
          </Text>
        )}
      </div>
    </div>
  );
}
