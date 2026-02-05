'use client';

import { InfoIcon, TrendUpIcon, TrendDownIcon } from '@/components/atoms/Icons';
import type { BlacklistStats as BlacklistStatsType } from '@/types';

interface BlacklistStatsProps {
  data: BlacklistStatsType;
}

// Individual KPI card component matching Figma design (same as clicks page)
function KPICard({
  label,
  value,
  trend,
  showInfo = false,
}: {
  label: string;
  value: number;
  trend?: { direction: 'up' | 'down' | 'flat'; value: number };
  showInfo?: boolean;
}) {
  const isUp = trend?.direction === 'up';
  const isDown = trend?.direction === 'down';
  const trendColor = isUp ? '#097347' : isDown ? '#B42318' : '#9f9ea3';

  return (
    <div className="flex-1 bg-white border border-[#918aff] rounded-2xl h-[120px] p-5 flex flex-col justify-between">
      {/* Label with optional help icon */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-[#24262d]">{label}</span>
        {showInfo && (
          <InfoIcon className="w-4 h-4 text-[#9f9ea3]" />
        )}
      </div>

      {/* Value and trend */}
      <div className="flex items-end gap-1">
        <span className="text-[30px] font-medium text-[#24262d] leading-9">
          {value.toLocaleString()}
        </span>
        {trend && trend.value > 0 && (
          <div className="flex flex-col mb-1">
            <div className="flex items-center gap-1">
              {isUp ? (
                <TrendUpIcon color={trendColor} />
              ) : isDown ? (
                <TrendDownIcon color={trendColor} />
              ) : null}
              <span className="text-sm font-medium" style={{ color: trendColor }}>
                {trend.value}%
              </span>
            </div>
            <span className="text-xs font-medium text-[#9f9ea3]">vs. last period</span>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Blacklist stats KPI cards - Performance Overview section matching Figma
 * Purple bordered cards with trend indicators (same style as clicks page)
 */
export function BlacklistStats({ data }: BlacklistStatsProps) {
  return (
    <div className="bg-white rounded-3xl p-6 mb-6">
      <div className="flex gap-3">
        <KPICard
          label="Total entries"
          value={data.total}
          trend={data.trends.total}
          showInfo={false}
        />
        <KPICard
          label="IP addresses"
          value={data.ipAddresses}
          trend={data.trends.ipAddresses}
          showInfo={true}
        />
        <KPICard
          label="IP ranges"
          value={data.ipRanges}
          trend={data.trends.ipRanges}
          showInfo={true}
        />
        <KPICard
          label="Devices"
          value={data.devices}
          trend={data.trends.devices}
          showInfo={true}
        />
      </div>
    </div>
  );
}
