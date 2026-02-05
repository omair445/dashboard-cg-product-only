'use client';

import { Bar } from 'react-chartjs-2';
import type { ChartData, ChartOptions } from 'chart.js';
import { cn } from '@/lib/utils';
import { baseBarOptions, CHART_COLORS } from './chartConfig';

interface Dataset {
  label: string;
  data: number[];
  color: keyof typeof CHART_COLORS;
}

interface BaseBarChartProps {
  /** Chart labels (x-axis) */
  labels: string[];
  /** Chart datasets */
  datasets: Dataset[];
  /** Chart height */
  height?: number;
  /** Stacked bars */
  stacked?: boolean;
  /** Horizontal bars */
  horizontal?: boolean;
  /** Custom options override */
  options?: Partial<ChartOptions<'bar'>>;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Base bar chart component
 * @example
 * <BaseBarChart
 *   labels={['Google', 'Meta', 'Bing']}
 *   datasets={[
 *     { label: 'Valid', data: [65, 75, 55], color: 'valid' },
 *     { label: 'Invalid', data: [35, 25, 45], color: 'invalid' },
 *   ]}
 *   stacked
 * />
 */
export function BaseBarChart({
  labels,
  datasets,
  height = 208,
  stacked = false,
  horizontal = false,
  options: customOptions,
  className,
}: BaseBarChartProps) {
  const data: ChartData<'bar'> = {
    labels,
    datasets: datasets.map((ds) => ({
      label: ds.label,
      data: ds.data,
      backgroundColor: CHART_COLORS[ds.color],
      borderRadius: 4,
      barPercentage: 0.6,
    })),
  };

  const mergedOptions: ChartOptions<'bar'> = {
    ...baseBarOptions,
    indexAxis: horizontal ? 'y' : 'x',
    ...customOptions,
    scales: {
      x: {
        ...baseBarOptions.scales?.x,
        stacked,
        ...(customOptions?.scales?.x as object),
      },
      y: {
        ...baseBarOptions.scales?.y,
        stacked,
        ...(customOptions?.scales?.y as object),
      },
    },
  };

  return (
    <div className={cn('relative', className)} style={{ height }}>
      <Bar data={data} options={mergedOptions} />
    </div>
  );
}
