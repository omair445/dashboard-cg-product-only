'use client';

import { Text } from '@/components/atoms/Text';
import { ShieldIcon, InfoIcon, TrendUpIcon, TrendDownIcon } from '@/components/atoms/Icons';
import { formatCurrency } from '@/lib/formatters';

interface TrafficProtectionData {
  blockedClicks: number;
  blockedTrend: { direction: 'up' | 'down' | 'flat'; value: number };
  preventedWaste: number;
}

interface TrafficProtectionCardProps {
  data: TrafficProtectionData;
}

/**
 * Traffic protection card - matches Figma design exactly
 */
export function TrafficProtectionCard({ data }: TrafficProtectionCardProps) {
  return (
    <div className="bg-white border border-[#e1e1e1] rounded-2xl p-5 col-span-12 lg:col-span-4">
      {/* Header */}
      <div className="flex items-center gap-2 mb-1">
        <ShieldIcon />
        <Text variant="h3" className="text-t-gray-950">Traffic protection</Text>
      </div>

      {/* Divider */}
      <div className="border-b border-gray-200 mb-6" />

      {/* Stats Grid */}
      <div className="flex gap-8 px-1">
        {/* Blocked Clicks */}
        <div className="flex-1">
          <div className="flex items-center gap-1 mb-4">
            <span className="text-sm font-medium text-t-gray-950">Blocked clicks</span>
            <InfoIcon />
          </div>
          <p className="text-[30px] font-medium leading-9 text-t-gray-950 mb-4">
            {data.blockedClicks.toLocaleString()}
          </p>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              {data.blockedTrend.direction === 'up' ? <TrendUpIcon /> : <TrendDownIcon />}
              <span className="text-sm font-medium text-[#097347]">
                {data.blockedTrend.value}%
              </span>
            </div>
            <span className="text-xs font-medium text-[#9f9ea3]">vs. last period</span>
          </div>
        </div>

        {/* Prevented Ad Waste */}
        <div className="flex-1">
          <div className="flex items-center gap-1 mb-4">
            <span className="text-sm font-medium text-t-gray-950">Prevented ad waste</span>
            <InfoIcon />
          </div>
          <p className="text-[30px] font-medium leading-9 text-t-gray-950 mb-4">
            {formatCurrency(data.preventedWaste)}
          </p>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-[#2d37d1]">
              Blocked clicks x CPC avg.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
