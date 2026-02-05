'use client';

import { useState } from 'react';
import { Text } from '@/components/atoms/Text';
import { Tabs } from '@/components/organisms/Tabs';
import { BaseBarChart } from '@/components/charts/BaseBarChart';
import { LegendDot } from '@/components/atoms/Icons';
import { PlatformIcon } from '@/components/atoms/PlatformIcon';
import { formatPercent } from '@/lib/formatters';

interface PlatformStats {
  name: string;
  platform: 'google' | 'meta' | 'bing';
  percentage: number;
  value: number;
}

interface ChannelsData {
  labels: string[];
  validClicks: number[];
  badClicks: number[];
  platforms: PlatformStats[];
}

interface ChannelsSectionProps {
  data: ChannelsData;
}

/**
 * Channels bar chart section with platform stats - matches Figma design
 */
export function ChannelsSection({ data }: ChannelsSectionProps) {
  const [activeTab, setActiveTab] = useState('channels');

  return (
    <div className="bg-white border border-[#e1e1e1] rounded-2xl p-5 col-span-12 lg:col-span-6">
      {/* Tabs */}
      <Tabs
        tabs={[
          { id: 'channels', label: 'Channels' },
          { id: 'ad-account', label: 'Ad account' },
          { id: 'campaign-types', label: 'Campaign types' },
        ]}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <div className="mt-6">
        {/* Chart */}
        <BaseBarChart
          labels={data.labels}
          datasets={[
            { label: 'Valid Clicks', data: data.validClicks, color: 'valid' },
            { label: 'Bad Clicks', data: data.badClicks, color: 'invalid' },
          ]}
          height={208}
          stacked
          options={{
            scales: {
              x: {
                ticks: { display: false },
              },
              y: {
                min: 0,
                max: 100,
                ticks: {
                  callback: (value) => `${value}%`,
                },
              },
            },
          }}
        />

        {/* Platform Stats */}
        <div className="border-t border-gray-200 mt-4 pt-4">
          <div className="grid grid-cols-3 gap-4">
            {data.platforms.map((platform) => (
              <div key={platform.name} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <PlatformIcon platform={platform.platform} size="sm" />
                  <Text variant="body" color="secondary">
                    {platform.name}
                  </Text>
                </div>
                <Text variant="h2" as="p" className="text-t-base-blue">
                  {formatPercent(platform.percentage)}
                </Text>
                <Text variant="caption" color="secondary">
                  {platform.value.toLocaleString()}
                </Text>
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <LegendDot color="#a5d6a7" />
            <span className="text-sm font-medium text-[#9f9ea3]">Valid Clicks</span>
          </div>
          <div className="flex items-center gap-2">
            <LegendDot color="#eb837d" />
            <span className="text-sm font-medium text-[#9f9ea3]">Bad Clicks</span>
          </div>
        </div>
      </div>
    </div>
  );
}
