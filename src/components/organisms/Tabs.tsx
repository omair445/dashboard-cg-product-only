'use client';

import { cn } from '@/lib/utils';

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  /** Tab items */
  tabs: Tab[];
  /** Active tab ID */
  activeTab: string;
  /** Tab change handler */
  onTabChange: (tabId: string) => void;
  /** Tab style variant */
  variant?: 'underline' | 'pill';
  /** Additional CSS classes */
  className?: string;
}

/**
 * Tab navigation component - matches Figma design
 * @example
 * <Tabs
 *   tabs={[{ id: 'campaigns', label: 'Campaigns' }]}
 *   activeTab="campaigns"
 *   onTabChange={setActiveTab}
 * />
 */
export function Tabs({
  tabs,
  activeTab,
  onTabChange,
  variant = 'underline',
  className,
}: TabsProps) {
  if (variant === 'pill') {
    return (
      <div className={cn('flex items-center gap-2', className)}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              'px-4 py-2 text-sm font-medium rounded-full transition-colors',
              activeTab === tab.id
                ? 'bg-sea-600 text-t-base-blue'
                : 'text-t-secondary hover:bg-gray-50'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className={cn('flex items-center gap-6 border-b border-gray-200', className)}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            'pb-3 text-sm font-medium transition-colors relative',
            activeTab === tab.id
              ? 'text-t-base-blue'
              : 'text-[#9f9ea3] hover:text-t-base-blue'
          )}
        >
          {tab.label}
          {activeTab === tab.id && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-t-dark-blue" />
          )}
        </button>
      ))}
    </div>
  );
}
