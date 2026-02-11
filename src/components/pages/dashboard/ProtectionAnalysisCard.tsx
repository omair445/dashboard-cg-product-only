'use client';

import { useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Icon } from '@/components/atoms/Icon';
import { Text } from '@/components/atoms/Text';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface ProtectionAnalysisData {
  labels: string[]; // Date labels (Oct 1, Oct 2, etc.)
  preventedAdWaste: number[]; // Dollar amounts
  invalidRate: number[]; // Percentage values
}

interface ProtectionAnalysisCardProps {
  data: ProtectionAnalysisData;
}

/**
 * Protection Analysis Card with dual-axis line chart
 * Matches Figma design: https://www.figma.com/design/u5AdvVUKEjIsvRxT9E52Yy/Dashboard-Updates?node-id=2740-9641
 */
export function ProtectionAnalysisCard({ data }: ProtectionAnalysisCardProps) {
  const chartRef = useRef<ChartJS<'line'>>(null);

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Prevented ad waste',
        data: data.preventedAdWaste,
        borderColor: '#9F9EA3',
        backgroundColor: 'rgba(159, 158, 163, 0.1)',
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 4,
        pointHoverBackgroundColor: '#9F9EA3',
        pointHoverBorderColor: '#FFFFFF',
        pointHoverBorderWidth: 1.5,
        tension: 0.4,
        fill: false,
        yAxisID: 'y-right',
      },
      {
        label: 'Invalid traffic rate',
        data: data.invalidRate,
        borderColor: '#EB837C',
        backgroundColor: 'rgba(235, 131, 124, 0.15)',
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 4,
        pointHoverBackgroundColor: '#EB837C',
        pointHoverBorderColor: '#FFFFFF',
        pointHoverBorderWidth: 1.5,
        tension: 0.4,
        fill: true,
        yAxisID: 'y-left',
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: '#FFFFFF',
        titleColor: '#24262D',
        bodyColor: '#616064',
        borderColor: '#E1E1E1',
        borderWidth: 1,
        padding: 12,
        boxPadding: 4,
        usePointStyle: true,
        titleFont: {
          family: 'Host Grotesk',
          size: 12,
          weight: 500,
        },
        bodyFont: {
          family: 'Host Grotesk',
          size: 12,
          weight: 400,
        },
        callbacks: {
          title: (tooltipItems) => {
            return tooltipItems[0].label;
          },
          label: (context) => {
            const label = context.dataset.label || '';
            const value = context.parsed.y;
            
            if (value === null || value === undefined) {
              return `${label}: N/A`;
            }
            
            if (context.datasetIndex === 0) {
              // Prevented ad waste - show as currency
              return `${label}: $${value.toLocaleString()}`;
            } else {
              // Invalid traffic rate - show as percentage
              return `${label}: ${value}%`;
            }
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#616064',
          font: {
            family: 'Host Grotesk',
            size: 10,
            weight: 500,
          },
          maxRotation: 45,
          minRotation: 45,
        },
        border: {
          display: false,
        },
      },
      'y-left': {
        type: 'linear',
        position: 'left',
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
          color: '#535255',
          font: {
            family: 'Inter',
            size: 12,
            weight: 400,
          },
          callback: (value) => value,
        },
        grid: {
          color: '#E1E1E1',
          drawTicks: false,
        },
        border: {
          display: false,
        },
      },
      'y-right': {
        type: 'linear',
        position: 'right',
        min: 0,
        max: 1250,
        ticks: {
          stepSize: 250,
          color: '#535255',
          font: {
            family: 'Inter',
            size: 12,
            weight: 400,
          },
          callback: (value) => value.toLocaleString(),
        },
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-3xl border border-[#e1e1e1] p-6 col-span-12 lg:col-span-8">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-2">
          <Icon name="shield-01" size="md" className="text-[#7169FF]" />
          <Text variant="h3" className="text-[#24262D]">
            Protection analysis
          </Text>
        </div>
        
        {/* Dropdown Button */}
        <button className="flex items-center gap-2 px-4 py-2.5 border border-[#7169FF] rounded-full hover:bg-gray-50 transition-colors">
          <div className="flex items-center gap-2">
            <span className="text-base font-medium text-[#111553]">Monthly</span>
            <Icon name="info-circle" size="sm" className="text-gray-400" />
          </div>
          <Icon name="chevron-down" size="md" className="text-[#111553]" />
        </button>
      </div>

      {/* Chart Container with Y-axis labels */}
      <div className="flex gap-3 items-stretch">
        {/* Left Y-axis label */}
        <div className="flex items-center justify-center w-[18px]">
          <div className="-rotate-90 whitespace-nowrap">
            <Text variant="caption" className="text-[#535255]">
              Invalid Traffic Rate (%)
            </Text>
          </div>
        </div>

        {/* Chart */}
        <div className="flex-1 relative" style={{ height: '272px' }}>
          <Line ref={chartRef} data={chartData} options={options} />
        </div>

        {/* Right Y-axis label */}
        <div className="flex items-center justify-center w-[26px]">
          <div className="rotate-90 whitespace-nowrap">
            <Text variant="caption" className="text-[#535255]">
              Prevented ad waste ($)
            </Text>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-6">
        <div className="flex items-center gap-1">
          <div className="w-[13px] h-[13px] rounded-full bg-[#9F9EA3]" />
          <Text variant="caption" className="text-[#616064]">
            Processed ad clicks
          </Text>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-[13px] h-[13px] rounded-full bg-[#EB837C]" />
          <Text variant="caption" className="text-[#616064]">
            Invalid traffic rate
          </Text>
        </div>
      </div>
    </div>
  );
}
