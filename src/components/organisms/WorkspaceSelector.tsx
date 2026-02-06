'use client';

import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Avatar } from '../atoms/Avatar';
import { ChevronDownIcon } from '../atoms/SidebarIcons';

interface WorkspaceSelectorProps {
  className?: string;
}

// Menu item types
interface MenuItem {
  label: string;
  icon?: 'user' | 'offer' | 'bell' | 'admin' | 'logout';
  onClick?: () => void;
  isDivider?: boolean;
}

/**
 * Workspace selector with user profile and dropdown menu
 * Displays workspace name, user email, and profile picture
 */
export function WorkspaceSelector({ className }: WorkspaceSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Mock data - replace with real data from context/API
  const workspace = {
    name: "ClickGuard's Workspace",
    email: "gustavo@clickguard.com",
    initials: "GU",
  };

  const menuItems: MenuItem[] = [
    { label: 'Manager', icon: 'user', onClick: () => console.log('Manager') },
    { label: '', isDivider: true },
    { label: 'Gustavo', onClick: () => console.log('Gustavo') },
    { label: 'gustavo@clickguard.com', onClick: () => console.log('Email') },
    { label: '', isDivider: true },
    { label: 'Add members', onClick: () => console.log('Add members') },
    { label: 'Offers', onClick: () => console.log('Offers') },
    { label: 'Notifications', onClick: () => console.log('Notifications') },
    { label: '', isDivider: true },
    { label: 'Admin Panel', onClick: () => console.log('Admin Panel') },
    { label: '', isDivider: true },
    { label: 'Logout', onClick: () => console.log('Logout') },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  return (
    <div className={cn('relative', className)} ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200',
          'hover:bg-gray-50',
          isOpen && 'bg-gray-50'
        )}
      >
        {/* Avatar */}
        <Avatar initials={workspace.initials} size="md" />

        {/* Workspace Info */}
        <div className="flex-1 text-left overflow-hidden">
          <div className="text-sm font-semibold text-[#111553] truncate">
            {workspace.name}
          </div>
          <div className="text-xs text-[#6b6b6b] truncate">
            {workspace.email}
          </div>
        </div>

        {/* Chevron Icon */}
        <ChevronDownIcon
          className={cn(
            'flex-shrink-0 text-[#6b6b6b] transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={cn(
            'absolute top-full left-0 right-0 mt-2 mx-2',
            'bg-white rounded-xl shadow-lg border border-gray-100',
            'py-2 z-50 min-w-[240px]',
            'animate-in fade-in slide-in-from-top-2 duration-200'
          )}
        >
          {menuItems.map((item, index) => {
            if (item.isDivider) {
              return (
                <div
                  key={`divider-${index}`}
                  className="my-2 border-t border-gray-100"
                />
              );
            }

            // Special styling for the Manager badge
            if (item.label === 'Manager') {
              return (
                <button
                  key={index}
                  onClick={() => {
                    item.onClick?.();
                    setIsOpen(false);
                  }}
                  className={cn(
                    'w-full flex items-center gap-3 px-4 py-2.5',
                    'text-left'
                  )}
                >
                  <span className="flex items-center gap-2 px-3 py-1.5 bg-[#e8e6ff] rounded-lg">
                    <span className="w-4 h-4 flex items-center justify-center text-[#5E54FD]">
                      {getMenuIcon('user')}
                    </span>
                    <span className="text-sm font-medium text-[#111553]">
                      {item.label}
                    </span>
                  </span>
                </button>
              );
            }

            // Special styling for user name and email
            if (item.label === 'Gustavo' || item.label.includes('@')) {
              return (
                <button
                  key={index}
                  onClick={() => {
                    item.onClick?.();
                    setIsOpen(false);
                  }}
                  className={cn(
                    'w-full flex items-center gap-3 px-4 py-2',
                    'text-sm hover:bg-gray-50',
                    'transition-colors duration-150',
                    'text-left',
                    item.label === 'Gustavo' ? 'font-semibold text-[#111553]' : 'text-[#6b6b6b]'
                  )}
                >
                  <span>{item.label}</span>
                </button>
              );
            }

            return (
              <button
                key={index}
                onClick={() => {
                  item.onClick?.();
                  setIsOpen(false);
                }}
                className={cn(
                  'w-full flex items-center gap-3 px-4 py-2.5',
                  'text-sm text-[#4a4a4a] hover:bg-gray-50',
                  'transition-colors duration-150',
                  'text-left'
                )}
              >
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

// Helper function to render menu icons
function getMenuIcon(icon: string) {
  switch (icon) {
    case 'user':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'offer':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 12V22H4V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 7H2V12H22V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 22V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'bell':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.35419 21C10.0593 21.6224 10.9856 22 12 22C13.0144 22 13.9407 21.6224 14.6458 21M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 11.0902 5.22047 13.206 4.34966 14.6054C3.61513 15.7859 3.24786 16.3761 3.26132 16.5408C3.27624 16.7231 3.31486 16.7926 3.46178 16.9016C3.59446 17 4.19259 17 5.38885 17H18.6112C19.8074 17 20.4056 17 20.5382 16.9016C20.6851 16.7926 20.7238 16.7231 20.7387 16.5408C20.7521 16.3761 20.3849 15.7859 19.6503 14.6054C18.7795 13.206 18 11.0902 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'admin':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18.7273 14.7273C18.6063 15.0015 18.5702 15.3056 18.6236 15.6005C18.6771 15.8954 18.8177 16.1676 19.0273 16.3818L19.0818 16.4364C19.2509 16.6052 19.385 16.8057 19.4765 17.0266C19.568 17.2475 19.6151 17.4846 19.6151 17.7241C19.6151 17.9636 19.568 18.2006 19.4765 18.4215C19.385 18.6424 19.2509 18.8429 19.0818 19.0118C18.9129 19.1809 18.7124 19.315 18.4915 19.4065C18.2706 19.498 18.0336 19.5451 17.7941 19.5451C17.5546 19.5451 17.3175 19.498 17.0966 19.4065C16.8757 19.315 16.6752 19.1809 16.5064 19.0118L16.4518 18.9573C16.2376 18.7477 15.9654 18.6071 15.6705 18.5536C15.3756 18.5002 15.0715 18.5363 14.7973 18.6573C14.5285 18.7719 14.2996 18.9611 14.1371 19.2024C13.9746 19.4437 13.8853 19.7268 13.88 20.0182V20.1818C13.88 20.664 13.6885 21.1265 13.3475 21.4675C13.0065 21.8085 12.544 22 12.0618 22C11.5796 22 11.1171 21.8085 10.7761 21.4675C10.4351 21.1265 10.2436 20.664 10.2436 20.1818V20.0945C10.2318 19.7933 10.1296 19.5024 9.95018 19.2582C9.77073 19.0139 9.52168 18.8274 9.23636 18.7273C8.96219 18.6063 8.65811 18.5702 8.36322 18.6236C8.06834 18.6771 7.79614 18.8177 7.58182 19.0273L7.52727 19.0818C7.35843 19.2509 7.15793 19.385 6.93701 19.4765C6.7161 19.568 6.47904 19.6151 6.23955 19.6151C6.00006 19.6151 5.763 19.568 5.54208 19.4765C5.32116 19.385 5.12067 19.2509 4.95182 19.0818C4.78271 18.9129 4.64861 18.7124 4.55713 18.4915C4.46564 18.2706 4.41855 18.0336 4.41855 17.7941C4.41855 17.5546 4.46564 17.3175 4.55713 17.0966C4.64861 16.8757 4.78271 16.6752 4.95182 16.5064L5.00636 16.4518C5.21598 16.2376 5.35658 15.9654 5.41006 15.6705C5.46354 15.3756 5.42742 15.0715 5.30636 14.7973C5.19174 14.5285 5.00256 14.2996 4.76123 14.1371C4.5199 13.9746 4.23679 13.8853 3.94545 13.88H3.81818C3.33597 13.88 2.87351 13.6885 2.53253 13.3475C2.19156 13.0065 2 12.544 2 12.0618C2 11.5796 2.19156 11.1171 2.53253 10.7761C2.87351 10.4351 3.33597 10.2436 3.81818 10.2436H3.90545C4.20665 10.2318 4.49754 10.1296 4.74182 9.95018C4.9861 9.77073 5.17263 9.52168 5.27273 9.23636C5.39379 8.96219 5.4299 8.65811 5.37642 8.36322C5.32295 8.06834 5.18235 7.79614 4.97273 7.58182L4.91818 7.52727C4.74908 7.35843 4.61497 7.15793 4.52349 6.93701C4.432 6.7161 4.38491 6.47904 4.38491 6.23955C4.38491 6.00006 4.432 5.763 4.52349 5.54208C4.61497 5.32116 4.74908 5.12067 4.91818 4.95182C5.08703 4.78271 5.28752 4.64861 5.50844 4.55713C5.72936 4.46564 5.96642 4.41855 6.20591 4.41855C6.4454 4.41855 6.68246 4.46564 6.90338 4.55713C7.1243 4.64861 7.32479 4.78271 7.49364 4.95182L7.54818 5.00636C7.7624 5.21598 8.0346 5.35658 8.32948 5.41006C8.62437 5.46354 8.92845 5.42742 9.20262 5.30636H9.27273C9.54153 5.19174 9.77036 5.00256 9.93288 4.76123C10.0954 4.5199 10.1847 4.23679 10.19 3.94545V3.81818C10.19 3.33597 10.3815 2.87351 10.7225 2.53253C11.0635 2.19156 11.526 2 12.0082 2C12.4904 2 12.9528 2.19156 13.2938 2.53253C13.6348 2.87351 13.8264 3.33597 13.8264 3.81818V3.90545C13.8316 4.19679 13.921 4.4799 14.0835 4.72123C14.246 4.96256 14.4748 5.15174 14.7436 5.26636C15.0178 5.38742 15.3219 5.42354 15.6168 5.37006C15.9117 5.31658 16.1839 5.17598 16.3982 4.96636L16.4527 4.91182C16.6216 4.74271 16.8221 4.60861 17.043 4.51712C17.2639 4.42564 17.501 4.37855 17.7405 4.37855C17.98 4.37855 18.217 4.42564 18.4379 4.51712C18.6589 4.60861 18.8594 4.74271 19.0282 4.91182C19.1973 5.08067 19.3314 5.28116 19.4229 5.50208C19.5144 5.723 19.5615 5.96006 19.5615 6.19955C19.5615 6.43904 19.5144 6.6761 19.4229 6.89702C19.3314 7.11794 19.1973 7.31843 19.0282 7.48727L18.9736 7.54182C18.764 7.75614 18.6234 8.02834 18.5699 8.32322C18.5164 8.61811 18.5525 8.92219 18.6736 9.19636V9.27273C18.7882 9.54153 18.9774 9.77036 19.2187 9.93288C19.4601 10.0954 19.7432 10.1847 20.0345 10.19H20.1818C20.664 10.19 21.1265 10.3815 21.4675 10.7225C21.8085 11.0635 22 11.526 22 12.0082C22 12.4904 21.8085 12.9528 21.4675 13.2938C21.1265 13.6348 20.664 13.8264 20.1818 13.8264H20.0945C19.8032 13.8316 19.5201 13.921 19.2788 14.0835C19.0374 14.246 18.8482 14.4748 18.7336 14.7436" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'logout':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 17L21 12L16 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    default:
      return null;
  }
}
