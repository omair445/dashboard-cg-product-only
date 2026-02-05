'use client';

import {
  FilterIcon,
  ColumnsIcon,
  ExportIcon,
  RefreshIcon,
} from '@/components/atoms/ClicksIcons';
import { ChevronDownIcon } from '@/components/atoms/Icons';

// Plus icon for Add to Blacklist button
function PlusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 4.16667V15.8333M4.16667 10H15.8333" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Dropdown button component (same as clicks page)
function DropdownButton({ children, icon: Icon }: { children: React.ReactNode; icon?: React.ComponentType<{ className?: string }> }) {
  return (
    <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-[#344054] border border-gray-200 rounded-lg hover:bg-gray-50">
      {Icon && <Icon className="w-5 h-5" />}
      {children}
      <ChevronDownIcon className="w-4 h-4 ml-1" />
    </button>
  );
}

// Action button component (same as clicks page)
function ActionButton({ children, icon: Icon }: { children: React.ReactNode; icon: React.ComponentType<{ className?: string }> }) {
  return (
    <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-[#344054] hover:bg-gray-50 rounded-lg">
      <Icon className="w-5 h-5" />
      {children}
    </button>
  );
}

// Primary button for Add to Blacklist
function PrimaryButton({ children, icon: Icon }: { children: React.ReactNode; icon: React.ComponentType<{ className?: string }> }) {
  return (
    <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-lg hover:opacity-90"
      style={{
        backgroundImage: 'linear-gradient(-78.2deg, rgb(145, 138, 255) 3.89%, rgb(94, 84, 253) 93.12%)'
      }}
    >
      <Icon className="w-5 h-5" />
      {children}
    </button>
  );
}

interface BlacklistControlsProps {
  onAddToBlacklist?: () => void;
  onExport?: () => void;
  onRefresh?: () => void;
}

/**
 * Blacklist table controls with filter, columns, and action buttons
 * Matching clicks page styling
 */
export function BlacklistControls({
  onAddToBlacklist,
  onExport,
  onRefresh,
}: BlacklistControlsProps) {
  return (
    <div className="flex items-center justify-between px-6 py-3 border-b border-gray-100">
      <div className="flex items-center gap-3">
        <DropdownButton icon={FilterIcon}>Filter</DropdownButton>
        <DropdownButton icon={ColumnsIcon}>Columns</DropdownButton>
      </div>
      <div className="flex items-center gap-2">
        <ActionButton icon={ExportIcon}>Export</ActionButton>
        <ActionButton icon={RefreshIcon}>Refresh</ActionButton>
        <PrimaryButton icon={PlusIcon}>Add to Blacklist</PrimaryButton>
      </div>
    </div>
  );
}
