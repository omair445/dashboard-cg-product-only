'use client';

import { Text } from '@/components/atoms/Text';
import { ShieldIcon, InfoIcon, TrendUpIcon, TrendDownIcon } from '@/components/atoms/Icons';

interface TrafficQualityData {
  processed: { value: number; trend: { direction: 'up' | 'down' | 'flat'; value: number } };
  valid: { value: number; percentage: number; trend: { direction: 'up' | 'down' | 'flat'; value: number } };
  suspicious: { value: number; percentage: number; trend: { direction: 'up' | 'down' | 'flat'; value: number } };
  bad: { value: number; percentage: number; trend: { direction: 'up' | 'down' | 'flat'; value: number } };
}

interface TrafficQualityCardProps {
  data: TrafficQualityData;
}

// Individual stat card matching Figma design
interface StatItemProps {
  label: string;
  value: number;
  trend: { direction: 'up' | 'down' | 'flat'; value: number };
  indicator: 'bar' | 'dot';
  indicatorColor: string;
  // For suspicious: up is bad (red), for bad: down is good (green)
  trendPositive?: boolean;
}

function StatItem({ label, value, trend, indicator, indicatorColor, trendPositive = true }: StatItemProps) {
  // Determine trend color based on context
  const isTrendPositive = trendPositive
    ? trend.direction === 'up'
    : trend.direction === 'down';
  const trendColor = isTrendPositive ? '#097347' : '#DE3024';

  return (
    <div className="bg-white border border-[#e1dfff] rounded-2xl px-4 py-3 flex-1 min-w-0">
      <div className="flex items-end gap-1">
        {/* Indicator */}
        <div className="pb-[35px] flex items-start">
          {indicator === 'bar' ? (
            <div className="w-[10px] h-[2px] rounded-full" style={{ backgroundColor: indicatorColor }} />
          ) : (
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: indicatorColor }} />
          )}
        </div>

        {/* Label and Value */}
        <div className="flex flex-col gap-1 flex-1">
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium text-t-gray-950 whitespace-nowrap">{label}</span>
            <InfoIcon />
          </div>
          <span className="text-xl font-medium text-t-gray-950">{value.toLocaleString()}</span>
        </div>

        {/* Trend */}
        <div className="flex items-center gap-1">
          {trend.direction === 'up' ? (
            <TrendUpIcon color={trendColor} />
          ) : trend.direction === 'down' ? (
            <TrendDownIcon color={trendColor} />
          ) : null}
          <span className="text-sm font-medium text-center" style={{ color: trendColor }}>
            {trend.value}%
          </span>
        </div>
      </div>
    </div>
  );
}

/**
 * Traffic quality card with segmented progress bar and stats - matches Figma design exactly
 */
export function TrafficQualityCard({ data }: TrafficQualityCardProps) {
  return (
    <div className="bg-white border border-[#e1e1e1] rounded-2xl p-5 col-span-12 lg:col-span-8">
      {/* Header */}
      <div className="flex items-center gap-2 mb-1">
        <ShieldIcon />
        <Text variant="h3" className="text-t-gray-950">Traffic quality</Text>
      </div>

      {/* Divider line */}
      <div className="border-b border-gray-200 mb-7" />

      {/* Progress Bar with Labels */}
      <div className="flex flex-col gap-2 mb-5">
        {/* Percentage Labels - centered over their respective segments */}
        <div className="flex items-center">
          <div
            className="flex items-center justify-center"
            style={{ flex: data.valid.percentage }}
          >
            <span className="bg-[#a5d6a7] text-t-gray-950 text-sm font-medium px-2 py-0.5 rounded">
              {data.valid.percentage.toFixed(1)}%
            </span>
          </div>
          <div
            className="flex items-center justify-center"
            style={{ flex: data.suspicious.percentage }}
          >
            <span className="bg-[#FFF59D] text-t-gray-950 text-sm font-medium px-2 py-0.5 rounded">
              {data.suspicious.percentage.toFixed(0)}%
            </span>
          </div>
          <div
            className="flex items-center justify-center"
            style={{ flex: data.bad.percentage }}
          >
            <span className="bg-[#eb837c] text-t-gray-950 text-sm font-medium px-2 py-0.5 rounded">
              {data.bad.percentage.toFixed(1)}%
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="flex h-3 rounded-full overflow-hidden">
          <div
            className="bg-[#a5d6a7]"
            style={{ flex: data.valid.percentage }}
          />
          <div
            className="bg-[#FFF59D]"
            style={{ flex: data.suspicious.percentage }}
          />
          <div
            className="bg-[#eb837c]"
            style={{ flex: data.bad.percentage }}
          />
        </div>
      </div>

      {/* Stats Grid - responsive: 2 cols on mobile, 4 cols on desktop */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <StatItem
          label="Processed ad clicks"
          value={data.processed.value}
          trend={data.processed.trend}
          indicator="bar"
          indicatorColor="#616064"
          trendPositive={true}
        />
        <StatItem
          label="Valid"
          value={data.valid.value}
          trend={data.valid.trend}
          indicator="dot"
          indicatorColor="#a5d6a7"
          trendPositive={true}
        />
        <StatItem
          label="Suspicious"
          value={data.suspicious.value}
          trend={data.suspicious.trend}
          indicator="dot"
          indicatorColor="#f3d57c"
          trendPositive={false}
        />
        <StatItem
          label="Bad"
          value={data.bad.value}
          trend={data.bad.trend}
          indicator="dot"
          indicatorColor="#eb837d"
          trendPositive={false}
        />
      </div>
    </div>
  );
}
