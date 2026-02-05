'use client';

import { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import type { ChartData, ChartOptions } from 'chart.js';
import { cn } from '@/lib/utils';
import { baseLineOptions, createGradient, CHART_COLORS } from './chartConfig';

interface Dataset {
  label: string;
  data: number[];
  color: keyof typeof CHART_COLORS;
  fill?: boolean;
  yAxisID?: string;
}

interface BaseLineChartProps {
  /** Chart labels (x-axis) */
  labels: string[];
  /** Chart datasets */
  datasets: Dataset[];
  /** Chart height */
  height?: number;
  /** Show dual Y-axis */
  dualAxis?: boolean;
  /** Custom options override */
  options?: Partial<ChartOptions<'line'>>;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Base line chart component
 * @example
 * <BaseLineChart
 *   labels={['Jan', 'Feb', 'Mar']}
 *   datasets={[{ label: 'Sales', data: [10, 20, 30], color: 'valid' }]}
 * />
 */
export function BaseLineChart({
  labels,
  datasets,
  height = 256,
  dualAxis = false,
  options: customOptions,
  className,
}: BaseLineChartProps) {
  const chartRef = useRef<HTMLCanvasElement>(null);

  const data: ChartData<'line'> = {
    labels,
    datasets: datasets.map((ds, index) => ({
      label: ds.label,
      data: ds.data,
      borderColor: CHART_COLORS[ds.color],
      backgroundColor: ds.fill ? CHART_COLORS[ds.color] + '40' : 'transparent',
      borderWidth: 2,
      fill: ds.fill ?? true,
      tension: 0.4,
      pointRadius: 0,
      pointHoverRadius: 5,
      yAxisID: ds.yAxisID || (dualAxis && index > 0 ? 'y1' : 'y'),
    })),
  };

  const mergedOptions: ChartOptions<'line'> = {
    ...baseLineOptions,
    ...customOptions,
    scales: {
      ...baseLineOptions.scales,
      ...(dualAxis && {
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          grid: {
            drawOnChartArea: false,
          },
          ticks: {
            color: '#475467',
          },
        },
      }),
      ...customOptions?.scales,
    },
  };

  return (
    <div className={cn('relative', className)} style={{ height }}>
      <Line data={data} options={mergedOptions} />
    </div>
  );
}
