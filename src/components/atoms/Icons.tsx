/**
 * Shared SVG icons for the dashboard - matches Figma design exactly
 */

// Shield icon with dollar sign - blue filled (for Traffic Quality, Traffic Protection)
export function ShieldIcon({ className = '' }: { className?: string }) {
  return (
    <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M7.26165 0.0169805C7.41973 -0.00566017 7.58027 -0.00566017 7.73835 0.0169805C7.92054 0.0430736 8.09007 0.10655 8.22468 0.156952L8.26075 0.170426L12.8376 1.87145C13.3525 2.06195 13.8046 2.22925 14.1527 2.53337C14.4573 2.79942 14.6919 3.13499 14.8363 3.51107C15.0014 3.94098 15.0007 4.41929 14.9999 4.96394L14.9998 9.02907C14.9998 11.3637 13.7187 13.31 12.334 14.7399C10.9399 16.1793 9.34495 17.196 8.50155 17.6837L8.4674 17.7035C8.31349 17.7931 8.11373 17.9094 7.84946 17.9655C7.63325 18.0115 7.36675 18.0115 7.15054 17.9655C6.88628 17.9094 6.68651 17.7931 6.53261 17.7035L6.49845 17.6837C5.65505 17.196 4.06007 16.1793 2.66603 14.7399C1.28126 13.31 0.000220686 11.3637 0.000220686 9.02907L0.000108931 4.96395C-0.000686867 4.41929 -0.00138582 3.94098 0.163666 3.51107C0.308055 3.13499 0.542683 2.79942 0.847269 2.53337C1.19544 2.22925 1.64755 2.06195 2.16236 1.87145L6.73926 0.170426L6.77532 0.156953C6.90993 0.10655 7.07946 0.0430737 7.26165 0.0169805ZM8.33329 4.07339C8.33329 3.61724 7.96021 3.24746 7.49998 3.24746C7.03976 3.24746 6.66667 3.61724 6.66667 4.07339V4.48636C5.286 4.48636 4.16675 5.5957 4.16675 6.96415C4.16675 8.33259 5.286 9.44194 6.66667 9.44194H8.33329C8.79352 9.44194 9.1666 9.81172 9.1666 10.2679C9.1666 10.724 8.79352 11.0938 8.33329 11.0938H6.55557C6.27891 11.0938 6.03717 10.9398 5.91528 10.7098C5.7013 10.3059 5.19753 10.1505 4.79008 10.3626C4.38262 10.5746 4.22578 11.074 4.43975 11.4778C4.83819 12.2298 5.63542 12.7457 6.55557 12.7457H6.66667V13.1586C6.66667 13.6148 7.03976 13.9846 7.49998 13.9846C7.96021 13.9846 8.33329 13.6148 8.33329 13.1586V12.7457C9.71396 12.7457 10.8332 11.6363 10.8332 10.2679C10.8332 8.89942 9.71396 7.79008 8.33329 7.79008H6.66667C6.20645 7.79008 5.83337 7.42029 5.83337 6.96415C5.83337 6.508 6.20645 6.13822 6.66667 6.13822H8.4444C8.72106 6.13822 8.96279 6.29217 9.08469 6.52222C9.29866 6.92607 9.80243 7.08153 10.2099 6.86945C10.6173 6.65736 10.7742 6.15805 10.5602 5.75421C10.1618 5.00222 9.36454 4.48636 8.4444 4.48636H8.33329V4.07339Z" fill="#2D37D1"/>
    </svg>
  );
}

// Check verified icon - blue filled (for New Sources Blocked) - matches Figma node 19:19967
export function CheckVerifiedIcon({ className = '' }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M11 0C8.08367 0 5.78904 2.12693 4.53049 4.53049C2.12693 5.78904 0 8.08367 0 11C0 13.9163 2.12693 16.211 4.53049 17.4695C5.78904 19.8731 8.08367 22 11 22C13.9163 22 16.211 19.8731 17.4695 17.4695C19.8731 16.211 22 13.9163 22 11C22 8.08367 19.8731 5.78904 17.4695 4.53049C16.211 2.12693 13.9163 0 11 0ZM15.7071 9.70711C16.0976 9.31658 16.0976 8.68342 15.7071 8.29289C15.3166 7.90237 14.6834 7.90237 14.2929 8.29289L10 12.5858L7.70711 10.2929C7.31658 9.90237 6.68342 9.90237 6.29289 10.2929C5.90237 10.6834 5.90237 11.3166 6.29289 11.7071L9.29289 14.7071C9.68342 15.0976 10.3166 15.0976 10.7071 14.7071L15.7071 9.70711Z" fill="#2D37D1"/>
    </svg>
  );
}

// Info circle icon - gray
export function InfoIcon({ className = '' }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M8 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8C14.6667 4.3181 11.6819 1.33333 8 1.33333C4.3181 1.33333 1.33333 4.3181 1.33333 8C1.33333 11.6819 4.3181 14.6667 8 14.6667Z" stroke="#9F9EA3" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 10.6667V8" stroke="#9F9EA3" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 5.33333H8.00667" stroke="#9F9EA3" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Trend up arrow icon
export function TrendUpIcon({ color = '#097347', className = '' }: { color?: string; className?: string }) {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M12.75 6.375L8.5 2.125L4.25 6.375" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.5 2.125V14.875" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Trend down arrow icon
export function TrendDownIcon({ color = '#097347', className = '' }: { color?: string; className?: string }) {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M4.25 10.625L8.5 14.875L12.75 10.625" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.5 14.875V2.125" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Chevron down icon
export function ChevronDownIcon({ className = '' }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M6 9L12 15L18 9" stroke="#111553" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Protection Analysis icon - blue circle with arrow (matches Figma node 19:19827)
export function ChartLineIcon({ className = '' }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="9" cy="9" r="9" fill="#2D37D1"/>
      <path d="M6 12L12 6M12 6H7M12 6V11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Legend dot
export function LegendDot({ color, className = '' }: { color: string; className?: string }) {
  return (
    <div
      className={`w-2 h-2 rounded-full ${className}`}
      style={{ backgroundColor: color }}
    />
  );
}

// Calendar icon
export function CalendarIcon({ className = '' }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M21 10H3M16 2V6M8 2V6M7.8 22H16.2C17.8802 22 18.7202 22 19.362 21.673C19.9265 21.3854 20.3854 20.9265 20.673 20.362C21 19.7202 21 18.8802 21 17.2V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22Z" stroke="#111553" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Bell icon
export function BellIcon({ className = '' }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M9.35419 21C10.0593 21.6224 10.9856 22 12 22C13.0144 22 13.9407 21.6224 14.6458 21M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 11.0902 5.22047 13.206 4.34966 14.6054C3.61513 15.7859 3.24786 16.3761 3.26132 16.5408C3.27624 16.7231 3.31486 16.7926 3.46178 16.9016C3.59446 17 4.19259 17 5.38885 17H18.6112C19.8074 17 20.4056 17 20.5382 16.9016C20.6851 16.7926 20.7238 16.7231 20.7387 16.5408C20.7521 16.3761 20.3849 15.7859 19.6503 14.6054C18.7795 13.206 18 11.0902 18 8Z" stroke="#111553" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Book icon
export function BookIcon({ className = '' }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M20 19V5C20 3.89543 19.1046 3 18 3H8C5.79086 3 4 4.79086 4 7V17C4 19.2091 5.79086 21 8 21H18C19.1046 21 20 20.1046 20 19ZM20 19C20 17.8954 19.1046 17 18 17H8C5.79086 17 4 15.2091 4 13" stroke="#111553" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Share icon
export function ShareIcon({ className = '' }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M21 9L21 3M21 3H15M21 3L13 11M10 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V14" stroke="#616064" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
