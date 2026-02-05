'use client';

import { cn } from '@/lib/utils';
import { Text } from '../atoms/Text';
import { Button } from '../molecules/Button';

interface TablePaginationProps {
  /** Current page (1-indexed) */
  currentPage: number;
  /** Items per page */
  pageSize: number;
  /** Total items count */
  totalItems: number;
  /** Page size options */
  pageSizeOptions?: number[];
  /** Page change handler */
  onPageChange: (page: number) => void;
  /** Page size change handler */
  onPageSizeChange?: (size: number) => void;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Table pagination controls
 * @example
 * <TablePagination
 *   currentPage={1}
 *   pageSize={10}
 *   totalItems={150}
 *   onPageChange={setPage}
 * />
 */
export function TablePagination({
  currentPage,
  pageSize,
  totalItems,
  pageSizeOptions = [10, 25, 50],
  onPageChange,
  onPageSizeChange,
  className,
}: TablePaginationProps) {
  const totalPages = Math.ceil(totalItems / pageSize);
  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalItems);

  return (
    <div
      className={cn(
        'flex items-center justify-between px-6 py-4 border-t border-card-border',
        className
      )}
    >
      {/* Left: Items per page */}
      <div className="flex items-center gap-2 text-sm text-t-secondary">
        <span>Items per page</span>
        <select
          value={pageSize}
          onChange={(e) => onPageSizeChange?.(Number(e.target.value))}
          className="px-2 py-1 border border-card-border rounded-md text-t-base-blue"
        >
          {pageSizeOptions.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
        <span className="ml-4">
          Showing ({startItem} - {endItem}) of {totalItems.toLocaleString()} results
        </span>
      </div>

      {/* Right: Navigation */}
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          leftIcon="chevron-left"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage <= 1}
        >
          Previous
        </Button>
        <Button
          variant={currentPage < totalPages ? 'filled' : 'ghost'}
          size="sm"
          rightIcon="chevron-right"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
