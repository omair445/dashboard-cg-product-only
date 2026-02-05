'use client';

import { InfoIcon } from '@/components/atoms/Icons';
import { PDFIcon, SearchIcon, DownloadCloudIcon } from '@/components/atoms/ClicksIcons';
import { formatRelativeTime } from '@/lib/formatters';
import type { Download } from '@/types';

interface DownloadsSectionProps {
  downloads: Download[];
}

/**
 * Downloads section with recent reports - matches Figma design
 */
export function DownloadsSection({ downloads }: DownloadsSectionProps) {
  return (
    <div className="bg-white border border-card-border rounded-3xl mt-6">
      {/* Header with title and search */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <span className="text-base font-semibold text-t-base-blue">Downloads</span>
          <InfoIcon className="opacity-50" />
        </div>

        {/* Search input */}
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Downloads"
            className="pl-10 pr-4 py-2 w-[280px] text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
          />
        </div>
      </div>

      {/* Downloads list */}
      <div className="divide-y divide-gray-100">
        {downloads.map((download) => (
          <div key={download.id} className="flex items-center justify-between px-6 py-4">
            {/* Left: Icon + Info */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F4F3FF] flex items-center justify-center">
                <PDFIcon />
              </div>
              <div>
                <span className="text-sm font-medium text-t-base-blue block">
                  {download.name}
                </span>
                <span className="text-xs text-[#9f9ea3]">
                  {download.description}
                </span>
              </div>
            </div>

            {/* Right: Timestamp + Action */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-[#9f9ea3]">
                {formatRelativeTime(download.timestamp)}
              </span>
              <button className="flex items-center gap-1.5 text-sm font-medium text-[#5E54FD] hover:underline">
                <DownloadCloudIcon />
                PDF
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
