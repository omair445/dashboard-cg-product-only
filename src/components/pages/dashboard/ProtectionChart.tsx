'use client';

import { Card } from '@/components/layout/Card';
import { Text } from '@/components/atoms/Text';
import { ChartLineIcon, ChevronDownIcon, LegendDot } from '@/components/atoms/Icons';
import { BaseLineChart } from '@/components/charts/BaseLineChart';

interface ProtectionChartData {
  labels: string[];
  processedClicks: number[];
  invalidRate: number[];
}

interface ProtectionChartProps {
  data: ProtectionChartData;
}

/**
 * Protection analysis line chart with dual Y-axes - matches Figma design
 */
export function ProtectionChart({ data }: ProtectionChartProps) {
  return (
    <Card padding="md" className="col-span-12 lg:col-span-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          <ChartLineIcon />
          <Text variant="h2" className="text-t-gray-950">Protection analysis</Text>
        </div>

        {/* Dropdown button */}
        <button className="flex items-center gap-2 px-4 py-2.5 border border-t-dark-blue rounded-full text-t-base-blue font-medium text-sm hover:bg-gray-50 transition-colors">
          <span>Prevented ad waste</span>
          <ChevronDownIcon />
        </button>
      </div>

      {/* Divider */}
      <div className="border-b border-gray-200 mb-6" />

      {/* Chart */}
      <BaseLineChart
        labels={data.labels}
        datasets={[
          { label: 'Processed ad clicks', data: data.processedClicks, color: 'valid', fill: true },
          { label: 'Invalid traffic rate', data: data.invalidRate, color: 'invalid', fill: true, yAxisID: 'y1' },
        ]}
        height={256}
        dualAxis
        options={{
          scales: {
            y: {
              min: 0,
              max: 100,
              ticks: {
                callback: (value) => `${value}`,
              },
            },
            y1: {
              min: 0,
              max: 1250,
              ticks: {
                callback: (value) => `${value}`,
              },
            },
          },
        }}
      />

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <LegendDot color="#9f9ea3" />
          <span className="text-sm font-medium text-[#9f9ea3]">Processed ad clicks</span>
        </div>
        <div className="flex items-center gap-2">
          <LegendDot color="#eb837d" />
          <span className="text-sm font-medium text-[#9f9ea3]">Invalid traffic rate</span>
        </div>
      </div>
    </Card>
  );
}
