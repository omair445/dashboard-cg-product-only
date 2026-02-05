'use client';

import { cn } from '@/lib/utils';
import { Text } from '../atoms/Text';
import { Icon } from '../atoms/Icon';
import type { Column } from '@/types';

interface DataTableProps<T> {
  /** Table columns configuration */
  columns: Column<T>[];
  /** Table data */
  data: T[];
  /** Row key extractor */
  getRowKey: (row: T) => string;
  /** Row click handler */
  onRowClick?: (row: T) => void;
  /** Empty state message */
  emptyMessage?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Generic data table component (DRY - reused across all pages)
 * @example
 * <DataTable
 *   columns={[{ key: 'name', header: 'Name' }]}
 *   data={items}
 *   getRowKey={(row) => row.id}
 * />
 */
export function DataTable<T>({
  columns,
  data,
  getRowKey,
  onRowClick,
  emptyMessage = 'No data available',
  className,
}: DataTableProps<T>) {
  if (data.length === 0) {
    return (
      <div className="py-12 text-center">
        <Text variant="body" color="secondary">
          {emptyMessage}
        </Text>
      </div>
    );
  }

  return (
    <div className={cn('overflow-x-auto', className)}>
      <table className="w-full">
        <thead>
          <tr className="border-b border-card-border">
            {columns.map((col) => (
              <th
                key={String(col.key)}
                className={cn(
                  'py-3 px-4 text-xs font-medium text-t-secondary',
                  col.align === 'right' ? 'text-right' : col.align === 'center' ? 'text-center' : 'text-left'
                )}
                style={col.width ? { width: col.width } : undefined}
              >
                <div className="flex items-center gap-1">
                  {col.header}
                  {col.sortable && (
                    <Icon name="arrows-sort" size="xs" className="text-gray-400" />
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-sm">
          {data.map((row) => (
            <tr
              key={getRowKey(row)}
              onClick={() => onRowClick?.(row)}
              className={cn(
                'border-b border-gray-100 transition-colors',
                onRowClick && 'cursor-pointer hover:bg-gray-50'
              )}
            >
              {columns.map((col) => (
                <td
                  key={String(col.key)}
                  className={cn(
                    'py-3 px-4',
                    col.align === 'right' ? 'text-right' : col.align === 'center' ? 'text-center' : 'text-left'
                  )}
                >
                  {col.render
                    ? col.render(row[col.key as keyof T], row)
                    : String(row[col.key as keyof T] ?? '')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
