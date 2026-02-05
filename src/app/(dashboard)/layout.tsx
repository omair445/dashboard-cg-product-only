'use client';

import { useState, useEffect } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { cn } from '@/lib/utils';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive sidebar on window resize
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      // Auto-collapse on iPad portrait (768px) and smaller
      if (width < 1024) {
        setSidebarCollapsed(true);
        setIsMobile(width < 768);
      } else {
        setSidebarCollapsed(false);
        setIsMobile(false);
      }
    };

    // Set initial state
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-page-bg">
      {/* Sidebar - hidden on mobile, collapsed on tablet */}
      {!isMobile && (
        <Sidebar
          isCollapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
      )}

      {/* Main Content - responsive margins */}
      <main
        className={cn(
          'min-h-screen transition-all duration-300',
          isMobile
            ? 'ml-0'
            : sidebarCollapsed
              ? 'ml-20 lg:ml-20'
              : 'ml-[280px] lg:ml-[280px]'
        )}
      >
        {children}
      </main>

      {/* Mobile bottom navigation could be added here */}
    </div>
  );
}
