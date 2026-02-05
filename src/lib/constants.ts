// Navigation items for sidebar
export const NAV_SECTIONS = {
  REPORTING: {
    title: 'REPORTING',
    items: [
      { icon: 'home-02', label: 'Dashboard', href: '/' },
      { icon: 'bar-chart-square-02', label: 'Analytics', href: '/analytics' },
      { icon: 'shield-01', label: 'Threat', href: '/threat' },
      { icon: 'cursor-click-02', label: 'Click Forensics', href: '/clicks' },
      { icon: 'calendar', label: 'Scheduled Reports', href: '/scheduled-reports' },
    ],
  },
  PROTECTION: {
    title: 'PROTECTION',
    items: [
      { icon: 'stars-02', label: 'AI + Custom Rules', href: '/rules' },
      { icon: 'shield-tick', label: 'Exclusions', href: '/exclusions' },
      { icon: 'slash-circle-01', label: 'Blacklist', href: '/blacklist' },
    ],
  },
  CONNECTIONS: {
    title: 'CONNECTIONS',
    items: [
      { icon: 'link-03', label: 'Authorizations', href: '/authorizations' },
      { icon: 'credit-card-02', label: 'Ad Accounts', href: '/ad-accounts' },
    ],
  },
} as const;

// Platform configurations
export const PLATFORMS = {
  google: { name: 'Google', color: '#4285F4' },
  meta: { name: 'Meta', color: '#0668E1' },
  bing: { name: 'Bing', color: '#00A4EF' },
} as const;

// Status configurations
export const STATUS_CONFIG = {
  normal: { label: 'Normal', bgColor: 'bg-green-50', textColor: 'text-status-normal' },
  suspicious: { label: 'Suspicious', bgColor: 'bg-orange-50', textColor: 'text-status-suspicious' },
  bad: { label: 'Bad', bgColor: 'bg-red-50', textColor: 'text-status-bad' },
  ignored: { label: 'Ignored', bgColor: 'bg-gray-100', textColor: 'text-status-ignored' },
} as const;

// Chart colors
export const CHART_COLORS = {
  valid: '#A5D6A7',
  invalid: '#EF9A9A',
  suspicious: '#FFF59D',
  informational: '#79C9FF',
  highlighted: '#C9B6FF',
} as const;

// Indicator colors mapping
export const INDICATOR_COLORS = {
  green: 'bg-sea-600',
  yellow: 'bg-yellow-600',
  red: 'bg-cherry-600',
  blue: 'bg-neon-600',
  purple: 'bg-violet-600',
  gray: 'bg-gray-300',
} as const;
