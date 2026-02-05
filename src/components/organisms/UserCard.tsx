import { cn } from '@/lib/utils';
import { Avatar } from '../atoms/Avatar';
import { Text } from '../atoms/Text';
import { Icon } from '../atoms/Icon';

interface UserCardProps {
  /** User initials */
  initials: string;
  /** Workspace/user name */
  name: string;
  /** Email address */
  email: string;
  /** Collapsed mode */
  collapsed?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
}

/**
 * User account card for sidebar footer
 * @example
 * <UserCard initials="DW" name="Demo Workspace" email="user@example.com" />
 */
export function UserCard({
  initials,
  name,
  email,
  collapsed = false,
  onClick,
  className,
}: UserCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-center gap-3 w-full text-left',
        collapsed && 'justify-center',
        className
      )}
    >
      <Avatar initials={initials} size="md" />
      {!collapsed && (
        <>
          <div className="flex-1 min-w-0">
            <Text variant="body" className="font-semibold truncate block">
              {name}
            </Text>
            <Text variant="caption" color="secondary" className="truncate block">
              {email}
            </Text>
          </div>
          <Icon name="chevron-down" size="sm" className="text-gray-400 flex-shrink-0" />
        </>
      )}
    </button>
  );
}
