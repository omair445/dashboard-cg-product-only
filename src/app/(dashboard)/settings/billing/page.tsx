'use client';

import { Header } from '@/components/layout/Header';
import { SettingsSidebar } from '@/components/layout/SettingsSidebar';
import { useState } from 'react';

export default function BillingPage() {
  const [autoUpgrade, setAutoUpgrade] = useState(true);

  return (
    <div className="flex-1 bg-[#f2f2f2]">
      <Header
        title="Billing"
        subtitle="Manage your subscription and billing options"
        domain="clickguard.com"
        showAdSpend={false}
        showFilters={false}
      />

      <div className="flex h-[calc(100vh-200px)]">
        <SettingsSidebar />
        
        <div className="flex-1 p-6 space-y-6 overflow-auto">
        {/* Plan Section */}
        <div className="bg-white rounded-[24px] p-8">
          <h2 className="text-[24px] font-medium leading-[30px] text-[#111553] mb-6">Plan</h2>
          
          <div className="border border-[#e1e1e1] rounded-[20px] p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-[#edfcf3] rounded-full mb-3">
                  <span className="text-[14px] font-normal leading-[18px] text-[#097347]">Active</span>
                </div>
                <h3 className="text-[24px] font-medium leading-[30px] text-[#111553] mb-2">
                  ClickGUARD Standard
                </h3>
                <div className="flex items-center gap-2 text-[14px]">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5 8.33337H2.5M13.3333 1.66671V5.00004M6.66667 1.66671V5.00004M6.5 18.3334H13.5C14.9001 18.3334 15.6002 18.3334 16.135 18.0609C16.6054 17.8212 16.9878 17.4388 17.2275 16.9684C17.5 16.4336 17.5 15.7335 17.5 14.3334V7.33337C17.5 5.93324 17.5 5.23318 17.2275 4.69839C16.9878 4.22799 16.6054 3.84558 16.135 3.60586C15.6002 3.33337 14.9001 3.33337 13.5 3.33337H6.5C5.09987 3.33337 4.3998 3.33337 3.86502 3.60586C3.39462 3.84558 3.01217 4.22799 2.77248 4.69839C2.5 5.23318 2.5 5.93324 2.5 7.33337V14.3334C2.5 15.7335 2.5 16.4336 2.77248 16.9684C3.01217 17.4388 3.39462 17.8212 3.86502 18.0609C4.3998 18.3334 5.09987 18.3334 6.5 18.3334Z" stroke="#616064" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="font-normal text-[#616064]">Started:</span>
                  <span className="font-semibold text-[#444346]">January 14, 2028</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-[14px] text-[#9f9ea3] line-through mb-1">$3,900/year</div>
                <div className="text-[30px] font-medium leading-[36px] text-[#111553]">$1,500/year</div>
                <div className="text-[14px] text-[#9f9ea3]">Inc. X month(s) discount applied</div>
                <div className="text-[14px] text-[#444346] mt-2">Next payment: January 14 2027</div>
              </div>
            </div>
            
            <button className="px-4 py-[10px] bg-[#eeff9d] border border-[#bae100] rounded-full text-[16px] font-medium leading-[22px] text-[#111553] hover:bg-[#e0f285] transition-colors shadow-[0px_4px_6px_0px_rgba(210,251,12,0.4)]">
              Manage plan
            </button>
          </div>
        </div>

        {/* Usage Section */}
        <div className="bg-white rounded-[24px] p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[24px] font-medium leading-[30px] text-[#111553]">Usage</h2>
            <label className="flex items-center gap-3 cursor-pointer">
              <span className="text-[16px] font-medium text-[#444346]">Auto Upgrade Ad Spend Limit</span>
              <div className="relative">
                <input
                  type="checkbox"
                  checked={autoUpgrade}
                  onChange={(e) => setAutoUpgrade(e.target.checked)}
                  className="sr-only peer"
                />
                <div className={`w-11 h-6 rounded-full transition-colors ${autoUpgrade ? 'bg-[#7169ff]' : 'bg-[#e1e1e1]'}`}>
                  <div className={`absolute top-0.5 left-0.5 bg-white w-5 h-5 rounded-full transition-transform ${autoUpgrade ? 'translate-x-5' : 'translate-x-0'}`} />
                </div>
              </div>
              <button className="flex items-center justify-center w-5 h-5">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8" cy="8" r="7" stroke="#9f9ea3" strokeWidth="1.5"/>
                  <path d="M8 11.3333V8M8 4.66667H8.00667" stroke="#9f9ea3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </label>
          </div>

          <div className="border border-[#e1e1e1] rounded-[20px] p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[16px] font-normal text-[#444346]">Monthly ad spend</span>
              <span className="text-[16px] font-normal text-[#444346]">$7,000 / $10,000</span>
            </div>
            <div className="relative w-full h-2 bg-[#e1e1e1] rounded-full overflow-hidden">
              <div className="absolute left-0 top-0 h-full bg-[#7169ff] rounded-full" style={{ width: '70%' }} />
            </div>
            <div className="flex items-center gap-2 mt-4 text-[14px]">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6667 6.66667L10 13.3333L6.66667 10M18.3333 10C18.3333 14.6024 14.6024 18.3333 10 18.3333C5.39763 18.3333 1.66667 14.6024 1.66667 10C1.66667 5.39763 5.39763 1.66667 10 1.66667C14.6024 1.66667 18.3333 5.39763 18.3333 10Z" stroke="#616064" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-normal text-[#616064]">Resets:</span>
              <span className="font-semibold text-[#444346]">February 14, 2026</span>
            </div>
          </div>
        </div>

        {/* Payment Method Section */}
        <div className="bg-white rounded-[24px] p-8">
          <h2 className="text-[24px] font-medium leading-[30px] text-[#111553] mb-6">Payment method</h2>
          
          <div className="flex gap-4 overflow-x-auto pb-4">
            {/* Visa Card - Primary */}
            <div className="border-2 border-[#7169ff] rounded-[12px] p-4 min-w-[245px] bg-white">
              <div className="flex items-start justify-between mb-5">
                <div className="w-[46px] h-[32px] bg-white border border-[#f2f4f7] rounded-[6px] flex items-center justify-center">
                  <svg width="30" height="10" viewBox="0 0 30 10" fill="none">
                    <path d="M12.4 9.6L14.9 0.4H17.7L15.2 9.6H12.4Z" fill="#00579F"/>
                    <path d="M26.8 0.6C26.3 0.4 25.5 0.2 24.5 0.2C21.8 0.2 19.9 1.6 19.9 3.6C19.9 5.1 21.3 5.9 22.4 6.4C23.5 6.9 23.9 7.2 23.9 7.7C23.9 8.4 23 8.7 22.2 8.7C21.1 8.7 20.5 8.5 19.6 8.1L19.2 7.9L18.8 10C19.4 10.3 20.5 10.5 21.6 10.5C24.5 10.5 26.3 9.1 26.4 6.9C26.4 5.7 25.6 4.8 23.9 4.1C22.9 3.6 22.3 3.3 22.3 2.8C22.3 2.3 22.9 1.8 24.1 1.8C25 1.8 25.7 2 26.2 2.2L26.5 2.3L26.8 0.6Z" fill="#00579F"/>
                    <path d="M28.1 0.4H25.9C25.2 0.4 24.7 0.6 24.4 1.2L20.3 9.6H23.2L23.8 8H27.3L27.6 9.6H30.2L28.1 0.4ZM24.6 6L25.9 2.7L26.7 6H24.6Z" fill="#00579F"/>
                    <path d="M10.5 0.4L7.8 6.7L7.5 5.2C7 3.8 5.6 2.3 4 1.5L6.5 9.6H9.4L13.4 0.4H10.5Z" fill="#00579F"/>
                    <path d="M5.3 0.4H0.9L0.9 0.7C4.2 1.5 6.5 3.6 7.5 5.2L6.4 1.2C6.3 0.6 5.8 0.4 5.3 0.4Z" fill="#FAA61A"/>
                  </svg>
                </div>
                <button className="text-[#444346]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <div className="space-y-1">
                <div className="text-[14px] font-medium text-[#344054]">**** 4242</div>
                <div className="text-[16px] font-medium text-[#444346]">Primary</div>
              </div>
            </div>

            {/* Mastercard */}
            <div className="border border-[#e1e1e1] rounded-[12px] p-4 min-w-[245px] bg-white">
              <div className="flex items-start justify-between mb-5">
                <div className="w-[46px] h-[32px] bg-white border border-[#f2f4f7] rounded-[6px] flex items-center justify-center">
                  <svg width="30" height="18" viewBox="0 0 30 18" fill="none">
                    <circle cx="10.5" cy="9" r="9" fill="#EB001B"/>
                    <circle cx="19.5" cy="9" r="9" fill="#F79E1B"/>
                    <path d="M15 2.7C16.5 3.9 17.5 5.8 17.5 8C17.5 10.2 16.5 12.1 15 13.3C13.5 12.1 12.5 10.2 12.5 8C12.5 5.8 13.5 3.9 15 2.7Z" fill="#FF5F00"/>
                  </svg>
                </div>
                <button className="text-[#444346]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <div className="space-y-1">
                <div className="text-[14px] font-medium text-[#344054]">**** 1233</div>
              </div>
            </div>

            {/* Visa Card 2 */}
            <div className="border border-[#e1e1e1] rounded-[12px] p-4 min-w-[245px] bg-white">
              <div className="flex items-start justify-between mb-5">
                <div className="w-[46px] h-[32px] bg-white border border-[#f2f4f7] rounded-[6px] flex items-center justify-center">
                  <svg width="30" height="10" viewBox="0 0 30 10" fill="none">
                    <path d="M12.4 9.6L14.9 0.4H17.7L15.2 9.6H12.4Z" fill="#00579F"/>
                    <path d="M26.8 0.6C26.3 0.4 25.5 0.2 24.5 0.2C21.8 0.2 19.9 1.6 19.9 3.6C19.9 5.1 21.3 5.9 22.4 6.4C23.5 6.9 23.9 7.2 23.9 7.7C23.9 8.4 23 8.7 22.2 8.7C21.1 8.7 20.5 8.5 19.6 8.1L19.2 7.9L18.8 10C19.4 10.3 20.5 10.5 21.6 10.5C24.5 10.5 26.3 9.1 26.4 6.9C26.4 5.7 25.6 4.8 23.9 4.1C22.9 3.6 22.3 3.3 22.3 2.8C22.3 2.3 22.9 1.8 24.1 1.8C25 1.8 25.7 2 26.2 2.2L26.5 2.3L26.8 0.6Z" fill="#00579F"/>
                    <path d="M28.1 0.4H25.9C25.2 0.4 24.7 0.6 24.4 1.2L20.3 9.6H23.2L23.8 8H27.3L27.6 9.6H30.2L28.1 0.4ZM24.6 6L25.9 2.7L26.7 6H24.6Z" fill="#00579F"/>
                    <path d="M10.5 0.4L7.8 6.7L7.5 5.2C7 3.8 5.6 2.3 4 1.5L6.5 9.6H9.4L13.4 0.4H10.5Z" fill="#00579F"/>
                    <path d="M5.3 0.4H0.9L0.9 0.7C4.2 1.5 6.5 3.6 7.5 5.2L6.4 1.2C6.3 0.6 5.8 0.4 5.3 0.4Z" fill="#FAA61A"/>
                  </svg>
                </div>
                <button className="text-[#444346]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <div className="space-y-1">
                <div className="text-[14px] font-medium text-[#344054]">**** 1233</div>
              </div>
            </div>
          </div>

          <button className="mt-6 flex items-center gap-2 px-4 py-2 bg-white border border-[#eeedfe] rounded-full text-[16px] font-medium text-[#111553] hover:bg-[#f9f9fe] transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Add new payment method
          </button>
        </div>

        {/* Invoice Information and Recipients */}
        <div className="grid grid-cols-2 gap-6">
          {/* Invoice Information */}
          <div className="bg-white rounded-[24px] p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-[24px] font-medium leading-[30px] text-[#111553]">Invoice information</h2>
              <button className="flex items-center gap-2 px-[18px] py-3 rounded-full text-[16px] font-medium text-[#2d37d1] hover:bg-gray-50 transition-colors">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M14.1667 2.49993C14.3856 2.28106 14.6454 2.10744 14.9314 1.98899C15.2173 1.87054 15.5238 1.80957 15.8334 1.80957C16.1429 1.80957 16.4494 1.87054 16.7353 1.98899C17.0213 2.10744 17.2811 2.28106 17.5 2.49993C17.7189 2.7188 17.8925 2.97863 18.011 3.2646C18.1294 3.55057 18.1904 3.85706 18.1904 4.16659C18.1904 4.47612 18.1294 4.78262 18.011 5.06859C17.8925 5.35455 17.7189 5.61439 17.5 5.83326L6.25002 17.0833L1.66669 18.3333L2.91669 13.7499L14.1667 2.49993Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Edit
              </button>
            </div>
            
            <div className="border border-[#e1e1e1] rounded-[20px] p-6 space-y-4">
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 8C9.65685 8 11 6.65685 11 5C11 3.34315 9.65685 2 8 2C6.34315 2 5 3.34315 5 5C5 6.65685 6.34315 8 8 8Z" stroke="#444346" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.3333 14C13.3333 12.1591 10.9455 10.6667 8 10.6667C5.05448 10.6667 2.66667 12.1591 2.66667 14" stroke="#444346" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-[16px] font-medium text-[#444346]">Gustavo Mello</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.66667 2.66666H13.3333C14.0667 2.66666 14.6667 3.26666 14.6667 3.99999V12C14.6667 12.7333 14.0667 13.3333 13.3333 13.3333H2.66667C1.93334 13.3333 1.33334 12.7333 1.33334 12V3.99999C1.33334 3.26666 1.93334 2.66666 2.66667 2.66666Z" stroke="#444346" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14.6667 4L8 8.66667L1.33334 4" stroke="#444346" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-[16px] font-medium text-[#444346]">gustavo@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 5.33334H14V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33334Z" stroke="#444346" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 5.33334V4.00001C14 3.64639 13.8595 3.30724 13.6095 3.05719C13.3594 2.80715 13.0203 2.66667 12.6667 2.66667H3.33333C2.97971 2.66667 2.64057 2.80715 2.39052 3.05719C2.14048 3.30724 2 3.64639 2 4.00001V5.33334" stroke="#444346" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-[16px] font-medium text-[#444346]">123 423 123 <span className="text-[#9f9ea3]">(VAT Number)</span></span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 7.33334C2 6.8029 2.21071 6.29419 2.58579 5.91912C2.96086 5.54405 3.46957 5.33334 4 5.33334H12C12.5304 5.33334 13.0391 5.54405 13.4142 5.91912C13.7893 6.29419 14 6.8029 14 7.33334V12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14H4C3.46957 14 2.96086 13.7893 2.58579 13.4142C2.21071 13.0391 2 12.5304 2 12V7.33334Z" stroke="#444346" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5.33334 5.33334V4.00001C5.33334 3.29277 5.61429 2.61449 6.11438 2.1144C6.61448 1.6143 7.29276 1.33334 8 1.33334C8.70725 1.33334 9.38553 1.6143 9.88562 2.1144C10.3857 2.61449 10.6667 3.29277 10.6667 4.00001V5.33334" stroke="#444346" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-[16px] font-medium text-[#444346]">Street 18, 22 Apart</span>
              </div>
            </div>
          </div>

          {/* Invoice Recipients */}
          <div className="bg-white rounded-[24px] p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-[24px] font-medium leading-[30px] text-[#111553]">Invoice recipients</h2>
              <button className="flex items-center gap-2 px-[18px] py-3 rounded-full text-[16px] font-medium text-[#2d37d1] hover:bg-gray-50 transition-colors">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M14.1667 2.49993C14.3856 2.28106 14.6454 2.10744 14.9314 1.98899C15.2173 1.87054 15.5238 1.80957 15.8334 1.80957C16.1429 1.80957 16.4494 1.87054 16.7353 1.98899C17.0213 2.10744 17.2811 2.28106 17.5 2.49993C17.7189 2.7188 17.8925 2.97863 18.011 3.2646C18.1294 3.55057 18.1904 3.85706 18.1904 4.16659C18.1904 4.47612 18.1294 4.78262 18.011 5.06859C17.8925 5.35455 17.7189 5.61439 17.5 5.83326L6.25002 17.0833L1.66669 18.3333L2.91669 13.7499L14.1667 2.49993Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Edit
              </button>
            </div>
            
            <div className="border border-[#e1e1e1] rounded-[20px] p-4 space-y-2">
              {/* Recipient 1 */}
              <div className="bg-[#eeedfe] rounded-[8px] p-3">
                <div className="text-[12px] font-normal text-[#7169ff] mb-2">Recipient 1</div>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-1">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 8C9.65685 8 11 6.65685 11 5C11 3.34315 9.65685 2 8 2C6.34315 2 5 3.34315 5 5C5 6.65685 6.34315 8 8 8Z" stroke="#444346" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M13.3333 14C13.3333 12.1591 10.9455 10.6667 8 10.6667C5.05448 10.6667 2.66667 12.1591 2.66667 14" stroke="#444346" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-[14px] font-medium text-[#444346]">Samir Vllaco</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M2.66667 2.66666H13.3333C14.0667 2.66666 14.6667 3.26666 14.6667 3.99999V12C14.6667 12.7333 14.0667 13.3333 13.3333 13.3333H2.66667C1.93334 13.3333 1.33334 12.7333 1.33334 12V3.99999C1.33334 3.26666 1.93334 2.66666 2.66667 2.66666Z" stroke="#444346" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14.6667 4L8 8.66667L1.33334 4" stroke="#444346" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-[14px] font-medium text-[#444346]">gustavo@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M14.6667 11.28V13.28C14.6675 13.4657 14.6294 13.6494 14.555 13.8195C14.4807 13.9897 14.3716 14.1424 14.2348 14.2679C14.098 14.3934 13.9367 14.489 13.7612 14.5485C13.5857 14.608 13.3997 14.6301 13.2147 14.6133C11.1621 14.3904 9.19137 13.6893 7.46004 12.5667C5.84926 11.5431 4.48359 10.1774 3.46004 8.56665C2.33336 6.82745 1.63213 4.84731 1.41337 2.78665C1.39671 2.60221 1.41862 2.41674 1.4777 2.24172C1.53679 2.0667 1.63175 1.90573 1.75655 1.76899C1.88134 1.63224 2.03324 1.52299 2.20256 1.44818C2.37189 1.37336 2.55493 1.33463 2.74004 1.33332H4.74004C5.06357 1.33013 5.37723 1.4447 5.62254 1.65568C5.86786 1.86667 6.02809 2.15963 6.07337 2.47998C6.15779 3.12003 6.31434 3.74847 6.54004 4.35332C6.62973 4.59193 6.64915 4.85126 6.59597 5.10058C6.5428 5.34989 6.41928 5.57873 6.24004 5.75998L5.39337 6.60665C6.34241 8.27568 7.72434 9.65761 9.39337 10.6067L10.24 9.75998C10.4213 9.58074 10.6501 9.45722 10.8994 9.40405C11.1488 9.35088 11.4081 9.37029 11.6467 9.45998C12.2516 9.68568 12.88 9.84224 13.52 9.92665C13.8439 9.97234 14.1396 10.1355 14.3511 10.385C14.5625 10.6345 14.6748 10.953 14.6667 11.28Z" stroke="#444346" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-[14px] font-medium text-[#444346]">+383 123 4567</span>
                  </div>
                </div>
              </div>

              {/* Recipient 2 */}
              <div className="bg-[#eeedfe] rounded-[8px] p-3">
                <div className="text-[12px] font-normal text-[#7169ff] mb-2">Recipient 2</div>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-1">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 8C9.65685 8 11 6.65685 11 5C11 3.34315 9.65685 2 8 2C6.34315 2 5 3.34315 5 5C5 6.65685 6.34315 8 8 8Z" stroke="#444346" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M13.3333 14C13.3333 12.1591 10.9455 10.6667 8 10.6667C5.05448 10.6667 2.66667 12.1591 2.66667 14" stroke="#444346" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-[14px] font-medium text-[#444346]">John Smith</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M2.66667 2.66666H13.3333C14.0667 2.66666 14.6667 3.26666 14.6667 3.99999V12C14.6667 12.7333 14.0667 13.3333 13.3333 13.3333H2.66667C1.93334 13.3333 1.33334 12.7333 1.33334 12V3.99999C1.33334 3.26666 1.93334 2.66666 2.66667 2.66666Z" stroke="#444346" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14.6667 4L8 8.66667L1.33334 4" stroke="#444346" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-[14px] font-medium text-[#444346]">john@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M14.6667 11.28V13.28C14.6675 13.4657 14.6294 13.6494 14.555 13.8195C14.4807 13.9897 14.3716 14.1424 14.2348 14.2679C14.098 14.3934 13.9367 14.489 13.7612 14.5485C13.5857 14.608 13.3997 14.6301 13.2147 14.6133C11.1621 14.3904 9.19137 13.6893 7.46004 12.5667C5.84926 11.5431 4.48359 10.1774 3.46004 8.56665C2.33336 6.82745 1.63213 4.84731 1.41337 2.78665C1.39671 2.60221 1.41862 2.41674 1.4777 2.24172C1.53679 2.0667 1.63175 1.90573 1.75655 1.76899C1.88134 1.63224 2.03324 1.52299 2.20256 1.44818C2.37189 1.37336 2.55493 1.33463 2.74004 1.33332H4.74004C5.06357 1.33013 5.37723 1.4447 5.62254 1.65568C5.86786 1.86667 6.02809 2.15963 6.07337 2.47998C6.15779 3.12003 6.31434 3.74847 6.54004 4.35332C6.62973 4.59193 6.64915 4.85126 6.59597 5.10058C6.5428 5.34989 6.41928 5.57873 6.24004 5.75998L5.39337 6.60665C6.34241 8.27568 7.72434 9.65761 9.39337 10.6067L10.24 9.75998C10.4213 9.58074 10.6501 9.45722 10.8994 9.40405C11.1488 9.35088 11.4081 9.37029 11.6467 9.45998C12.2516 9.68568 12.88 9.84224 13.52 9.92665C13.8439 9.97234 14.1396 10.1355 14.3511 10.385C14.5625 10.6345 14.6748 10.953 14.6667 11.28Z" stroke="#444346" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-[14px] font-medium text-[#444346]">+383 123 4567</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Invoices Section */}
        <div className="bg-white rounded-[24px] p-8">
          <h2 className="text-[24px] font-medium leading-[30px] text-[#111553] mb-6">Invoices</h2>
          
          <div className="space-y-0">
            {/* Invoice 1 */}
            <div className="flex items-center justify-between py-4 border-b border-[#e1e1e1]">
              <div className="flex items-center gap-2 w-[175px]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9L13 2Z" stroke="#444346" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13 2V9H20" stroke="#444346" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-[16px] font-normal text-[#444346]">inv-no #241241</span>
              </div>
              <span className="text-[16px] font-normal text-[#444346] w-[240px]">January 2, 2027 12:47</span>
              <span className="text-[16px] font-normal text-[#444346] w-[140px]">$2487.00</span>
              <div className="w-[110px]">
                <span className="inline-flex items-center px-3 py-1 bg-[#edfcf3] rounded-full text-[14px] font-normal text-[#097347]">
                  Subscription
                </span>
              </div>
              <button className="flex items-center gap-2 px-[18px] py-3 rounded-full text-[16px] font-medium text-[#2d37d1] hover:bg-gray-50 transition-colors w-[139px]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5.83334 8.33334L10 12.5L14.1667 8.33334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 12.5V2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Download
              </button>
            </div>

            {/* Invoice 2 */}
            <div className="flex items-center justify-between py-4 border-b border-[#e1e1e1]">
              <div className="flex items-center gap-2 w-[175px]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9L13 2Z" stroke="#444346" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13 2V9H20" stroke="#444346" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-[16px] font-normal text-[#444346]">inv-no #241241</span>
              </div>
              <span className="text-[16px] font-normal text-[#444346] w-[240px]">January 2, 2027 12:47</span>
              <span className="text-[16px] font-normal text-[#444346] w-[140px]">$2487.00</span>
              <div className="w-[110px]">
                <span className="inline-flex items-center px-3 py-1 bg-[#f2f2f2] rounded-full text-[14px] font-normal text-[#444346]">
                  Prorate
                </span>
              </div>
              <button className="flex items-center gap-2 px-[18px] py-3 rounded-full text-[16px] font-medium text-[#2d37d1] hover:bg-gray-50 transition-colors w-[139px]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5.83334 8.33334L10 12.5L14.1667 8.33334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 12.5V2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Download
              </button>
            </div>

            {/* Invoice 3 */}
            <div className="flex items-center justify-between py-4 border-b border-[#e1e1e1]">
              <div className="flex items-center gap-2 w-[175px]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9L13 2Z" stroke="#444346" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13 2V9H20" stroke="#444346" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-[16px] font-normal text-[#444346]">inv-no #241241</span>
              </div>
              <span className="text-[16px] font-normal text-[#444346] w-[240px]">January 2, 2027 12:47</span>
              <span className="text-[16px] font-normal text-[#444346] w-[140px]">$2487.00</span>
              <div className="w-[110px]">
                <span className="inline-flex items-center px-3 py-1 bg-[#fef3f2] rounded-full text-[14px] font-normal text-[#bb241a]">
                  Unsuccessful
                </span>
              </div>
              <button className="flex items-center gap-2 px-[18px] py-3 rounded-full text-[16px] font-medium text-[#2d37d1] hover:bg-gray-50 transition-colors w-[139px]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5.83334 8.33334L10 12.5L14.1667 8.33334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 12.5V2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Download
              </button>
            </div>

            {/* Invoice 4 */}
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center gap-2 w-[175px]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9L13 2Z" stroke="#444346" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13 2V9H20" stroke="#444346" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-[16px] font-normal text-[#444346]">inv-no #241241</span>
              </div>
              <span className="text-[16px] font-normal text-[#444346] w-[240px]">January 2, 2027 12:47</span>
              <span className="text-[16px] font-normal text-[#444346] w-[140px]">$2487.00</span>
              <div className="w-[110px]">
                <span className="inline-flex items-center px-3 py-1 bg-[#edfcf3] rounded-full text-[14px] font-normal text-[#097347]">
                  Subscription
                </span>
              </div>
              <button className="flex items-center gap-2 px-[18px] py-3 rounded-full text-[16px] font-medium text-[#2d37d1] hover:bg-gray-50 transition-colors w-[139px]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5.83334 8.33334L10 12.5L14.1667 8.33334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 12.5V2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Download
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
