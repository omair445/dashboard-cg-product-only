'use client';

import { cn } from '@/lib/utils';
import { Text } from '../atoms/Text';
import { Button } from '../molecules/Button';
import { FilterButton } from '../molecules/FilterButton';
import { ProgressBar } from '../molecules/ProgressBar';

// Share icon SVG
function ShareIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 9L21 3M21 3H15M21 3L13 11M10 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V14" stroke="#616064" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

interface HeaderProps {
  /** Page title */
  title: string;
  /** Page subtitle/description */
  subtitle?: string;
  /** Domain name */
  domain?: string;
  /** Show ad spend protection card */
  showAdSpend?: boolean;
  /** Show filter bar */
  showFilters?: boolean;
  /** Additional CSS classes */
  className?: string;
}

// Small ClickGuard logo for top selector
function SmallLogoWhite() {
  return (
    <div className="w-5 h-5 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
      <svg width="12" height="14" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.24795 9.62263L11.3594 9.02399C11.5152 8.97735 11.7645 8.97735 11.9125 9.02399L14.0239 9.62263C14.1798 9.66927 14.4291 9.70038 14.5927 9.70038H17.4832C17.6391 9.70038 17.7715 9.56821 17.7715 9.41272V7.50795C17.7715 7.35246 17.6469 7.18143 17.491 7.14255L11.9125 5.5721C11.7567 5.52545 11.5074 5.52545 11.3594 5.5721L5.78089 7.14255C5.62507 7.1892 5.5004 7.35246 5.5004 7.50795V17.7626C5.5004 17.9181 5.60949 18.1202 5.74973 18.198L11.3905 21.5876C11.523 21.6731 11.7489 21.6731 11.8892 21.5876L17.5299 18.198C17.6702 18.1125 17.7792 17.9181 17.7792 17.7626V16.9696C17.7792 16.8141 17.6469 16.6818 17.491 16.6818H14.6005C14.4446 16.6818 14.2031 16.7518 14.0629 16.8296L11.8892 18.128C11.7489 18.2135 11.5308 18.2135 11.3905 18.128L9.21679 16.8296C9.07655 16.7441 8.96748 16.5498 8.96748 16.3942V9.98804C8.96748 9.83254 9.09213 9.6615 9.24795 9.62263Z" fill="white"/>
        <path d="M22.8215 3.069L12.0853 0.0524781C11.8438 -0.0174927 11.4386 -0.0174927 11.1971 0.0524781L0.453099 3.069C0.211572 3.13898 0.00900269 3.40331 0.00900269 3.65209V20.6783C0.00900269 20.9349 0.1882 21.2459 0.406352 21.378L11.2438 27.9008C11.462 28.0331 11.8204 28.0331 12.0385 27.9008L22.876 21.378C23.0942 21.2459 23.2734 20.9349 23.2734 20.6783V11.932C23.2734 11.6754 23.0631 11.4733 22.8137 11.4733H12.1087C11.8515 11.4733 11.649 11.6832 11.649 11.932V14.4742C11.649 14.7308 11.8593 14.933 12.1087 14.933H19.3388C19.5959 14.933 19.7985 15.1429 19.7985 15.3917V18.7192C19.7985 18.9757 19.6193 19.2867 19.4012 19.4189L12.0385 23.8503C11.8204 23.9825 11.462 23.9825 11.2438 23.8503L3.8812 19.4189C3.66305 19.2867 3.48386 18.9757 3.48386 18.7192V6.14771C3.48386 5.89115 3.68643 5.62682 3.92796 5.55685L11.1971 3.50437C11.4386 3.4344 11.8438 3.4344 12.0853 3.50437L19.3544 5.55685C19.5959 5.62682 19.7985 5.89115 19.7985 6.14771V9.23421C19.7985 9.49076 20.0089 9.6929 20.2582 9.6929H22.806C23.0631 9.6929 23.2656 9.48299 23.2656 9.23421V3.65209C23.2656 3.39553 23.0631 3.1312 22.8215 3.069Z" fill="white"/>
      </svg>
    </div>
  );
}

/**
 * Page header with title, filters, and actions - matches Figma design
 */
export function Header({
  title,
  subtitle,
  domain = 'clickguard.com',
  showAdSpend = true,
  showFilters = true,
  className,
}: HeaderProps) {
  return (
    <header className={cn('bg-[#f2f2f2] px-8 py-4', className)}>
      <div className="flex items-start justify-between">
        {/* Left: Title Section */}
        <div className="flex flex-col gap-3">
          {/* Domain Selector */}
          <DomainSelector domain={domain} />

          {/* Title and Subtitle */}
          <div>
            <Text variant="h1" as="h1" className="mb-1">
              {title}
            </Text>
            {subtitle && (
              <div className="flex items-center gap-1">
                <Text variant="body" color="secondary" as="span">
                  {subtitle}
                </Text>
                <Text variant="body" className="font-bold text-t-base-blue" as="span">
                  {domain}
                </Text>
                <span className="ml-1">
                  <ShareIcon />
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Right: Ad Spend & Actions */}
        <div className="flex items-center gap-3">
          {showAdSpend && <AdSpendCard />}
          <button className="w-10 h-10 flex items-center justify-center border border-t-base-blue rounded-full hover:bg-gray-50 transition-colors shadow-sm">
            <BellIcon />
          </button>
          <button className="w-10 h-10 flex items-center justify-center border border-t-base-blue rounded-full hover:bg-gray-50 transition-colors shadow-sm">
            <BookIcon />
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      {showFilters && <FilterBar domain={domain} />}
    </header>
  );
}

// Chevron down icon SVG for domain selector
function ChevronDownSmall() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 9L12 15L18 9" stroke="#111553" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Domain Selector - top pill button
function DomainSelector({ domain }: { domain: string }) {
  return (
    <button className="flex items-center gap-1 px-3.5 py-2.5 border border-gray-200 rounded-full shadow-sm hover:bg-gray-50 transition-colors w-fit">
      <SmallLogoWhite />
      <span className="text-sm font-medium text-t-base-blue ml-1">{domain}</span>
      <ChevronDownSmall />
    </button>
  );
}

// Bell icon SVG matching Figma
function BellIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.35419 21C10.0593 21.6224 10.9856 22 12 22C13.0144 22 13.9407 21.6224 14.6458 21M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 11.0902 5.22047 13.206 4.34966 14.6054C3.61513 15.7859 3.24786 16.3761 3.26132 16.5408C3.27624 16.7231 3.31486 16.7926 3.46178 16.9016C3.59446 17 4.19259 17 5.38885 17H18.6112C19.8074 17 20.4056 17 20.5382 16.9016C20.6851 16.7926 20.7238 16.7231 20.7387 16.5408C20.7521 16.3761 20.3849 15.7859 19.6503 14.6054C18.7795 13.206 18 11.0902 18 8Z" stroke="#111553" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Book icon SVG matching Figma
function BookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 19V5C20 3.89543 19.1046 3 18 3H8C5.79086 3 4 4.79086 4 7V17C4 19.2091 5.79086 21 8 21H18C19.1046 21 20 20.1046 20 19ZM20 19C20 17.8954 19.1046 17 18 17H8C5.79086 17 4 15.2091 4 13" stroke="#111553" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Shield icon SVG for ad spend card - yellow warning color with lightning bolt (matches Figma)
function ShieldIcon() {
  return (
    <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M8.71423 0.0205593C8.90394 -0.00685309 9.09659 -0.00685309 9.2863 0.0205593C9.50493 0.0521516 9.70836 0.129006 9.8699 0.190031L9.91319 0.206344L15.4056 2.26586C16.0234 2.49652 16.566 2.69907 16.9838 3.06729C17.3493 3.38942 17.6309 3.79571 17.8041 4.25106C18.0022 4.77156 18.0014 5.35068 18.0004 6.01012L18.0003 10.932C18.0003 13.7586 16.463 16.1152 14.8012 17.8464C13.1283 19.5892 11.2143 20.8202 10.2022 21.4106L10.1612 21.4346C9.97649 21.5431 9.73676 21.6839 9.41963 21.7519C9.16017 21.8075 8.84036 21.8075 8.5809 21.7519C8.26378 21.6839 8.02405 21.5431 7.83936 21.4347L7.79836 21.4106C6.78626 20.8202 4.87222 19.5892 3.19932 17.8464C1.53756 16.1152 0.000264831 13.7586 0.000264831 10.932L0.00013072 6.01013C-0.000824265 5.35069 -0.00166303 4.77157 0.196405 4.25106C0.369677 3.79571 0.651239 3.38942 1.01675 3.06729C1.43457 2.69907 1.97712 2.49652 2.59491 2.26587L8.08734 0.206344L8.13063 0.190032C8.29216 0.129007 8.4956 0.0521518 8.71423 0.0205593ZM10.7074 7.13924C11.0979 6.74871 11.0979 6.11555 10.7074 5.72502C10.3168 5.3345 9.68367 5.3345 9.29315 5.72502L6.29315 8.72502C6.06585 8.95232 5.96168 9.27502 6.01317 9.59231C6.06466 9.9096 6.26553 10.1828 6.55304 10.3266L9.31209 11.7061L7.29315 13.725C6.90263 14.1155 6.90263 14.7487 7.29315 15.1392C7.68367 15.5298 8.31684 15.5298 8.70736 15.1392L11.7074 12.1392C11.9347 11.9119 12.0388 11.5892 11.9873 11.2719C11.9359 10.9547 11.735 10.6815 11.4475 10.5377L8.68842 9.15818L10.7074 7.13924Z" fill="#FABC04"/>
    </svg>
  );
}

// Ad Spend Protection Card - matches Figma design
function AdSpendCard() {
  return (
    <div
      className="flex items-center gap-4 border border-gray-200 rounded-xl px-5 py-4"
      style={{
        background: 'linear-gradient(177deg, #FFFFFF 60%, rgba(183, 178, 255, 0.08) 243%)'
      }}
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <ShieldIcon />
          <span className="text-sm text-[#535255]">Monthly ad spend protection</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-44">
            <ProgressBar
              segments={[{ percentage: 75, colorClass: 'bg-t-dark-blue' }]}
              height="sm"
              className="bg-primary-50"
            />
          </div>
          <span className="text-xs text-[#9f9ea3]">80%</span>
        </div>
      </div>

      <div className="flex flex-col">
        <span className="text-sm font-semibold text-t-dark-blue">$2,392</span>
        <span className="text-sm font-medium text-t-menu">remaining</span>
      </div>

      <Button variant="yellow" size="sm" className="whitespace-nowrap">
        Extend protection
      </Button>
    </div>
  );
}

// Filter Bar - matches Figma design
function FilterBar({ domain }: { domain: string }) {
  return (
    <div className="flex flex-wrap items-center justify-between mt-4 gap-3">
      {/* Left filters */}
      <div className="flex flex-wrap items-center gap-4">
        <FilterButton label={domain} showLogo />
        <FilterButton label="Ad Platforms" />
        <FilterButton label="Ad Accounts" />
        <FilterButton label="Campaigns" />
      </div>

      {/* Date range picker */}
      <FilterButton
        label="Last 30 days"
        icon="calendar"
      />
    </div>
  );
}
