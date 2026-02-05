'use client';

import { CheckVerifiedIcon } from '@/components/atoms/Icons';
import { formatShortDate } from '@/lib/formatters';

interface SourceRow {
  date: Date;
  aiBlocked: number;
  customRules: number;
  manual: number;
}

interface SourcesTableProps {
  data: SourceRow[];
}

// Get intensity level (0-4) based on value for heatmap coloring
function getIntensity(value: number, max: number): number {
  const ratio = value / max;
  if (ratio > 0.85) return 4;
  if (ratio > 0.65) return 3;
  if (ratio > 0.45) return 2;
  if (ratio > 0.25) return 1;
  return 0;
}

// Purple shades for AI column (from lightest to darkest) - matching Figma exactly
const AI_COLORS = [
  'bg-[#eeedfe]', // lightest - 256
  'bg-[#e1dfff]', // 567
  'bg-[#cecbff]', // 1200
  'bg-[#a5a0ff]', // 1389
  'bg-[#a5a0ff]', // darkest
];

// Gray shades for Custom Rules column - matching Figma exactly
const RULES_COLORS = [
  'bg-[#f5f5f5]', // lightest - 256
  'bg-[#ededed]', // 567
  'bg-[#e1e1e1]', // 1200
  'bg-[#c8c8c8]', // 1389
  'bg-[#c8c8c8]', // darkest
];

// Gray shades for Manual column - matching Figma exactly
const MANUAL_COLORS = [
  'bg-[#f5f5f5]', // lightest - 256
  'bg-[#ededed]', // 1200
  'bg-[#e1e1e1]', // 1389
  'bg-[#e1e1e1]', //
  'bg-[#e1e1e1]', // darkest
];

/**
 * New sources blocked table - matches Figma heatmap design exactly
 * Node: 19-19959
 */
export function SourcesTable({ data }: SourcesTableProps) {
  // Calculate max values for heatmap intensity
  const maxAi = Math.max(...data.map((d) => d.aiBlocked));
  const maxRules = Math.max(...data.map((d) => d.customRules));
  const maxManual = Math.max(...data.map((d) => d.manual));

  return (
    <div className="bg-white border border-[#e1e1e1] rounded-2xl col-span-12 lg:col-span-4">
      <div className="px-5 py-5">
        {/* Header */}
        <div className="flex items-center gap-2 mb-1">
          <CheckVerifiedIcon />
          <span className="text-base font-medium text-[#24262d]">New sources blocked</span>
        </div>

        {/* Divider */}
        <div className="border-b border-[#ededed] mb-10" />

        {/* Table */}
        <div className="w-full">
          {/* Table Header */}
          <div className="flex w-full h-[34px] items-center">
            <div className="w-[107px] shrink-0">
              <span className="text-sm font-medium text-[#29282a]">Date</span>
            </div>
            <div className="w-[91px] shrink-0 text-center">
              <span className="text-sm font-medium text-[#29282a]">ClickGuard AI</span>
            </div>
            <div className="w-[91px] shrink-0 text-center">
              <span className="text-sm font-medium text-[#29282a]">Custom Rules</span>
            </div>
            <div className="w-[91px] shrink-0 text-center">
              <span className="text-sm font-medium text-[#29282a]">Manual</span>
            </div>
          </div>

          {/* Table Body */}
          <div className="max-h-[400px] overflow-y-auto scrollbar-thin">
            {data.map((row, index) => {
              const aiIntensity = getIntensity(row.aiBlocked, maxAi);
              const rulesIntensity = getIntensity(row.customRules, maxRules);
              const manualIntensity = getIntensity(row.manual, maxManual);

              return (
                <div key={index} className="flex w-full">
                  {/* Date cell - white background with border */}
                  <div className="w-[107px] shrink-0 h-[57px] bg-white border-b border-[#ededed] flex items-center">
                    <span className="text-sm font-medium text-[#616064]">
                      {formatShortDate(row.date)}
                    </span>
                  </div>

                  {/* AI Blocked cell - purple heatmap */}
                  <div
                    className={`w-[91px] shrink-0 h-[57px] flex items-center justify-center ${AI_COLORS[aiIntensity]}`}
                  >
                    <span className="text-sm font-medium text-[#111553]">
                      {row.aiBlocked.toLocaleString()}
                    </span>
                  </div>

                  {/* Custom Rules cell - gray heatmap */}
                  <div
                    className={`w-[91px] shrink-0 h-[57px] flex items-center justify-center ${RULES_COLORS[rulesIntensity]}`}
                  >
                    <span className="text-sm font-medium text-[#111553]">
                      {row.customRules.toLocaleString()}
                    </span>
                  </div>

                  {/* Manual cell - gray heatmap */}
                  <div
                    className={`w-[91px] shrink-0 h-[57px] flex items-center justify-center ${MANUAL_COLORS[manualIntensity]}`}
                  >
                    <span className="text-sm font-medium text-[#111553]">
                      {row.manual.toLocaleString()}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
