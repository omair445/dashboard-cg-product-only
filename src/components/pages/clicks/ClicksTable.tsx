'use client';

import { cn } from '@/lib/utils';
import {
  EyeIcon,
  GoogleAdsIcon,
  MetaAdsIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  HomeIcon,
  BuildingIcon,
  MonitorIcon,
  LaptopIcon,
  PhoneIcon,
  WindowsIcon,
  AppleIcon,
  ChromeIcon,
  BotIcon,
} from '@/components/atoms/ClicksIcons';
import { InfoIcon } from '@/components/atoms/Icons';
import type { ClickRecord } from '@/types';

interface ClicksTableProps {
  data: ClickRecord[];
  onViewDetails?: (record: ClickRecord) => void;
}

// Status badge component
function StatusBadge({ status }: { status: ClickRecord['status'] }) {
  const statusConfig = {
    normal: { label: 'Normal', bg: 'bg-[#ECFDF3]', text: 'text-[#027A48]' },
    suspicious: { label: 'Suspicious', bg: 'bg-[#FFFAEB]', text: 'text-[#B54708]' },
    bad: { label: 'Bad', bg: 'bg-[#FEF3F2]', text: 'text-[#B42318]' },
    ignored: { label: 'Ignored', bg: 'bg-[#F2F4F7]', text: 'text-[#344054]' },
  };

  const config = statusConfig[status];

  return (
    <span className={cn('px-2 py-1 text-xs font-medium rounded-full', config.bg, config.text)}>
      {config.label}
    </span>
  );
}

// Probability/Threat indicator
function LevelIndicator({ level, type }: { level: 'low' | 'medium' | 'high'; type: 'bot' | 'threat' }) {
  const levelConfig = {
    low: { label: 'Low', icon: type === 'threat' ? CheckCircleIcon : BotIcon, color: 'text-[#17B26A]' },
    medium: { label: 'Med.', icon: type === 'threat' ? AlertCircleIcon : BotIcon, color: 'text-[#F79009]' },
    high: { label: 'High', icon: type === 'threat' ? AlertCircleIcon : BotIcon, color: 'text-[#F04438]' },
  };

  const config = levelConfig[level];
  const Icon = config.icon;

  return (
    <div className="flex items-center gap-1.5">
      <Icon className={config.color} />
      <span className="text-sm text-[#535255]">{config.label}</span>
    </div>
  );
}

// Time display
function TimeCell({ timestamp }: { timestamp: Date }) {
  const now = new Date();
  const diff = now.getTime() - timestamp.getTime();
  const mins = Math.floor(diff / 60000);
  const hours = Math.floor(mins / 60);

  let relative = '';
  if (mins < 60) {
    relative = `${mins} mins ago`;
  } else if (hours < 24) {
    relative = `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else {
    relative = `${Math.floor(hours / 24)} day${Math.floor(hours / 24) > 1 ? 's' : ''} ago`;
  }

  const formatted = timestamp.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }) + ' ' + timestamp.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  return (
    <div className="flex flex-col">
      <span className="text-sm text-t-base-blue">{relative}</span>
      <span className="text-xs text-[#9f9ea3]">{formatted}</span>
    </div>
  );
}

// Origin icons cell
function OriginCell() {
  // Randomly show different combinations of origin icons
  return (
    <div className="flex items-center gap-1">
      <HomeIcon />
      <MonitorIcon />
      <WindowsIcon />
      <ChromeIcon />
    </div>
  );
}

// Location cell with country and city
function LocationCell({ country, city }: { country: string; city?: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-sm text-t-base-blue">{country}</span>
      {city && <span className="text-xs text-[#9f9ea3]">{city}</span>}
    </div>
  );
}

// Time spent cell
function TimeSpentCell({ seconds, interaction }: { seconds: number; interaction: 'Low' | 'Med.' | 'High' }) {
  const formatTime = (s: number) => {
    if (s < 60) return `${s} secs`;
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins} mins ${secs} secs`;
  };

  return (
    <div className="flex flex-col">
      <span className="text-sm text-t-base-blue">{formatTime(seconds)}</span>
      <span className="text-xs text-[#9f9ea3]">= Interaction: {interaction}</span>
    </div>
  );
}

// Table header with sort and info icon
function TableHeader({ children, hasInfo = false }: { children: React.ReactNode; hasInfo?: boolean }) {
  return (
    <div className="flex items-center gap-1">
      <span className="text-xs font-medium text-[#535255] uppercase">{children}</span>
      {hasInfo && <InfoIcon className="opacity-50 w-3.5 h-3.5" />}
    </div>
  );
}

/**
 * Click forensics data table - matches Figma design
 */
export function ClicksTable({ data, onViewDetails }: ClicksTableProps) {
  // Extended mock data with more details
  const extendedData = data.map((item, index) => ({
    ...item,
    city: ['Long Beach (California)', 'New York', 'Los Angeles', 'Chicago', 'Houston'][index % 5],
    interaction: ['Low', 'Med.', 'High'][index % 3] as 'Low' | 'Med.' | 'High',
  }));

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[1200px]">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="px-4 py-3 text-left w-[70px]">
              <TableHeader>Details</TableHeader>
            </th>
            <th className="px-4 py-3 text-left">
              <TableHeader>PPC account</TableHeader>
            </th>
            <th className="px-4 py-3 text-left">
              <TableHeader hasInfo>Time</TableHeader>
            </th>
            <th className="px-4 py-3 text-left">
              <TableHeader>Status</TableHeader>
            </th>
            <th className="px-4 py-3 text-left">
              <TableHeader>Reason</TableHeader>
            </th>
            <th className="px-4 py-3 text-left">
              <TableHeader hasInfo>Bot Probability</TableHeader>
            </th>
            <th className="px-4 py-3 text-left">
              <TableHeader hasInfo>Threat Level</TableHeader>
            </th>
            <th className="px-4 py-3 text-left">
              <TableHeader>Time spent on page</TableHeader>
            </th>
            <th className="px-4 py-3 text-left">
              <TableHeader>Origin</TableHeader>
            </th>
            <th className="px-4 py-3 text-left">
              <TableHeader>Location</TableHeader>
            </th>
            <th className="px-4 py-3 text-left">
              <TableHeader>Camp.</TableHeader>
            </th>
          </tr>
        </thead>
        <tbody>
          {extendedData.map((row) => (
            <tr
              key={row.id}
              className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
              onClick={() => onViewDetails?.(row)}
            >
              <td className="px-4 py-4">
                <button className="p-1 hover:bg-gray-100 rounded">
                  <EyeIcon />
                </button>
              </td>
              <td className="px-4 py-4">
                <div className="flex items-center gap-2">
                  {row.ppcAccount.includes('Google') ? <GoogleAdsIcon /> : <MetaAdsIcon />}
                  <span className="text-sm font-medium text-t-base-blue">ClickGuard</span>
                </div>
              </td>
              <td className="px-4 py-4">
                <TimeCell timestamp={row.timestamp} />
              </td>
              <td className="px-4 py-4">
                <StatusBadge status={row.status} />
              </td>
              <td className="px-4 py-4">
                <span className="text-sm text-[#535255]">
                  {row.reason === '-' ? '-' : row.reason}
                </span>
              </td>
              <td className="px-4 py-4">
                <LevelIndicator level={row.botProbability} type="bot" />
              </td>
              <td className="px-4 py-4">
                <LevelIndicator level={row.threatLevel} type="threat" />
              </td>
              <td className="px-4 py-4">
                <TimeSpentCell seconds={row.timeSpent} interaction={row.interaction} />
              </td>
              <td className="px-4 py-4">
                <OriginCell />
              </td>
              <td className="px-4 py-4">
                <LocationCell country={row.country} city={row.city} />
              </td>
              <td className="px-4 py-4">
                <span className="text-sm text-t-base-blue">{row.campaign}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
