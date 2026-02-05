'use client';

import { Header } from '@/components/layout/Header';
import {
  TrafficQualityCard,
  TrafficProtectionCard,
  ProtectionChart,
  SourcesTable,
  ChannelsSection,
  CampaignTable,
} from '@/components/pages/dashboard';

// Mock data - replace with actual data fetching
const trafficQualityData = {
  processed: { value: 2543, trend: { direction: 'up' as const, value: 1.5 } },
  valid: { value: 1786, percentage: 70.2, trend: { direction: 'up' as const, value: 1.2 } },
  suspicious: { value: 254, percentage: 10.0, trend: { direction: 'down' as const, value: 2.1 } },
  bad: { value: 503, percentage: 19.8, trend: { direction: 'down' as const, value: 0.8 } },
};

const trafficProtectionData = {
  blockedClicks: 819,
  blockedTrend: { direction: 'up' as const, value: 12.4 },
  preventedWaste: 2563,
};

const protectionChartData = {
  labels: ['Oct 1', 'Oct 2', 'Oct 3', 'Oct 4', 'Oct 5', 'Oct 6', 'Oct 7', 'Oct 8', 'Oct 9', 'Oct 10',
           'Oct 11', 'Oct 12', 'Oct 13', 'Oct 14', 'Oct 15', 'Oct 16', 'Oct 17', 'Oct 18', 'Oct 19', 'Oct 20',
           'Oct 21', 'Oct 22', 'Oct 23', 'Oct 24', 'Oct 25', 'Oct 26', 'Oct 27', 'Oct 28', 'Oct 29', 'Oct 30'],
  processedClicks: [45, 52, 48, 61, 55, 42, 58, 63, 47, 51, 56, 44, 59, 62, 48, 53, 57, 41, 64, 50, 46, 58, 52, 49, 61, 54, 47, 60, 55, 43],
  invalidRate: [520, 580, 540, 610, 550, 490, 620, 570, 530, 600, 560, 510, 590, 640, 500, 580, 550, 470, 630, 520, 540, 610, 560, 490, 650, 580, 510, 620, 570, 480],
};

const sourcesData = [
  { date: new Date('2025-10-31'), aiBlocked: 1245, customRules: 1120, manual: 890 },
  { date: new Date('2025-10-30'), aiBlocked: 1180, customRules: 1350, manual: 920 },
  { date: new Date('2025-10-29'), aiBlocked: 1320, customRules: 1080, manual: 850 },
  { date: new Date('2025-10-28'), aiBlocked: 1150, customRules: 1290, manual: 980 },
  { date: new Date('2025-10-27'), aiBlocked: 1410, customRules: 1150, manual: 870 },
  { date: new Date('2025-10-26'), aiBlocked: 1280, customRules: 1380, manual: 910 },
  { date: new Date('2025-10-25'), aiBlocked: 1190, customRules: 1220, manual: 840 },
  { date: new Date('2025-10-24'), aiBlocked: 1350, customRules: 1100, manual: 960 },
  { date: new Date('2025-10-23'), aiBlocked: 1220, customRules: 1310, manual: 880 },
  { date: new Date('2025-10-22'), aiBlocked: 1380, customRules: 1180, manual: 930 },
];

const channelsData = {
  labels: ['Google', 'Meta', 'Bing'],
  validClicks: [65, 75, 55],
  badClicks: [35, 25, 45],
  platforms: [
    { name: 'Google', platform: 'google' as const, percentage: 45.68, value: 2991.37 },
    { name: 'Meta', platform: 'meta' as const, percentage: 31.22, value: 2045.12 },
    { name: 'Bing', platform: 'bing' as const, percentage: 23.10, value: 1512.89 },
  ],
};

const campaignsData = [
  { id: '1', name: 'Summer Sale', platform: 'google' as const, validClicks: 8240, badClicks: 1302, blockedClicks: 642, cpc: 0.53, preventedWaste: 1302 },
  { id: '2', name: 'Holiday Promo', platform: 'meta' as const, validClicks: 6120, badClicks: 890, blockedClicks: 445, cpc: 0.67, preventedWaste: 890 },
  { id: '3', name: 'Back to School', platform: 'bing' as const, validClicks: 4530, badClicks: 756, blockedClicks: 378, cpc: 0.45, preventedWaste: 756 },
  { id: '4', name: 'Flash Sale', platform: 'google' as const, validClicks: 3200, badClicks: 520, blockedClicks: 260, cpc: 0.72, preventedWaste: 520 },
  { id: '5', name: 'Brand Awareness', platform: 'meta' as const, validClicks: 2890, badClicks: 410, blockedClicks: 205, cpc: 0.38, preventedWaste: 410 },
];

export default function DashboardPage() {
  return (
    <div className="flex-1">
      {/* Header */}
      <Header
        title="Dashboard"
        subtitle="Detailed dashboard showing protection metrics."
        domain="clickguard.com"
        showAdSpend
        showFilters
      />

      {/* Main Content */}
      <div className="p-6">
        {/* Top Row */}
        <div className="grid grid-cols-12 gap-4 mb-4">
          <TrafficQualityCard data={trafficQualityData} />
          <TrafficProtectionCard data={trafficProtectionData} />
        </div>

        {/* Middle Row */}
        <div className="grid grid-cols-12 gap-4 mb-4">
          <ProtectionChart data={protectionChartData} />
          <SourcesTable data={sourcesData} />
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-12 gap-4">
          <ChannelsSection data={channelsData} />
          <CampaignTable data={campaignsData} />
        </div>
      </div>
    </div>
  );
}
