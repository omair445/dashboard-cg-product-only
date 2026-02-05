import { cn } from '@/lib/utils';

type Platform = 'google' | 'meta' | 'bing';

interface PlatformIconProps {
  platform: Platform;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const SIZES = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
};

/**
 * Platform/Ad network icons matching Figma design
 */
export function PlatformIcon({ platform, size = 'md', className }: PlatformIconProps) {
  const sizeClass = SIZES[size];

  switch (platform) {
    case 'google':
      return <GoogleAdsIcon className={cn(sizeClass, className)} />;
    case 'meta':
      return <MetaIcon className={cn(sizeClass, className)} />;
    case 'bing':
      return <BingAdsIcon className={cn(sizeClass, className)} />;
    default:
      return null;
  }
}

function GoogleAdsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.27273 17.4545L9.27273 7.09091L12.5455 12.5455L6.54545 22.9091C4.90909 24 3.27273 23.4545 2.45455 21.8182C1.63636 20.1818 1.63636 18.5455 3.27273 17.4545Z" fill="#FBBC04"/>
      <path d="M20.7273 17.4545L14.7273 7.09091L11.4545 12.5455L17.4545 22.9091C19.0909 24 20.7273 23.4545 21.5455 21.8182C22.3636 20.1818 22.3636 18.5455 20.7273 17.4545Z" fill="#4285F4"/>
      <path d="M12 1.09091C10.3636 0 8.72727 0.545455 7.90909 2.18182L3.27273 10.3636C2.45455 12 3 13.6364 4.63636 14.7273C6.27273 15.8182 7.90909 15.2727 8.72727 13.6364L13.3636 5.45455C14.1818 3.81818 13.6364 2.18182 12 1.09091Z" fill="#34A853"/>
      <circle cx="18.5455" cy="19.6364" r="2.72727" fill="#4285F4"/>
    </svg>
  );
}

function MetaIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z" fill="url(#meta_gradient)"/>
      <path d="M15.877 15.672C15.582 16.074 15.133 16.32 14.64 16.32C13.992 16.32 13.44 15.912 12.936 15.24C12.432 14.568 11.976 13.704 11.568 12.744C11.16 11.784 10.776 10.824 10.416 9.96C10.056 9.096 9.696 8.4 9.336 7.968C8.976 7.536 8.616 7.32 8.256 7.32C7.68 7.32 7.2 7.824 6.816 8.832C6.432 9.84 6.24 11.064 6.24 12.504C6.24 13.608 6.384 14.52 6.672 15.24C6.96 15.96 7.368 16.32 7.896 16.32C8.424 16.32 8.904 15.912 9.336 15.096" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M15.84 8.832C15.456 7.824 14.976 7.32 14.4 7.32C14.04 7.32 13.68 7.536 13.32 7.968C12.96 8.4 12.6 9.096 12.24 9.96" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <defs>
        <linearGradient id="meta_gradient" x1="2" y1="12" x2="22" y2="12" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0668E1"/>
          <stop offset="0.5" stopColor="#0080FB"/>
          <stop offset="1" stopColor="#00C0FF"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

function BingAdsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 3V17.5L9.5 19.5V7L14.5 9V14L9.5 16.5L5 14.5" fill="url(#bing_gradient)"/>
      <path d="M9.5 7L14.5 9L19 6.5L14.5 3L9.5 5V7Z" fill="#00A4EF"/>
      <defs>
        <linearGradient id="bing_gradient" x1="5" y1="11" x2="14.5" y2="11" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00A4EF"/>
          <stop offset="1" stopColor="#7FBA00"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export { GoogleAdsIcon, MetaIcon, BingAdsIcon };
