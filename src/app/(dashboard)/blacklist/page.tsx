'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Card } from '@/components/layout/Card';
import { XIcon } from '@/components/atoms/ClicksIcons';
import {
  BlacklistStats,
  BlacklistControls,
  BlacklistTable,
} from '@/components/pages/blacklist';
import { TrafficTabs } from '@/components/pages/clicks';
import type { BlacklistEntry, BlacklistStats as BlacklistStatsType } from '@/types';

// Mock data
const statsData: BlacklistStatsType = {
  total: 31304,
  ipAddresses: 14756,
  ipRanges: 3209,
  devices: 13338,
  audience: 0,
  appPlacement: 0,
  domainPlacement: 1,
  trends: {
    total: { direction: 'up', value: 1.4 },
    ipAddresses: { direction: 'up', value: 1.0 },
    ipRanges: { direction: 'up', value: 4.0 },
    devices: { direction: 'up', value: 1.3 },
    audience: { direction: 'flat', value: 0.0 },
    appPlacement: { direction: 'flat', value: 0.0 },
    domainPlacement: { direction: 'down', value: 50.0 },
  },
};

const blacklistData: BlacklistEntry[] = [
  { id: '1', type: 'device', value: 'deviceID-283162', scope: 'clickguard.com', dateAdded: new Date('2025-10-31T14:57:00'), expiresAt: new Date('2025-11-07T15:00:00'), exclusions: 1, reason: 'Bounced click' },
  { id: '2', type: 'ip', value: '212.80.44.113', scope: 'clickguard.com', dateAdded: new Date('2025-10-31T14:45:00'), expiresAt: new Date('2025-11-07T15:00:00'), exclusions: 0, reason: 'Rapid clicking' },
  { id: '3', type: 'device', value: 'deviceID-991827', scope: 'clickguard.com', dateAdded: new Date('2025-10-31T14:15:00'), expiresAt: null, exclusions: 2, reason: 'Bot signature' },
  { id: '4', type: 'ip', value: '185.220.101.45', scope: 'clickguard.com', dateAdded: new Date('2025-10-31T13:00:00'), expiresAt: new Date('2025-11-14T15:00:00'), exclusions: 0, reason: 'VPN/Proxy' },
  { id: '5', type: 'ip_range', value: '192.168.1.0/24', scope: 'clickguard.com', dateAdded: new Date('2025-10-31T10:00:00'), expiresAt: null, exclusions: 1, reason: 'Datacenter IP range' },
  { id: '6', type: 'device', value: 'deviceID-445566', scope: 'clickguard.com', dateAdded: new Date('2025-10-30T15:00:00'), expiresAt: new Date('2025-11-30T15:00:00'), exclusions: 0, reason: 'Click fraud pattern' },
  { id: '7', type: 'ip', value: '103.21.244.0', scope: 'clickguard.com', dateAdded: new Date('2025-10-29T15:00:00'), expiresAt: new Date('2025-11-05T15:00:00'), exclusions: 3, reason: 'Automated traffic' },
];

// Filter chip component (same as clicks page)
function FilterChip({ label, value, onRemove }: { label: string; value: string; onRemove: () => void }) {
  return (
    <div className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-md text-sm">
      <span className="text-[#535255]">{label}</span>
      <span className="font-medium text-t-base-blue">{value}</span>
      <button onClick={onRemove} className="ml-1 hover:bg-gray-200 rounded p-0.5">
        <XIcon className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}

export default function BlacklistPage() {
  const [activeTab, setActiveTab] = useState('analyzed');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const totalItems = 31304;
  const totalPages = Math.ceil(totalItems / pageSize);

  return (
    <div className="flex-1">
      {/* Header */}
      <Header
        title="Blacklist"
        subtitle="List of blacklisted entities for"
        domain="clickguard.com"
        showAdSpend={false}
        showFilters
      />

      {/* Main Content */}
      <div className="p-6">
        {/* KPI Cards */}
        <BlacklistStats data={statsData} />

        {/* Table Card */}
        <Card padding="none" className="overflow-hidden">
          {/* Tabs and Controls */}
          <div className="px-6 pt-4">
            {/* Traffic Tabs */}
            <TrafficTabs activeTab={activeTab} onTabChange={setActiveTab} />
          </div>

          {/* Filter Controls Row */}
          <BlacklistControls />

          {/* Active Filters */}
          <div className="px-6 py-2">
            <FilterChip label="Type:" value="IP address" onRemove={() => {}} />
          </div>

          {/* Table */}
          <BlacklistTable data={blacklistData} />

          {/* Pagination */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
            <div className="flex items-center gap-2 text-sm text-[#535255]">
              <span>Items per page</span>
              <select
                value={pageSize}
                onChange={(e) => setPageSize(Number(e.target.value))}
                className="px-2 py-1 border border-gray-200 rounded-lg text-sm"
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
              <span className="ml-4">
                Showing (1 of 10) of {totalItems.toLocaleString()} results
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage(Math.max(1, page - 1))}
                disabled={page === 1}
                className="px-4 py-2 text-sm font-medium text-[#344054] border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50"
              >
                &lt; Previous
              </button>
              <button
                onClick={() => setPage(Math.min(totalPages, page + 1))}
                disabled={page === totalPages}
                className="px-4 py-2 text-sm font-medium text-white bg-t-base-blue rounded-lg hover:opacity-90 disabled:opacity-50"
              >
                Next &gt;
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
