/**
 * Sidebar navigation icons - matches Figma/prototype design exactly
 */

interface IconProps {
  className?: string;
  isActive?: boolean;
}

// Dashboard / Home icon
export function DashboardIcon({ className = '', isActive = false }: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {isActive ? (
        // Filled version for active state
        <path d="M8 17H16M11.0177 2.76401L4.23539 8.03914C3.78202 8.39176 3.55534 8.56807 3.39203 8.78887C3.24737 8.98446 3.1396 9.2048 3.07403 9.43907C3 9.70353 3 9.99071 3 10.5651V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.0799 21 6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V10.5651C21 9.99071 21 9.70353 20.926 9.43907C20.8604 9.2048 20.7526 8.98446 20.608 8.78887C20.4447 8.56807 20.218 8.39176 19.7646 8.03914L12.9823 2.76401C12.631 2.49076 12.4553 2.35413 12.2613 2.30162C12.0902 2.25528 11.9098 2.25528 11.7387 2.30162C11.5447 2.35413 11.369 2.49076 11.0177 2.76401Z" fill="#2D37D1" stroke="#2D37D1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      ) : (
        <path d="M8 17H16M11.0177 2.76401L4.23539 8.03914C3.78202 8.39176 3.55534 8.56807 3.39203 8.78887C3.24737 8.98446 3.1396 9.2048 3.07403 9.43907C3 9.70353 3 9.99071 3 10.5651V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.0799 21 6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V10.5651C21 9.99071 21 9.70353 20.926 9.43907C20.8604 9.2048 20.7526 8.98446 20.608 8.78887C20.4447 8.56807 20.218 8.39176 19.7646 8.03914L12.9823 2.76401C12.631 2.49076 12.4553 2.35413 12.2613 2.30162C12.0902 2.25528 11.9098 2.25528 11.7387 2.30162C11.5447 2.35413 11.369 2.49076 11.0177 2.76401Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      )}
    </svg>
  );
}

// Analytics / Bar Chart icon
export function AnalyticsIcon({ className = '' }: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M18 20V10M12 20V4M6 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Clicks / Cursor Click icon
export function ClicksIcon({ className = '' }: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M9 3.5V2M5.06066 5.06066L4 4M5.06066 13L4 14.0607M13 5.06066L14.0607 4M3.5 9H2M8.5 8.5L12.6111 21.2778L15.5 18.3889L19.1111 22L22 19.1111L18.3889 15.5L21.2778 12.6111L8.5 8.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Threat / Lightning icon
export function ThreatIcon({ className = '' }: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M13 2L4.09347 12.6879C3.74466 13.1064 3.57026 13.3157 3.56759 13.4925C3.56527 13.6461 3.63373 13.7923 3.75327 13.8889C3.89076 14 4.16318 14 4.70803 14H12L11 22L19.9065 11.3121C20.2554 10.8936 20.4297 10.6843 20.4324 10.5075C20.4348 10.3539 20.3663 10.2077 20.2468 10.1111C20.1093 10 19.8369 10 19.292 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Exclusions / Check Verified icon
export function ExclusionsIcon({ className = '' }: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M9 12L11 14L15.5 9.5M7.33377 3.8187C8.1376 3.75455 8.90071 3.43846 9.51447 2.91542C10.9467 1.69486 13.0533 1.69486 14.4855 2.91542C15.0993 3.43846 15.8624 3.75455 16.6662 3.8187C18.5421 3.96839 20.0316 5.45794 20.1813 7.33377C20.2455 8.1376 20.5615 8.90071 21.0846 9.51447C22.3051 10.9467 22.3051 13.0533 21.0846 14.4855C20.5615 15.0993 20.2455 15.8624 20.1813 16.6662C20.0316 18.5421 18.5421 20.0316 16.6662 20.1813C15.8624 20.2455 15.0993 20.5615 14.4855 21.0846C13.0533 22.3051 10.9467 22.3051 9.51447 21.0846C8.90071 20.5615 8.1376 20.2455 7.33377 20.1813C5.45794 20.0316 3.96839 18.5421 3.8187 16.6662C3.75455 15.8624 3.43846 15.0993 2.91542 14.4855C1.69486 13.0533 1.69486 10.9467 2.91542 9.51447C3.43846 8.90071 3.75455 8.1376 3.8187 7.33377C3.96839 5.45794 5.45794 3.96839 7.33377 3.8187Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Blacklist / Slash Circle icon
export function BlacklistIcon({ className = '' }: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M4.93 4.93L19.07 19.07M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Reports / File icon
export function ReportsIcon({ className = '' }: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Settings / Gear icon
export function SettingsIcon({ className = '' }: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.7273 14.7273C18.6063 15.0015 18.5702 15.3056 18.6236 15.6005C18.6771 15.8954 18.8177 16.1676 19.0273 16.3818L19.0818 16.4364C19.2509 16.6052 19.385 16.8057 19.4765 17.0266C19.568 17.2475 19.6151 17.4846 19.6151 17.7241C19.6151 17.9636 19.568 18.2006 19.4765 18.4215C19.385 18.6424 19.2509 18.8429 19.0818 19.0118C18.9129 19.1809 18.7124 19.315 18.4915 19.4065C18.2706 19.498 18.0336 19.5451 17.7941 19.5451C17.5546 19.5451 17.3175 19.498 17.0966 19.4065C16.8757 19.315 16.6752 19.1809 16.5064 19.0118L16.4518 18.9573C16.2376 18.7477 15.9654 18.6071 15.6705 18.5536C15.3756 18.5002 15.0715 18.5363 14.7973 18.6573C14.5285 18.7719 14.2996 18.9611 14.1371 19.2024C13.9746 19.4437 13.8853 19.7268 13.88 20.0182V20.1818C13.88 20.664 13.6885 21.1265 13.3475 21.4675C13.0065 21.8085 12.544 22 12.0618 22C11.5796 22 11.1171 21.8085 10.7761 21.4675C10.4351 21.1265 10.2436 20.664 10.2436 20.1818V20.0945C10.2318 19.7933 10.1296 19.5024 9.95018 19.2582C9.77073 19.0139 9.52168 18.8274 9.23636 18.7273C8.96219 18.6063 8.65811 18.5702 8.36322 18.6236C8.06834 18.6771 7.79614 18.8177 7.58182 19.0273L7.52727 19.0818C7.35843 19.2509 7.15793 19.385 6.93701 19.4765C6.7161 19.568 6.47904 19.6151 6.23955 19.6151C6.00006 19.6151 5.763 19.568 5.54208 19.4765C5.32116 19.385 5.12067 19.2509 4.95182 19.0818C4.78271 18.9129 4.64861 18.7124 4.55713 18.4915C4.46564 18.2706 4.41855 18.0336 4.41855 17.7941C4.41855 17.5546 4.46564 17.3175 4.55713 17.0966C4.64861 16.8757 4.78271 16.6752 4.95182 16.5064L5.00636 16.4518C5.21598 16.2376 5.35658 15.9654 5.41006 15.6705C5.46354 15.3756 5.42742 15.0715 5.30636 14.7973C5.19174 14.5285 5.00256 14.2996 4.76123 14.1371C4.5199 13.9746 4.23679 13.8853 3.94545 13.88H3.81818C3.33597 13.88 2.87351 13.6885 2.53253 13.3475C2.19156 13.0065 2 12.544 2 12.0618C2 11.5796 2.19156 11.1171 2.53253 10.7761C2.87351 10.4351 3.33597 10.2436 3.81818 10.2436H3.90545C4.20665 10.2318 4.49754 10.1296 4.74182 9.95018C4.9861 9.77073 5.17263 9.52168 5.27273 9.23636C5.39379 8.96219 5.4299 8.65811 5.37642 8.36322C5.32295 8.06834 5.18235 7.79614 4.97273 7.58182L4.91818 7.52727C4.74908 7.35843 4.61497 7.15793 4.52349 6.93701C4.432 6.7161 4.38491 6.47904 4.38491 6.23955C4.38491 6.00006 4.432 5.763 4.52349 5.54208C4.61497 5.32116 4.74908 5.12067 4.91818 4.95182C5.08703 4.78271 5.28752 4.64861 5.50844 4.55713C5.72936 4.46564 5.96642 4.41855 6.20591 4.41855C6.4454 4.41855 6.68246 4.46564 6.90338 4.55713C7.1243 4.64861 7.32479 4.78271 7.49364 4.95182L7.54818 5.00636C7.7624 5.21598 8.0346 5.35658 8.32948 5.41006C8.62437 5.46354 8.92845 5.42742 9.20262 5.30636H9.27273C9.54153 5.19174 9.77036 5.00256 9.93288 4.76123C10.0954 4.5199 10.1847 4.23679 10.19 3.94545V3.81818C10.19 3.33597 10.3815 2.87351 10.7225 2.53253C11.0635 2.19156 11.526 2 12.0082 2C12.4904 2 12.9528 2.19156 13.2938 2.53253C13.6348 2.87351 13.8264 3.33597 13.8264 3.81818V3.90545C13.8316 4.19679 13.921 4.4799 14.0835 4.72123C14.246 4.96256 14.4748 5.15174 14.7436 5.26636C15.0178 5.38742 15.3219 5.42354 15.6168 5.37006C15.9117 5.31658 16.1839 5.17598 16.3982 4.96636L16.4527 4.91182C16.6216 4.74271 16.8221 4.60861 17.043 4.51712C17.2639 4.42564 17.501 4.37855 17.7405 4.37855C17.98 4.37855 18.217 4.42564 18.4379 4.51712C18.6589 4.60861 18.8594 4.74271 19.0282 4.91182C19.1973 5.08067 19.3314 5.28116 19.4229 5.50208C19.5144 5.723 19.5615 5.96006 19.5615 6.19955C19.5615 6.43904 19.5144 6.6761 19.4229 6.89702C19.3314 7.11794 19.1973 7.31843 19.0282 7.48727L18.9736 7.54182C18.764 7.75614 18.6234 8.02834 18.5699 8.32322C18.5164 8.61811 18.5525 8.92219 18.6736 9.19636V9.27273C18.7882 9.54153 18.9774 9.77036 19.2187 9.93288C19.4601 10.0954 19.7432 10.1847 20.0345 10.19H20.1818C20.664 10.19 21.1265 10.3815 21.4675 10.7225C21.8085 11.0635 22 11.526 22 12.0082C22 12.4904 21.8085 12.9528 21.4675 13.2938C21.1265 13.6348 20.664 13.8264 20.1818 13.8264H20.0945C19.8032 13.8316 19.5201 13.921 19.2788 14.0835C19.0374 14.246 18.8482 14.4748 18.7336 14.7436" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Chevron Up icon (for dropdown indicators)
export function ChevronUpIcon({ className = '' }: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Chevron Down icon
export function ChevronDownIcon({ className = '' }: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// User icon
export function UserIcon({ className = '' }: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Chevron Selector Vertical icon (for user account)
export function ChevronSelectorVerticalIcon({ className = '' }: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M7 15L12 20L17 15M7 9L12 4L17 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Align Left icon (for collapse button)
export function AlignLeftIcon({ className = '' }: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M21 10H3M21 6H3M21 14H3M21 18H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Announcement / Megaphone icon (for promo card)
export function AnnouncementIcon({ className = '' }: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M18 8C18.7956 8 19.5587 8.31607 20.1213 8.87868C20.6839 9.44129 21 10.2044 21 11C21 11.7956 20.6839 12.5587 20.1213 13.1213C19.5587 13.6839 18.7956 14 18 14M4 15V9C4 8.46957 4.21071 7.96086 4.58579 7.58579C4.96086 7.21071 5.46957 7 6 7H9.5L16 3V19L9.5 15H6C5.46957 15 4.96086 14.7893 4.58579 14.4142C4.21071 14.0391 4 13.5304 4 13V15ZM9.5 15V20C9.5 20.5304 9.71071 21.0391 10.0858 21.4142C10.4609 21.7893 10.9696 22 11.5 22H12C12.5304 22 13.0391 21.7893 13.4142 21.4142C13.7893 21.0391 14 20.5304 14 20V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Share icon (for promo card)
export function ShareIcon({ className = '' }: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.59 13.51L15.42 17.49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.41 6.51L8.59 10.49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Collapse sidebar icon (arrow pointing left)
export function CollapseIcon({ className = '' }: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M11 17L6 12M6 12L11 7M6 12H18M18 3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Scheduled Reports / Calendar icon
export function ScheduledReportsIcon({ className = '' }: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M21 10H3M16 2V6M8 2V6M7.8 22H16.2C17.8802 22 18.7202 22 19.362 21.673C19.9265 21.3854 20.3854 20.9265 20.673 20.362C21 19.7202 21 18.8802 21 17.2V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// AI + Custom Rules / Shield icon
export function AIRulesIcon({ className = '' }: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M11.302 21.6149C11.5234 21.744 11.6341 21.8086 11.7903 21.8421C11.9116 21.8681 12.0884 21.8681 12.2097 21.8421C12.3659 21.8086 12.4766 21.744 12.698 21.6149C14.646 20.4784 20 16.9084 20 12V6.6C20 6.04207 20 5.7631 19.8926 5.55048C19.7974 5.36198 19.6487 5.21152 19.4613 5.11409C19.2503 5.00419 18.9737 5.00084 18.4204 4.99413C15.4013 4.95799 13.0645 4.31659 11.6901 3.47311C11.5004 3.35691 11.4055 3.29882 11.2603 3.26874C11.1409 3.24396 10.9588 3.24388 10.8394 3.26866C10.6941 3.29871 10.5994 3.35701 10.4099 3.47361C9.03659 4.3178 6.69791 4.95799 3.67963 4.99413C3.12633 5.00084 2.84968 5.00419 2.63869 5.11409C2.45129 5.21152 2.30261 5.36198 2.20742 5.55048C2.1 5.7631 2.1 6.04207 2.1 6.6V12C2.1 16.9084 7.454 20.4784 9.402 21.6149" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Key / Authorizations icon
export function AuthorizationsIcon({ className = '' }: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M21 2L19 4M11.3891 11.6109C12.3844 12.6062 13 13.9812 13 15.5C13 18.5376 10.5376 21 7.5 21C4.46243 21 2 18.5376 2 15.5C2 12.4624 4.46243 10 7.5 10C9.01878 10 10.3938 10.6156 11.3891 11.6109ZM11.3891 11.6109L15 8M15 8L18 11L21 8L19 6M15 8L19 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Ad Accounts / Building icon
export function AdAccountsIcon({ className = '' }: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M13 11H17M13 15H17M6 11H6.01M6 15H6.01M4 21H20C21.1046 21 22 20.1046 22 19V5C22 3.89543 21.1046 3 20 3H4C2.89543 3 2 3.89543 2 5V19C2 20.1046 2.89543 21 4 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Click Forensics icon (scissors/cut icon representing analysis)
export function ClickForensicsIcon({ className = '' }: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M4 8V4M4 4H8M4 4L9 9M20 8V4M20 4H16M20 4L15 9M4 16V20M4 20H8M4 20L9 15M20 20L15 15M20 20V16M20 20H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Affiliate Program icon
export function AffiliateProgramIcon({ className = '' }: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M16 8V16M12 11V16M8 14V16M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
