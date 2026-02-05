'use client';

import { DataTable } from '@/components/organisms/DataTable';
import { IconButton } from '@/components/molecules/IconButton';
import { EntityBadge } from '@/components/molecules/EntityBadge';
import { TimeDisplay } from '@/components/molecules/TimeDisplay';
import { Icon } from '@/components/atoms/Icon';
import { Text } from '@/components/atoms/Text';
import type { BlacklistEntry, Column } from '@/types';

interface BlacklistTableProps {
  data: BlacklistEntry[];
  onViewDetails?: (entry: BlacklistEntry) => void;
}

const ENTITY_COLORS: Record<string, 'red' | 'yellow' | 'green' | 'blue' | 'purple' | 'gray'> = {
  device: 'red',
  ip: 'yellow',
  ip_range: 'yellow',
  domain: 'green',
  audience: 'blue',
  app: 'purple',
};

const ENTITY_LABELS: Record<string, string> = {
  device: 'Device ID',
  ip: 'IP address',
  ip_range: 'IP range',
  domain: 'Domain',
  audience: 'Audience',
  app: 'App placement',
};

/**
 * Blacklist data table
 */
export function BlacklistTable({ data, onViewDetails }: BlacklistTableProps) {
  const columns: Column<BlacklistEntry>[] = [
    {
      key: 'id',
      header: 'Details',
      width: '60px',
      render: (_, row) => (
        <IconButton
          icon="eye"
          variant="ghost"
          size="sm"
          aria-label="View details"
          onClick={() => onViewDetails?.(row)}
          className="bg-gray-100 hover:bg-gray-200 rounded-full"
        />
      ),
    },
    {
      key: 'dateAdded',
      header: 'Added at',
      render: (value) => <TimeDisplay date={value as Date} showRelative showAbsolute />,
    },
    {
      key: 'scope',
      header: 'Scope',
      render: (value) => (
        <EntityBadge color="green" icon="globe" label={value as string} />
      ),
    },
    {
      key: 'value',
      header: 'Entity',
      render: (value, row) => (
        <EntityBadge
          color={ENTITY_COLORS[row.type] || 'gray'}
          emoji="😈"
          label={value as string}
          sublabel={ENTITY_LABELS[row.type]}
        />
      ),
    },
    {
      key: 'exclusions',
      header: 'Exclusions',
      render: (value) => (
        <div className="flex items-center gap-1 text-t-secondary">
          {(value as number) > 0 ? (
            <>
              <Icon name="clock" size="xs" />
              {value as number}
            </>
          ) : (
            <>
              <Icon name="circle-off" size="xs" />
              None
            </>
          )}
        </div>
      ),
    },
    {
      key: 'reason',
      header: 'Reason',
      render: (value) => <Text variant="body">{value as string}</Text>,
    },
    {
      key: 'expiresAt',
      header: 'Expires at',
      render: (value) =>
        value ? (
          <TimeDisplay date={value as Date} showRelative showAbsolute />
        ) : (
          <Text variant="body" color="secondary">
            Never
          </Text>
        ),
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={data}
      getRowKey={(row) => row.id}
      onRowClick={onViewDetails}
    />
  );
}
