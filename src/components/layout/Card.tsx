import { cn } from '@/lib/utils';

interface CardProps {
  /** Card padding */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Card content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

const PADDING = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
} as const;

/**
 * Base card container with rounded corners and border
 * @example <Card padding="md">Content</Card>
 */
export function Card({ padding = 'md', children, className }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-3xl border border-card-border',
        PADDING[padding],
        className
      )}
    >
      {children}
    </div>
  );
}

// Card Header sub-component
interface CardHeaderProps {
  /** Header icon name */
  icon?: string;
  /** Header title */
  title: string;
  /** Right side action */
  action?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export function CardHeader({ title, action, className }: CardHeaderProps) {
  return (
    <div className={cn('flex items-center justify-between mb-4', className)}>
      <h3 className="text-base font-semibold text-t-base-blue">{title}</h3>
      {action}
    </div>
  );
}
