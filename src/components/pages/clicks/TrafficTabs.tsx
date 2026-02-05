'use client';

import { cn } from '@/lib/utils';

interface TrafficTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

/**
 * Traffic analysis tabs (Analyzed/Live) - Figma pill toggle style with purple gradient
 */
export function TrafficTabs({ activeTab, onTabChange }: TrafficTabsProps) {
  const tabs = [
    { id: 'analyzed', label: 'Analyzed traffic' },
    { id: 'live', label: 'Live monitoring' },
  ];

  return (
    <div className="flex items-center bg-[#f2f2f2] rounded-full w-fit">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            'px-3 py-2 text-base font-medium rounded-full transition-all',
            activeTab === tab.id
              ? 'text-white'
              : 'text-[#9391bd] hover:text-t-base-blue'
          )}
          style={activeTab === tab.id ? {
            backgroundImage: 'linear-gradient(-78.2deg, rgb(145, 138, 255) 3.89%, rgb(94, 84, 253) 93.12%)'
          } : undefined}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
