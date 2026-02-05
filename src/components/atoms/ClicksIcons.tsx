/**
 * Icons for the Clicks page - matching Figma design exactly
 */

interface IconProps {
  className?: string;
}

// Eye icon for details column
export function EyeIcon({ className = '' }: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M2.42012 12.7132C2.28394 12.4975 2.21584 12.3897 2.17772 12.2234C2.14909 12.0985 2.14909 11.9015 2.17772 11.7766C2.21584 11.6103 2.28394 11.5025 2.42012 11.2868C3.54553 9.50484 6.8954 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7766C21.8517 11.9015 21.8517 12.0985 21.8231 12.2234C21.785 12.3897 21.7169 12.4975 21.5807 12.7132C20.4553 14.4952 17.1054 19 12.0004 19C6.8954 19 3.54553 14.4952 2.42012 12.7132Z" stroke="#9F9EA3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.0004 15C13.6573 15 15.0004 13.6569 15.0004 12C15.0004 10.3431 13.6573 9 12.0004 9C10.3435 9 9.00041 10.3431 9.00041 12C9.00041 13.6569 10.3435 15 12.0004 15Z" stroke="#9F9EA3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Google Ads icon
export function GoogleAdsIcon({ className = '' }: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M13.333 3.33337L6.66634 15L3.33301 15L9.99967 3.33337L13.333 3.33337Z" fill="#FBBC04"/>
      <path d="M16.6663 15L13.333 15L6.66634 3.33337L9.99967 3.33337L16.6663 15Z" fill="#4285F4"/>
      <circle cx="4.99967" cy="15" r="1.66667" fill="#34A853"/>
    </svg>
  );
}

// Meta Ads icon
export function MetaAdsIcon({ className = '' }: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M14.1667 5C12.5 5 11.25 6.25 10 8.33333C8.75 6.25 7.5 5 5.83333 5C3.33333 5 1.66667 7.5 1.66667 10.8333C1.66667 14.1667 3.33333 16.6667 5.83333 16.6667C7.5 16.6667 8.75 15.4167 10 13.3333C11.25 15.4167 12.5 16.6667 14.1667 16.6667C16.6667 16.6667 18.3333 14.1667 18.3333 10.8333C18.3333 7.5 16.6667 5 14.1667 5Z" fill="#0081FB"/>
    </svg>
  );
}

// Check circle icon (for valid/good status)
export function CheckCircleIcon({ className = '' }: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M5 8L7 10L11 6M14.6667 8C14.6667 11.6819 11.6819 14.6667 8 14.6667C4.3181 14.6667 1.33333 11.6819 1.33333 8C1.33333 4.3181 4.3181 1.33333 8 1.33333C11.6819 1.33333 14.6667 4.3181 14.6667 8Z" stroke="#17B26A" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Alert circle icon (for warning/suspicious status)
export function AlertCircleIcon({ className = '' }: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M8 5.33333V8M8 10.6667H8.00667M14.6667 8C14.6667 11.6819 11.6819 14.6667 8 14.6667C4.3181 14.6667 1.33333 11.6819 1.33333 8C1.33333 4.3181 4.3181 1.33333 8 1.33333C11.6819 1.33333 14.6667 4.3181 14.6667 8Z" stroke="#F79009" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Home icon (for residential origin)
export function HomeIcon({ className = '' }: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M5.33333 11.3333H10.6667M7.34511 1.84268L2.82359 5.35943C2.52135 5.59451 2.37023 5.71205 2.26135 5.85925C2.16491 5.98964 2.09307 6.13653 2.04935 6.29272C2 6.46902 2 6.66048 2 7.04339V11.8667C2 12.6134 2 12.9868 2.14532 13.272C2.27316 13.5229 2.47713 13.7269 2.72801 13.8547C3.01323 14 3.3866 14 4.13333 14H11.8667C12.6134 14 12.9868 14 13.272 13.8547C13.5229 13.7269 13.7269 13.5229 13.8547 13.272C14 12.9868 14 12.6134 14 11.8667V7.04339C14 6.66048 14 6.46902 13.9507 6.29272C13.9069 6.13653 13.8351 5.98964 13.7387 5.85925C13.6298 5.71205 13.4787 5.59451 13.1764 5.35943L8.65489 1.84268C8.42065 1.66051 8.30353 1.56942 8.17422 1.53441C8.06016 1.50352 7.93984 1.50352 7.82578 1.53441C7.69647 1.56942 7.57935 1.66051 7.34511 1.84268Z" stroke="#667085" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Building icon (for business origin)
export function BuildingIcon({ className = '' }: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M8 14V2.66667M8 2.66667L13.3333 5.33333V14M8 2.66667L2.66667 5.33333V14M5 7.33333H5.00667M5 10H5.00667M11 7.33333H11.0067M11 10H11.0067" stroke="#667085" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Desktop monitor icon
export function MonitorIcon({ className = '' }: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M5.33333 14H10.6667M8 11.3333V14M3.46667 11.3333H12.5333C13.28 11.3333 13.6534 11.3333 13.9387 11.188C14.1895 11.0602 14.3935 10.8562 14.5214 10.6053C14.6667 10.3201 14.6667 9.94677 14.6667 9.2V4.13333C14.6667 3.38656 14.6667 3.01317 14.5214 2.72795C14.3935 2.47708 14.1895 2.27312 13.9387 2.14528C13.6534 2 13.28 2 12.5333 2H3.46667C2.71989 2 2.34651 2 2.06128 2.14528C1.81042 2.27312 1.60645 2.47708 1.47861 2.72795C1.33333 3.01317 1.33333 3.38656 1.33333 4.13333V9.2C1.33333 9.94677 1.33333 10.3201 1.47861 10.6053C1.60645 10.8562 1.81042 11.0602 2.06128 11.188C2.34651 11.3333 2.71989 11.3333 3.46667 11.3333Z" stroke="#667085" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Laptop icon
export function LaptopIcon({ className = '' }: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M1.33333 12H14.6667M4 10.6667V5.33333C4 4.58656 4 4.21317 4.14528 3.92795C4.27312 3.67708 4.47708 3.47312 4.72795 3.34528C5.01317 3.2 5.38656 3.2 6.13333 3.2H9.86667C10.6134 3.2 10.9868 3.2 11.272 3.34528C11.5229 3.47312 11.7269 3.67708 11.8547 3.92795C12 4.21317 12 4.58656 12 5.33333V10.6667H4Z" stroke="#667085" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Phone icon
export function PhoneIcon({ className = '' }: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M8 12H8.00667M5.46667 14.6667H10.5333C11.28 14.6667 11.6534 14.6667 11.9387 14.5214C12.1895 14.3935 12.3935 14.1895 12.5214 13.9387C12.6667 13.6534 12.6667 13.28 12.6667 12.5333V3.46667C12.6667 2.71989 12.6667 2.34651 12.5214 2.06128C12.3935 1.81042 12.1895 1.60645 11.9387 1.47861C11.6534 1.33333 11.28 1.33333 10.5333 1.33333H5.46667C4.71989 1.33333 4.34651 1.33333 4.06128 1.47861C3.81042 1.60645 3.60645 1.81042 3.47861 2.06128C3.33333 2.34651 3.33333 2.71989 3.33333 3.46667V12.5333C3.33333 13.28 3.33333 13.6534 3.47861 13.9387C3.60645 14.1895 3.81042 14.3935 4.06128 14.5214C4.34651 14.6667 4.71989 14.6667 5.46667 14.6667Z" stroke="#667085" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Windows logo icon
export function WindowsIcon({ className = '' }: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M1.33333 3.04L6.66667 2.32V7.33333H1.33333V3.04ZM1.33333 12.96L6.66667 13.68V8.66667H1.33333V12.96ZM7.33333 13.76L14.6667 14.6667V8.66667H7.33333V13.76ZM7.33333 2.24V7.33333H14.6667V1.33333L7.33333 2.24Z" fill="#00ADEF"/>
    </svg>
  );
}

// Apple logo icon
export function AppleIcon({ className = '' }: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M11.3947 14.6667C10.6267 15.4067 9.79333 15.3 8.99333 14.9533C8.14667 14.5933 7.37333 14.58 6.48 14.9533C5.35333 15.4267 4.75333 15.2933 4.08 14.6667C0.413333 10.8867 0.953333 5.16 5.18 4.94C6.24 4.99333 6.98 5.50667 7.60667 5.55333C8.52667 5.36667 9.4 4.84 10.3867 4.90667C11.5667 4.99333 12.4667 5.44 13.0733 6.24667C10.68 7.68 11.22 10.8533 13.4133 11.7533C12.96 12.9267 12.3733 14.0867 11.3873 14.68L11.3947 14.6667ZM7.52667 4.89333C7.40667 3.17333 8.82 1.74667 10.4267 1.33333C10.64 3.30667 8.64667 4.8 7.52667 4.89333Z" fill="#999999"/>
    </svg>
  );
}

// Chrome browser icon
export function ChromeIcon({ className = '' }: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M8 5.33333C6.52724 5.33333 5.33333 6.52724 5.33333 8C5.33333 9.47276 6.52724 10.6667 8 10.6667C9.47276 10.6667 10.6667 9.47276 10.6667 8C10.6667 6.52724 9.47276 5.33333 8 5.33333Z" fill="#4285F4"/>
      <path d="M8 1.33333C4.31811 1.33333 1.33333 4.31811 1.33333 8H5.33333C5.33333 6.52724 6.52724 5.33333 8 5.33333V1.33333Z" fill="#EA4335"/>
      <path d="M1.33333 8C1.33333 11.6819 4.31811 14.6667 8 14.6667L5.33333 8H1.33333Z" fill="#FBBC05"/>
      <path d="M8 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8H10.6667L8 14.6667Z" fill="#34A853"/>
      <path d="M14.6667 8C14.6667 4.31811 11.6819 1.33333 8 1.33333L8 5.33333C9.47276 5.33333 10.6667 6.52724 10.6667 8H14.6667Z" fill="#4285F4"/>
    </svg>
  );
}

// Firefox browser icon
export function FirefoxIcon({ className = '' }: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="8" cy="8" r="6.66667" fill="#FF7139"/>
      <path d="M11.3333 5.33333C10.6667 4 9.33333 3.33333 8 3.33333C6 3.33333 4.66667 4.66667 4.66667 6.66667C4.66667 8.66667 6.66667 10.6667 6.66667 10.6667C6.66667 10.6667 5.33333 9.33333 5.33333 7.33333C5.33333 6 6 5.33333 7.33333 5.33333C8.66667 5.33333 9.33333 6 10 7.33333C10.6667 8.66667 10 10.6667 8 12C10.6667 11.3333 12.6667 8.66667 11.3333 5.33333Z" fill="#FFBD4F"/>
    </svg>
  );
}

// Filter icon
export function FilterIcon({ className = '' }: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M5 10H15M2.5 5H17.5M7.5 15H12.5" stroke="#344054" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Columns icon
export function ColumnsIcon({ className = '' }: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M10 2.5V17.5M6.83333 2.5H13.1667C14.2335 2.5 14.7669 2.5 15.1785 2.71799C15.5403 2.90973 15.8403 3.20973 16.032 3.57152C16.25 3.98309 16.25 4.51651 16.25 5.58333V14.4167C16.25 15.4835 16.25 16.0169 16.032 16.4285C15.8403 16.7903 15.5403 17.0903 15.1785 17.282C14.7669 17.5 14.2335 17.5 13.1667 17.5H6.83333C5.76651 17.5 5.23309 17.5 4.82152 17.282C4.45973 17.0903 4.15973 16.7903 3.96799 16.4285C3.75 16.0169 3.75 15.4835 3.75 14.4167V5.58333C3.75 4.51651 3.75 3.98309 3.96799 3.57152C4.15973 3.20973 4.45973 2.90973 4.82152 2.71799C5.23309 2.5 5.76651 2.5 6.83333 2.5Z" stroke="#344054" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Export icon
export function ExportIcon({ className = '' }: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M17.5 12.5V13.5C17.5 14.9001 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9001 17.5 13.5 17.5H6.5C5.09987 17.5 4.3998 17.5 3.86502 17.2275C3.39462 16.9878 3.01217 16.6054 2.77248 16.135C2.5 15.6002 2.5 14.9001 2.5 13.5V12.5M14.1667 6.66667L10 2.5M10 2.5L5.83333 6.66667M10 2.5V12.5" stroke="#344054" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Refresh icon
export function RefreshIcon({ className = '' }: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M1.66666 8.33333C1.66666 8.33333 3.33758 5.69898 4.6967 4.34171C6.05582 2.98444 7.92899 2.14705 10 2.14705C14.3346 2.14705 17.8529 5.66526 17.8529 10C17.8529 14.3347 14.3346 17.8529 10 17.8529C6.43258 17.8529 3.41841 15.4695 2.47167 12.2083M1.66666 8.33333V3.33333M1.66666 8.33333H6.66666" stroke="#344054" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// X/Close icon for filter chips
export function XIcon({ className = '' }: IconProps) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5" stroke="#98A2B3" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// PDF icon for downloads
export function PDFIcon({ className = '' }: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M11.6667 1.66667H5C4.08333 1.66667 3.33333 2.41667 3.33333 3.33334V16.6667C3.33333 17.5833 4.08333 18.3333 5 18.3333H15C15.9167 18.3333 16.6667 17.5833 16.6667 16.6667V6.66667L11.6667 1.66667Z" stroke="#5E54FD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.6667 1.66667V6.66667H16.6667" stroke="#5E54FD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.66666 10H13.3333M6.66666 13.3333H13.3333" stroke="#5E54FD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Search icon
export function SearchIcon({ className = '' }: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z" stroke="#667085" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Download cloud icon
export function DownloadCloudIcon({ className = '' }: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M5.33333 11.3333L8 14M8 14L10.6667 11.3333M8 14V8M13.3333 11.1618C14.1103 10.5917 14.6667 9.70927 14.6667 8.66667C14.6667 7.04705 13.3863 5.76667 11.7667 5.76667H11.1427C10.6773 3.84705 8.92313 2.33333 7.33333 2.33333C5.12419 2.33333 3.33333 4.12419 3.33333 6.33333C3.33333 6.56927 3.35233 6.80072 3.38879 7.02667C2.08193 7.30667 1.33333 8.42667 1.33333 9.66667C1.33333 11.1394 2.52724 12.3333 4 12.3333" stroke="#5E54FD" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Bot icon (robot) for bot probability
export function BotIcon({ className = '' }: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M10 2.5V5M6.66667 8.33333H6.675M13.3333 8.33333H13.3417M7.5 11.6667C7.5 11.6667 8.33333 12.5 10 12.5C11.6667 12.5 12.5 11.6667 12.5 11.6667M5 15H15C16.3807 15 17.5 13.8807 17.5 12.5V7.5C17.5 6.11929 16.3807 5 15 5H5C3.61929 5 2.5 6.11929 2.5 7.5V12.5C2.5 13.8807 3.61929 15 5 15Z" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
