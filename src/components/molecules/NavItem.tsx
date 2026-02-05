'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Icon } from '../atoms/Icon';
import { Text } from '../atoms/Text';

interface NavItemProps {
  /** Tabler icon name */
  icon: string;
  /** Navigation label */
  label: string;
  /** Navigation URL */
  href: string;
  /** Force active state (overrides auto-detection) */
  isActive?: boolean;
  /** Collapsed mode (icon only) */
  collapsed?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Sidebar navigation item
 * @example <NavItem icon="home-02" label="Dashboard" href="/" />
 */
export function NavItem({
  icon,
  label,
  href,
  isActive: forcedActive,
  collapsed = false,
  className,
}: NavItemProps) {
  const pathname = usePathname();
  const isActive = forcedActive ?? (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors',
        isActive
          ? 'bg-primary-50 text-t-gray-950'
          : 'text-t-menu hover:bg-gray-50',
        collapsed && 'justify-center px-2',
        className
      )}
    >
      <Icon name={icon} size="md" />
      {!collapsed && (
        <Text variant="body" className="font-medium">
          {label}
        </Text>
      )}
    </Link>
  );
}
