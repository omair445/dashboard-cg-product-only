'use client';

import { InfoIcon, TrendUpIcon } from '@/components/atoms/Icons';
import type { ClickStats } from '@/types';

interface ClickKPIsProps {
  data: ClickStats;
}

// Individual KPI card component matching Figma design
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
        {trend && (
          <div className="flex flex-col mb-1">
            <div className="flex items-center gap-1">
              <TrendUpIcon color="#097347" />
              <span className="text-sm font-medium text-[#097347]">
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
 * Click forensics KPI cards - Performance Overview section matching Figma
 * Purple bordered cards with trend indicators
 */
export function ClickKPIs({ data }: ClickKPIsProps) {
  return (
    <div className="bg-white rounded-3xl p-6 mb-6">
      <div className="flex gap-3">
        <KPICard
          label="Processed ad clicks"
          value={data.processed}
          trend={data.trends.processed}
          showInfo={false}
        />
        <KPICard
          label="Normal clicks"
          value={data.normal}
          trend={data.trends.normal}
          showInfo={true}
        />
        <KPICard
          label="Suspicious clicks"
          value={data.suspicious}
          trend={data.trends.suspicious}
          showInfo={true}
        />
        <KPICard
          label="Bad clicks"
          value={data.bad}
          trend={data.trends.bad}
          showInfo={true}
        />
      </div>
    </div>
  );
}
