import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartOptions,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// Chart colors from design system
export const CHART_COLORS = {
  valid: '#A5D6A7',
  invalid: '#EF9A9A',
  suspicious: '#FFF59D',
  informational: '#79C9FF',
  highlighted: '#C9B6FF',
  primary: '#0d3ef2',
} as const;

// Create gradient for area charts
export function createGradient(
  ctx: CanvasRenderingContext2D,
  color: string,
  height: number = 250
) {
  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, `${color}66`); // 40% opacity
  gradient.addColorStop(1, `${color}00`); // 0% opacity
  return gradient;
}

// Base tooltip configuration
export const tooltipConfig = {
  backgroundColor: 'white',
  titleColor: '#111553',
  bodyColor: '#475467',
  borderColor: '#eaecf0',
  borderWidth: 1,
  padding: 12,
  displayColors: true,
  cornerRadius: 8,
};

// Base line chart options
export const baseLineOptions: ChartOptions<'line'> = {
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
    tooltip: tooltipConfig,
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: '#475467',
        maxRotation: 45,
      },
    },
    y: {
      grid: {
        color: '#f3f4f6',
      },
      ticks: {
        color: '#475467',
      },
    },
  },
};

// Base bar chart options
export const baseBarOptions: ChartOptions<'bar'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: tooltipConfig,
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: '#475467',
      },
    },
    y: {
      grid: {
        color: '#f3f4f6',
      },
      ticks: {
        color: '#475467',
      },
    },
  },
};
