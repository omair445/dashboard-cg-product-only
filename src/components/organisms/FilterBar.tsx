'use client';

import { cn } from '@/lib/utils';
import { Button } from '../molecules/Button';
import { FilterButton } from '../molecules/FilterButton';
import { Chip } from '../atoms/Chip';

interface FilterConfig {
  id: string;
  label: string;
  icon?: string;
  isActive?: boolean;
}

interface ActiveFilter {
  id: string;
  label: string;
  value: string;
}

interface FilterBarProps {
  /** Filter buttons */
  filters: FilterConfig[];
  /** Active filter chips */
  activeFilters?: ActiveFilter[];
  /** Left side actions */
  leftActions?: React.ReactNode;
  /** Right side actions */
  rightActions?: React.ReactNode;
  /** Filter click handler */
  onFilterClick?: (filterId: string) => void;
  /** Remove filter handler */
  onRemoveFilter?: (filterId: string) => void;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Table filter bar with buttons and chips
 * @example
 * <FilterBar
 *   filters={[{ id: 'filter', label: 'Filter', icon: 'filter' }]}
 *   activeFilters={[{ id: 'type', label: 'Type:', value: 'Ad click' }]}
 * />
 */
export function FilterBar({
  filters,
  activeFilters = [],
  leftActions,
  rightActions,
  onFilterClick,
  onRemoveFilter,
  className,
}: FilterBarProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-between px-5 py-4 border-b border-card-border',
        className
      )}
    >
      <div className="flex items-center gap-3">
        {/* Filter buttons */}
        {filters.map((filter) => (
          <Button
            key={filter.id}
            variant="secondary"
            size="md"
            leftIcon={filter.icon}
            rightIcon="chevron-down"
            onClick={() => onFilterClick?.(filter.id)}
          >
            {filter.label}
          </Button>
        ))}

        {/* Left actions (e.g., AI button) */}
        {leftActions}

        {/* Active filter chips */}
        {activeFilters.map((filter) => (
          <Chip
            key={filter.id}
            label={filter.label}
            value={filter.value}
            removable
            onRemove={() => onRemoveFilter?.(filter.id)}
          />
        ))}
      </div>

      {/* Right actions */}
      {rightActions && <div className="flex items-center gap-3">{rightActions}</div>}
    </div>
  );
}
