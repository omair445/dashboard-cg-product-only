'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Card } from '@/components/layout/Card';
import {
  FilterIcon,
  ColumnsIcon,
  ExportIcon,
  RefreshIcon,
  XIcon,
} from '@/components/atoms/ClicksIcons';
import { ChevronDownIcon } from '@/components/atoms/Icons';
import {
  ClickKPIs,
  TrafficTabs,
  ClicksTable,
  DownloadsSection,
} from '@/components/pages/clicks';
import type { ClickStats, ClickRecord, Download } from '@/types';

// Mock data
const clickStats: ClickStats = {
  processed: 65221,
  normal: 500,
  suspicious: 653,
  bad: 6521,
  trends: {
    processed: { direction: 'up', value: 12.4 },
    normal: { direction: 'up', value: 12.4 },
    suspicious: { direction: 'up', value: 12.4 },
    bad: { direction: 'up', value: 12.4 },
  },
};

const clicksData: ClickRecord[] = [
  { id: '1', ppcAccount: 'Google Ads', timestamp: new Date('2025-10-24T01:58:53'), status: 'normal', reason: '-', botProbability: 'low', threatLevel: 'low', timeSpent: 0, device: 'Desktop', ip: '192.168.1.1', country: 'United States', campaign: 'Reta NEW' },
  { id: '2', ppcAccount: 'Google Ads', timestamp: new Date('2025-10-24T01:58:53'), status: 'normal', reason: '-', botProbability: 'low', threatLevel: 'low', timeSpent: 23, device: 'Desktop', ip: '10.0.0.1', country: 'United States', campaign: 'Reta NEW' },
  { id: '3', ppcAccount: 'Google Ads', timestamp: new Date('2025-10-24T01:58:53'), status: 'normal', reason: '-', botProbability: 'low', threatLevel: 'low', timeSpent: 48, device: 'Mobile', ip: '172.16.0.1', country: 'United States', campaign: 'Sean North' },
  { id: '4', ppcAccount: 'Google Ads', timestamp: new Date('2025-10-24T01:58:53'), status: 'normal', reason: '-', botProbability: 'low', threatLevel: 'low', timeSpent: 23, device: 'Tablet', ip: '192.168.2.1', country: 'United States', campaign: 'Reta NEW' },
  { id: '5', ppcAccount: 'Google Ads', timestamp: new Date('2025-10-24T01:58:53'), status: 'suspicious', reason: 'Click that did not convert', botProbability: 'medium', threatLevel: 'medium', timeSpent: 0, device: 'Desktop', ip: '10.0.1.1', country: 'United States', campaign: 'Sean North' },
  { id: '6', ppcAccount: 'Google Ads', timestamp: new Date('2025-10-24T01:58:53'), status: 'suspicious', reason: 'Repeated clicks from the same IP range', botProbability: 'medium', threatLevel: 'low', timeSpent: 23, device: 'Mobile', ip: '172.16.1.1', country: 'United States', campaign: 'Reta NEW' },
  { id: '7', ppcAccount: 'Google Ads', timestamp: new Date('2025-10-24T01:58:53'), status: 'bad', reason: 'Click that did not convert', botProbability: 'medium', threatLevel: 'medium', timeSpent: 48, device: 'Desktop', ip: '192.168.3.1', country: 'United States', campaign: 'Sean North' },
  { id: '8', ppcAccount: 'Google Ads', timestamp: new Date('2025-10-24T01:58:53'), status: 'bad', reason: 'Repeated clicks from the same IP range', botProbability: 'medium', threatLevel: 'medium', timeSpent: 23, device: 'Desktop', ip: '10.0.2.1', country: 'United States', campaign: 'Reta NEW' },
  { id: '9', ppcAccount: 'Google Ads', timestamp: new Date('2025-10-24T01:58:53'), status: 'bad', reason: 'Click that did not convert', botProbability: 'high', threatLevel: 'high', timeSpent: 48, device: 'Desktop', ip: '172.16.2.1', country: 'United States', campaign: 'Sean North' },
  { id: '10', ppcAccount: 'Google Ads', timestamp: new Date('2025-10-24T01:58:53'), status: 'ignored', reason: 'Repeated clicks from the same IP range', botProbability: 'high', threatLevel: 'high', timeSpent: 23, device: 'Desktop', ip: '192.168.4.1', country: 'United States', campaign: 'Reta NEW' },
];

const downloadsData: Download[] = [
  { id: '1', name: 'Trial report', description: 'Trial Sample Report', timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000), type: 'pdf' },
  { id: '2', name: 'Trial report', description: 'Trial Sample Report', timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000), type: 'pdf' },
  { id: '3', name: 'Trial report', description: 'Trial Sample Report', timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000), type: 'pdf' },
  { id: '4', name: 'Trial report', description: 'Trial Sample Report', timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000), type: 'pdf' },
];

// Dropdown button component
function DropdownButton({ children, icon: Icon }: { children: React.ReactNode; icon?: React.ComponentType<{ className?: string }> }) {
  return (
    <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-[#344054] border border-gray-200 rounded-lg hover:bg-gray-50">
      {Icon && <Icon className="w-5 h-5" />}
      {children}
      <ChevronDownIcon className="w-4 h-4 ml-1" />
    </button>
  );
}

// Action button component
function ActionButton({ children, icon: Icon }: { children: React.ReactNode; icon: React.ComponentType<{ className?: string }> }) {
  return (
    <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-[#344054] hover:bg-gray-50 rounded-lg">
      <Icon className="w-5 h-5" />
      {children}
    </button>
  );
}

// Filter chip component
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

export default function ClicksPage() {
  const [activeTab, setActiveTab] = useState('analyzed');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const totalItems = 15468;
  const totalPages = Math.ceil(totalItems / pageSize);

  return (
    <div className="flex-1">
      {/* Header */}
      <Header
        title="Clicks"
        subtitle="Realtime traffic logs for"
        domain="example@clickguard.com"
        showAdSpend={false}
        showFilters
      />

      {/* Main Content */}
      <div className="p-6">
        {/* KPI Cards */}
        <ClickKPIs data={clickStats} />

        {/* Table Card */}
        <Card padding="none" className="overflow-hidden">
          {/* Tabs and Controls */}
          <div className="px-6 pt-4">
            {/* Traffic Tabs */}
            <TrafficTabs activeTab={activeTab} onTabChange={setActiveTab} />
          </div>

          {/* Filter Controls Row */}
          <div className="flex items-center justify-between px-6 py-3 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <DropdownButton icon={FilterIcon}>Filter</DropdownButton>
              <DropdownButton icon={ColumnsIcon}>Columns</DropdownButton>
            </div>
            <div className="flex items-center gap-2">
              <ActionButton icon={ExportIcon}>Export</ActionButton>
              <ActionButton icon={RefreshIcon}>Refresh</ActionButton>
            </div>
          </div>

          {/* Active Filters */}
          <div className="px-6 py-2">
            <FilterChip label="Type:" value="Ad click" onRemove={() => {}} />
          </div>

          {/* Table */}
          <ClicksTable data={clicksData} />

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

        {/* Downloads Section */}
        <DownloadsSection downloads={downloadsData} />
      </div>
    </div>
  );
}
