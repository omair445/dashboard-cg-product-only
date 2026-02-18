'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const settingsSections = [
  {
    title: 'WEBSITE',
    items: [
      { label: 'Preferences', href: '/settings/preferences' },
      { label: 'Tracking code', href: '/settings/tracking-code' },
      { label: 'Conversion tracking', href: '/settings/conversion-tracking' },
    ],
  },
  {
    title: 'WORKSPACE',
    items: [
      { label: 'Preferences', href: '/settings/workspace-preferences' },
      { label: 'Team access', href: '/settings/team-access' },
      { label: 'Billing', href: '/settings/billing' },
    ],
  },
  {
    title: 'PERSONAL',
    items: [
      { label: 'Offers', href: '/settings/offers' },
      { label: 'Profile', href: '/settings/profile' },
      { label: 'Notifications', href: '/settings/notifications' },
      { label: 'Security', href: '/settings/security' },
    ],
  },
];

export function SettingsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex items-start px-8 py-6">
      <nav className="bg-white rounded-[24px] px-8 py-6 w-[212px] flex flex-col gap-8">
        {settingsSections.map((section) => (
          <div key={section.title} className="flex flex-col gap-6">
            {/* Section Title */}
            <p className="text-[14px] leading-[18px] font-normal text-[#565e73]">
              {section.title}
            </p>

            {/* Section Items */}
            <div className="flex flex-col gap-3">
              {section.items.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'text-[14px] leading-[18px] font-medium transition-colors',
                      isActive
                        ? 'text-[#2d37d1]'
                        : 'text-[#111553] hover:opacity-70'
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}
