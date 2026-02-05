import { Text } from '../atoms/Text';
import { NavItem } from '../molecules/NavItem';

interface NavSectionItem {
  icon: string;
  label: string;
  href: string;
}

interface NavSectionProps {
  /** Section title */
  title: string;
  /** Navigation items */
  items: NavSectionItem[];
  /** Collapsed mode */
  collapsed?: boolean;
}

/**
 * Navigation section with title and items
 * @example
 * <NavSection
 *   title="REPORTING"
 *   items={[{ icon: 'home', label: 'Dashboard', href: '/' }]}
 * />
 */
export function NavSection({ title, items, collapsed = false }: NavSectionProps) {
  return (
    <div>
      {!collapsed && (
        <Text
          variant="caption"
          color="secondary"
          as="div"
          className="px-3 mb-2 uppercase tracking-wider text-[11px] font-medium"
        >
          {title}
        </Text>
      )}
      <div className="space-y-1">
        {items.map((item) => (
          <NavItem
            key={item.href}
            icon={item.icon}
            label={item.label}
            href={item.href}
            collapsed={collapsed}
          />
        ))}
      </div>
    </div>
  );
}
