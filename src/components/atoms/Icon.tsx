import { cn } from '@/lib/utils';

const SIZES = {
  xs: 'w-3 h-3',
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8',
} as const;

// Map Untitled UI icon names to Tabler icon equivalents
const ICON_MAP: Record<string, string> = {
  // Navigation
  'home-02': 'home',
  'home': 'home',
  'bar-chart-01': 'chart-bar',
  'cursor-click-02': 'click',
  'lightning-02': 'bolt',
  'check-verified-02': 'shield-check',
  'slash-circle-01': 'ban',
  'file-05': 'file-text',
  'settings-01': 'settings',
  'settings': 'settings',

  // UI Icons
  'align-left': 'menu-2',
  'announcement-02': 'speakerphone',
  'share-04': 'share',
  'share': 'share',
  'user-01': 'user',
  'user': 'user',
  'chevron-selector-vertical': 'selector',
  'chevron-up': 'chevron-up',
  'chevron-down': 'chevron-down',
  'chevron-right': 'chevron-right',
  'chevron-left': 'chevron-left',
  'x-close': 'x',
  'x': 'x',
  'plus': 'plus',
  'minus': 'minus',
  'search': 'search',
  'search-md': 'search',

  // Data/Stats icons
  'shield-01': 'shield',
  'shield-check': 'shield-check',
  'info-circle': 'info-circle',
  'alert-circle': 'alert-circle',
  'alert-triangle': 'alert-triangle',
  'check-circle': 'circle-check',
  'check': 'check',

  // Chart icons
  'trend-up': 'trending-up',
  'trend-down': 'trending-down',
  'arrow-up': 'arrow-up',
  'arrow-down': 'arrow-down',
  'arrow-right': 'arrow-right',
  'arrow-left': 'arrow-left',

  // Action icons
  'download-01': 'download',
  'download': 'download',
  'upload-01': 'upload',
  'upload': 'upload',
  'copy-01': 'copy',
  'copy': 'copy',
  'trash-01': 'trash',
  'trash': 'trash',
  'edit-02': 'edit',
  'edit': 'edit',
  'eye': 'eye',
  'eye-off': 'eye-off',

  // Calendar/Time
  'calendar': 'calendar',
  'clock': 'clock',

  // Communication
  'mail-01': 'mail',
  'mail': 'mail',
  'bell-01': 'bell',
  'bell-02': 'bell',
  'bell': 'bell',
  'book-closed': 'book',
  'book': 'book',

  // Filter/Sort
  'filter-lines': 'filter',
  'filter': 'filter',
  'sort': 'arrows-sort',

  // Brand (kept as-is for tabler brand icons)
  'brand-google': 'brand-google',
  'brand-meta': 'brand-meta',
  'brand-bing': 'brand-bing',

  // Misc
  'dots-vertical': 'dots-vertical',
  'dots-horizontal': 'dots',
  'external-link': 'external-link',
  'link': 'link',
  'refresh': 'refresh',
  'loader': 'loader',
};

interface IconProps {
  /** Icon name (supports both Untitled UI and Tabler names) */
  name: string;
  /** Icon size preset */
  size?: keyof typeof SIZES;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Icon component using Iconify Tabler icons
 * Supports Untitled UI icon names which are mapped to Tabler equivalents
 * @example <Icon name="home-02" size="md" /> // Uses Untitled UI naming
 * @example <Icon name="home" size="md" /> // Direct Tabler name
 */
export function Icon({ name, size = 'md', className }: IconProps) {
  // Map the icon name to its Tabler equivalent, or use the name directly
  const tablerName = ICON_MAP[name] || name;

  return (
    <span
      className={cn(
        `icon-[tabler--${tablerName}]`,
        SIZES[size],
        'inline-block',
        className
      )}
      aria-hidden="true"
    />
  );
}
