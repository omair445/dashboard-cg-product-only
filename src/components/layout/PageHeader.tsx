import { cn } from '@/lib/utils';
import { Text } from '../atoms/Text';
import { Icon } from '../atoms/Icon';

interface PageHeaderProps {
  /** Page title */
  title: string;
  /** Page subtitle/description */
  subtitle?: string;
  /** Link in subtitle */
  link?: {
    text: string;
    href: string;
  };
  /** Right side content */
  actions?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Simple page header with title and optional subtitle
 * @example <PageHeader title="Blacklist" subtitle="List of blacklisted entities" />
 */
export function PageHeader({
  title,
  subtitle,
  link,
  actions,
  className,
}: PageHeaderProps) {
  return (
    <div className={cn('flex items-start justify-between mb-6', className)}>
      <div>
        <Text variant="h1" as="h1" className="mb-1">
          {title}
        </Text>
        {subtitle && (
          <Text variant="body" color="secondary" as="p">
            {subtitle}
            {link && (
              <>
                {' '}
                <a
                  href={link.href}
                  className="text-primary-500 hover:underline inline-flex items-center gap-0.5"
                >
                  {link.text}
                  <Icon name="external-link" size="xs" />
                </a>
              </>
            )}
          </Text>
        )}
      </div>
      {actions && <div className="flex items-center gap-3">{actions}</div>}
    </div>
  );
}
