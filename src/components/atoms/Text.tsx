import { cn } from '@/lib/utils';

const VARIANTS = {
  h1: 'text-2xl font-bold text-t-heading leading-8',
  h2: 'text-lg font-semibold text-t-base-blue leading-7',
  h3: 'text-base font-semibold text-t-base-blue leading-6',
  body: 'text-sm font-normal text-t-base-blue leading-5',
  caption: 'text-xs font-normal text-t-secondary leading-4',
  label: 'text-sm font-medium text-t-base-blue leading-5',
  stat: 'text-3xl font-bold text-t-base-blue leading-9',
  'stat-lg': 'text-4xl font-bold text-t-base-blue leading-10',
} as const;

const COLORS = {
  primary: 'text-t-base-blue',
  secondary: 'text-t-secondary',
  heading: 'text-t-heading',
  success: 'text-status-normal',
  error: 'text-status-bad',
  warning: 'text-status-suspicious',
  muted: 'text-gray-400',
  inherit: '',
} as const;

type TextVariant = keyof typeof VARIANTS;
type TextColor = keyof typeof COLORS;

interface TextProps {
  /** Typography variant */
  variant?: TextVariant;
  /** Text color override */
  color?: TextColor;
  /** Render as different element */
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'div' | 'label';
  /** Additional CSS classes */
  className?: string;
  /** Content */
  children: React.ReactNode;
}

/**
 * Unified typography component
 * @example <Text variant="h1">Dashboard</Text>
 */
export function Text({
  variant = 'body',
  color,
  as: Component = 'span',
  className,
  children,
}: TextProps) {
  return (
    <Component
      className={cn(
        VARIANTS[variant],
        color && COLORS[color],
        className
      )}
    >
      {children}
    </Component>
  );
}
