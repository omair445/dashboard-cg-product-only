// Common types used across the application

export type Platform = 'google' | 'meta' | 'bing';

export type Status = 'normal' | 'suspicious' | 'bad' | 'ignored';

export type TrendDirection = 'up' | 'down' | 'flat';

export interface Trend {
  direction: TrendDirection;
  value: number;
}

export interface DateRange {
  start: Date;
  end: Date;
}

// Dashboard types
export interface TrafficQuality {
  processed: number;
  valid: number;
  suspicious: number;
  bad: number;
  trends: {
    processed: Trend;
    valid: Trend;
    suspicious: Trend;
    bad: Trend;
  };
}

export interface ProtectionStats {
  blockedClicks: number;
  preventedWaste: number;
  trend: Trend;
}

export interface Campaign {
  id: string;
  name: string;
  platform: Platform;
  validClicks: number;
  badClicks: number;
  blockedClicks: number;
  cpc: number;
  preventedWaste: number;
}

export interface SourceBlocked {
  date: Date;
  aiBlocked: number;
  customRules: number;
  manual: number;
}

// Blacklist types
export type BlacklistEntityType = 'ip' | 'ip_range' | 'device' | 'audience' | 'app' | 'domain';

export interface BlacklistEntry {
  id: string;
  type: BlacklistEntityType;
  value: string;
  scope: string;
  dateAdded: Date;
  expiresAt: Date | null;
  exclusions: number;
  reason: string;
}

export interface BlacklistStats {
  total: number;
  ipAddresses: number;
  ipRanges: number;
  devices: number;
  audience: number;
  appPlacement: number;
  domainPlacement: number;
  trends: {
    total: Trend;
    ipAddresses: Trend;
    ipRanges: Trend;
    devices: Trend;
    audience: Trend;
    appPlacement: Trend;
    domainPlacement: Trend;
  };
}

// Click Forensics types
export interface ClickRecord {
  id: string;
  ppcAccount: string;
  timestamp: Date;
  status: Status;
  reason: string;
  botProbability: 'low' | 'medium' | 'high';
  threatLevel: 'low' | 'medium' | 'high';
  timeSpent: number;
  device: string;
  ip: string;
  country: string;
  campaign: string;
}

export interface ClickStats {
  processed: number;
  normal: number;
  suspicious: number;
  bad: number;
  trends: {
    processed: Trend;
    normal: Trend;
    suspicious: Trend;
    bad: Trend;
  };
}

export interface Download {
  id: string;
  name: string;
  description: string;
  timestamp: Date;
  type: 'pdf' | 'csv' | 'xlsx';
}

// Table types
export interface Column<T> {
  key: keyof T | string;
  header: string;
  sortable?: boolean;
  width?: string;
  align?: 'left' | 'center' | 'right';
  render?: (value: unknown, row: T) => React.ReactNode;
}

export interface PaginationState {
  page: number;
  pageSize: number;
  total: number;
}

// Filter types
export interface FilterState {
  domain: string;
  platforms: Platform[];
  adAccounts: string[];
  campaigns: string[];
  dateRange: DateRange;
}
