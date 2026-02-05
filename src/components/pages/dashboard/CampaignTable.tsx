'use client';

import { useState } from 'react';
import { Tabs } from '@/components/organisms/Tabs';
import { ToggleButtonGroup } from '@/components/molecules/ToggleButtonGroup';
import { DataTable } from '@/components/organisms/DataTable';
import { PlatformIcon } from '@/components/atoms/PlatformIcon';
import { formatCurrency } from '@/lib/formatters';
import type { Campaign, Column } from '@/types';

interface CampaignTableProps {
  data: Campaign[];
}

/**
 * Campaign performance table - matches Figma design
 */
export function CampaignTable({ data }: CampaignTableProps) {
  const [viewMode, setViewMode] = useState<string>('campaign');
  const [activeTab, setActiveTab] = useState('campaigns');

  const columns: Column<Campaign>[] = [
    {
      key: 'name',
      header: 'Campaigns',
      render: (_, row) => (
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center">
            <PlatformIcon platform={row.platform} size="sm" />
          </div>
          <span className="text-t-base-blue font-medium">{row.name}</span>
        </div>
      ),
    },
    {
      key: 'validClicks',
      header: 'Valid\nclicks',
      align: 'right',
      render: (value) => (
        <span className="text-[#6caa6f]">{(value as number).toLocaleString()}</span>
      ),
    },
    {
      key: 'badClicks',
      header: 'Bad\nclicks',
      align: 'right',
      render: (value) => (
        <span className="text-[#cc7875]">{(value as number).toLocaleString()}</span>
      ),
    },
    {
      key: 'blockedClicks',
      header: 'Blocked\nclicks',
      align: 'right',
      render: (value) => (
        <span className="text-t-secondary">{(value as number).toLocaleString()}</span>
      ),
    },
    {
      key: 'cpc',
      header: 'CPC',
      align: 'right',
      render: (value) => (
        <span className="text-t-secondary">{(value as number).toFixed(2)}</span>
      ),
    },
    {
      key: 'preventedWaste',
      header: 'Prevented\nad waste',
      align: 'right',
      render: (value) => (
        <span className="text-[#5e54fd]">{formatCurrency(value as number)}</span>
      ),
    },
  ];

  return (
    <div className="bg-white border border-[#e1e1e1] rounded-2xl p-5 col-span-12 lg:col-span-6">
      {/* Toggle Buttons */}
      <div className="mb-4">
        <ToggleButtonGroup
          options={[
            { id: 'campaign', label: 'Campaign' },
            { id: 'geography', label: 'Geography' },
          ]}
          value={viewMode}
          onChange={setViewMode}
        />
      </div>

      {/* Sub Tabs */}
      <Tabs
        tabs={[
          { id: 'campaigns', label: 'Campaigns' },
          { id: 'ad-groups', label: 'Ad Groups/Sets' },
        ]}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Table */}
      <div className="mt-4">
        <DataTable
          columns={columns}
          data={data}
          getRowKey={(row) => row.id}
        />
      </div>
    </div>
  );
}
