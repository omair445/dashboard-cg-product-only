'use client';

import { useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/atoms/Icon';
import { cn } from '@/lib/utils';

const AD_SPEND_STEPS = ['$5K', '$10K', '$15K', '$20K', '$30K', '$40K', '$50K', '$75K', '$100K', '$100K+'];
const BILLING_OPTIONS = [
  { id: 'monthly', label: 'Pay monthly' },
  { id: 'quarterly', label: 'Pay quarterly', save: '10%' },
  { id: 'annually', label: 'Pay yearly', save: '20%' },
] as const;

type PlanFeature = { label: string; tooltip: string };

const PLANS: Array<{
  id: string;
  name: string;
  description: string;
  price?: string;
  period?: string;
  priceLabel?: string;
  billingLine: string;
  keyCapacity?: string;
  cta: string;
  buildsOn?: string;
  features: PlanFeature[];
  recommended?: boolean;
  customNote?: string;
}> = [
  {
    id: 'lite',
    name: 'Lite',
    description: 'Essential click fraud protection for single-site businesses',
    price: '$74',
    period: '/mo',
    billingLine: 'Billed monthly (Pay yearly, get 2 months free)',
    keyCapacity: 'Up to 5k ad spend',
    cta: 'Start free trial',
    features: [
      { label: 'Protection for Meta, Microsoft and Google Ads', tooltip: 'Block invalid clicks across Meta, Microsoft and Google ad platforms.' },
      { label: 'Single website', tooltip: 'Protect one website under this plan.' },
      { label: 'Basic reporting', tooltip: 'See key metrics and click quality at a glance.' },
      { label: 'Click & behavior tracking', tooltip: 'Track clicks and visitor behavior to detect fraud.' },
      { label: 'Basic protection controls', tooltip: 'Adjust protection levels to match your risk tolerance.' },
    ],
  },
  {
    id: 'standard',
    name: 'Standard',
    description: 'Advanced protection to safeguard growing ad budgets',
    price: '$119',
    period: '/mo',
    billingLine: 'Billed monthly (Pay yearly, get 2 months free)',
    keyCapacity: 'Up to 50k ad spend',
    cta: 'Start free trial',
    buildsOn: 'Lite',
    features: [
      { label: 'Up to 3 websites', tooltip: 'Protect up to three sites under one plan.' },
      { label: 'Advanced reporting', tooltip: 'Deeper insights and export options.' },
      { label: 'Up to 3 custom protection rules', tooltip: 'Define custom rules for your traffic.' },
      { label: 'Blacklist management', tooltip: 'Block specific IPs, regions or segments.' },
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'Full-stack click protection for maximizing ROAS on high-volume traffic',
    price: '$159',
    period: '/mo',
    billingLine: 'Billed monthly (Pay yearly, get 2 months free)',
    keyCapacity: 'Up to 100k ad spend',
    cta: 'Start free trial',
    buildsOn: 'Standard',
    features: [
      { label: 'Unlimited websites', tooltip: 'Protect as many sites as you need.' },
      { label: 'Comprehensive reporting', tooltip: 'Full analytics and custom reports.' },
      { label: 'Conversion tracking', tooltip: 'Track the full funnel to optimize for real conversions.' },
      { label: 'Server-side tracking', tooltip: 'More accurate, fraud-resistant conversion data.' },
      { label: 'Unlimited custom protection rules', tooltip: 'No limit on custom rules.' },
    ],
  },
];

const MAX_AD_SPEND_INDEX = AD_SPEND_STEPS.length - 1;

function FeatureItem({ label, tooltip }: { label: string; tooltip: string }) {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <div className="relative">
      <span
        className="cursor-default border-b border-dotted border-[#d4d4d4] text-[#111553] text-sm"
        style={{ lineHeight: '20px' }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {label}
      </span>
      {showTooltip && (
        <div
          className="absolute z-20 left-0 bottom-full mb-1 px-3 py-2 bg-[#29282a] text-white text-sm rounded-lg shadow-lg whitespace-normal max-w-[240px]"
          role="tooltip"
        >
          {tooltip}
        </div>
      )}
    </div>
  );
}

const CURRENCIES = [
  { code: 'USD', flag: '🇺🇸', label: 'USD', symbol: '$' },
  { code: 'EUR', flag: '🇪🇺', label: 'EUR', symbol: '€' },
  { code: 'GBP', flag: '🇬🇧', label: 'GBP', symbol: '£' },
] as const;

export default function SelectPlanPage() {
  const [billing, setBilling] = useState<(typeof BILLING_OPTIONS)[number]['id']>('annually');
  const [adSpendIndex, setAdSpendIndex] = useState(3); // $20K
  const [activeCardIndex, setActiveCardIndex] = useState(1);
  const [currency, setCurrency] = useState<(typeof CURRENCIES)[number]['code']>('USD');
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [customAdSpend, setCustomAdSpend] = useState('');
  const sliderTrackRef = useRef<HTMLDivElement>(null);

  // Determine which plan should be recommended based on ad spend
  const getRecommendedPlanId = useCallback(() => {
    // Index 0 = $5K -> Lite
    if (adSpendIndex === 0) return 'lite';
    // Index 1-6 = $10K to $50K -> Standard
    if (adSpendIndex >= 1 && adSpendIndex <= 6) return 'standard';
    // Index 7+ = $75K to $100K+ -> Pro
    return 'pro';
  }, [adSpendIndex]);

  const recommendedPlanId = getRecommendedPlanId();
  const isCustomProMode = adSpendIndex === MAX_AD_SPEND_INDEX; // $100K+

  const handleTrackClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const track = sliderTrackRef.current;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const pct = Math.max(0, Math.min(1, x / rect.width));
      const index = Math.round(pct * MAX_AD_SPEND_INDEX);
      setAdSpendIndex(index);
    },
    []
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E8E7FF] via-[#F5F5FF] to-[#E1E0FF] flex flex-col">
      {/* Header */}
      <header className="w-full px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <svg width="156" height="24" viewBox="0 0 156 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.92702 8.24797L9.73681 7.73485C9.87036 7.69487 10.0841 7.69487 10.2109 7.73485L12.0207 8.24797C12.1543 8.28795 12.368 8.31461 12.5082 8.31461H14.9858C15.1194 8.31461 15.2329 8.20132 15.2329 8.06804V6.43539C15.2329 6.30211 15.1261 6.15551 14.9925 6.12218L10.2109 4.77609C10.0774 4.7361 9.86368 4.7361 9.73681 4.77609L4.95526 6.12218C4.8217 6.16217 4.71484 6.30211 4.71484 6.43539V15.2251C4.71484 15.3584 4.80834 15.5316 4.92855 15.5983L9.76351 18.5037C9.87704 18.577 10.0707 18.577 10.1909 18.5037L15.0258 15.5983C15.1461 15.525 15.2396 15.3584 15.2396 15.2251V14.5454C15.2396 14.4121 15.1261 14.2987 14.9925 14.2987H12.5149C12.3813 14.2987 12.1743 14.3587 12.0541 14.4254L10.1909 15.5383C10.0707 15.6116 9.88372 15.6116 9.76351 15.5383L7.90032 14.4254C7.78011 14.3521 7.68662 14.1855 7.68662 14.0522V8.56118C7.68662 8.4279 7.79347 8.28128 7.92702 8.24797Z" fill="#111553"/>
            <path d="M19.5614 2.63057L10.3589 0.0449812C10.1519 -0.0149937 9.80462 -0.0149937 9.59761 0.0449812L0.388466 2.63057C0.181444 2.69055 0.0078125 2.91712 0.0078125 3.13036V17.7243C0.0078125 17.9442 0.16141 18.2108 0.348397 18.324L9.63767 23.915C9.82466 24.0283 10.1319 24.0283 10.3189 23.915L19.6081 18.324C19.7951 18.2108 19.9487 17.9442 19.9487 17.7243V10.2274C19.9487 10.0075 19.7685 9.83423 19.5547 9.83423H10.379C10.1586 9.83423 9.98494 10.0142 9.98494 10.2274V12.4064C9.98494 12.6264 10.1652 12.7997 10.379 12.7997H16.5762C16.7966 12.7997 16.9702 12.9796 16.9702 13.1929V16.045C16.9702 16.2649 16.8166 16.5314 16.6297 16.6448L10.3189 20.4431C10.1319 20.5565 9.82466 20.5565 9.63767 20.4431L3.32684 16.6448C3.13985 16.5314 2.98626 16.2649 2.98626 16.045V5.26947C2.98626 5.04956 3.15989 4.82299 3.36692 4.76301L9.59761 3.00375C9.80462 2.94377 10.1519 2.94377 10.3589 3.00375L16.5896 4.76301C16.7966 4.82299 16.9702 5.04956 16.9702 5.26947V7.91504C16.9702 8.13494 17.1506 8.3082 17.3643 8.3082H19.5481C19.7684 8.3082 19.942 8.12827 19.942 7.91504V3.13036C19.942 2.91046 19.7684 2.68389 19.5614 2.63057Z" fill="#111553"/>
            <path d="M36.5559 17.6845C33.1368 17.6845 31.0265 15.1123 31.0265 11.9469C31.0265 8.78159 33.1301 6.16268 36.4758 6.16268C38.0385 6.16268 39.3274 6.70911 40.3692 7.79533L42.82 5.66955C41.2574 3.81699 39.3007 2.95068 36.4758 2.95068C31.1199 2.95068 27.4336 6.98234 27.4336 11.9536C27.4336 16.9248 31.327 20.9032 36.4758 20.9032C39.501 20.9032 41.7315 19.7437 43.0404 18.1577L40.5094 16.0052C39.4943 17.1181 38.2321 17.6845 36.5426 17.6845H36.5559Z" fill="#111553"/>
            <path d="M47.5625 2.53125H44.2168V20.5837H47.5625V2.53125Z" fill="#111553"/>
            <path d="M52.8848 7.72266H49.5391V20.5839H52.8848V7.72266Z" fill="#111553"/>
            <path d="M51.2035 2.72363C50.0616 2.72363 49.1934 3.61659 49.1934 4.67615C49.1934 5.73571 50.0616 6.65532 51.2035 6.65532C52.3455 6.65532 53.2137 5.78902 53.2137 4.67615C53.2137 3.56328 52.3723 2.72363 51.2035 2.72363Z" fill="#111553"/>
            <path d="M61.239 10.4407C62.3809 10.4407 63.3693 11.0071 63.9636 11.9L66.5414 9.80092C65.4529 8.29488 63.543 7.37527 61.1855 7.40193C57.2454 7.42858 54.3672 10.4207 54.3672 14.1524C54.3672 17.8842 57.3189 20.903 61.0119 20.903C63.543 20.903 65.326 19.99 66.5414 18.4306L64.1105 16.3315C63.4427 17.2245 62.6013 17.8643 61.3124 17.8643C59.1821 17.8643 57.7196 16.1583 57.7196 14.1524C57.7196 12.1466 59.1087 10.4407 61.239 10.4407Z" fill="#111553"/>
            <path d="M80.7948 7.72242H76.04L71.2051 12.9136V2.53125H67.8594V20.5837H71.2051V14.4729L76.3807 20.5837H80.8216L74.7245 13.7066L80.7948 7.72242Z" fill="#111553"/>
            <path d="M89.3399 10.6881V13.8068L95.0431 13.7602C94.649 16.4524 92.9127 17.7385 90.1613 17.7385C86.8156 17.7385 84.712 15.1196 84.712 11.9543C84.712 8.78891 86.8156 6.17 90.1613 6.17C91.7707 6.17 93.113 6.78974 94.0547 7.80266L96.5322 5.67688C95.0964 3.92428 93.1131 2.95801 90.1613 2.95801C85.0059 2.95801 81.1191 6.98966 81.1191 11.9609C81.1191 16.9321 85.0125 20.9105 90.1613 20.9105C95.3101 20.9105 98.5157 17.4253 98.5157 12.6273C98.5157 12.0809 98.4689 11.2146 98.3888 10.7014H89.3466L89.3399 10.6881Z" fill="#111553"/>
            <path d="M108.6 14.7731C108.6 16.9989 107.338 17.965 105.922 17.965C104.26 17.965 103.345 16.9989 103.345 14.7731V7.72266H99.999V15.5861C99.999 18.8247 102.129 20.8772 104.907 20.8772C106.917 20.8772 108.08 20.1375 108.701 18.6514V20.5773H111.946V7.72266H108.6V14.7731Z" fill="#111553"/>
            <path d="M123.894 9.74729C123.2 8.3612 122.038 7.44824 119.807 7.44824C116.261 7.44824 113.437 10.487 113.437 14.1987C113.437 17.9105 116.261 20.9026 119.807 20.9026C122.111 20.9026 123.28 19.9363 123.968 18.477V20.5761H127.214V7.72147H123.894V9.74729ZM120.348 17.8839C118.218 17.8839 116.782 16.1313 116.782 14.1721C116.782 12.2129 118.218 10.4603 120.348 10.4603C122.479 10.4603 123.968 12.1929 123.968 14.1921C123.968 16.1913 122.552 17.8772 120.348 17.8772V17.8839Z" fill="#111553"/>
            <path d="M132.442 10.1674V7.72172H129.196V20.5831H132.542V14.0057C132.542 11.8533 134.031 10.5672 135.961 10.5672H136.435V7.42851C134.205 7.3019 132.889 8.32147 132.448 10.174L132.442 10.1674Z" fill="#111553"/>
            <path d="M146.866 9.7016C146.172 8.34216 145.01 7.44921 142.799 7.44921C139.253 7.44921 136.428 10.4879 136.428 14.1997C136.428 17.9115 139.253 20.9037 142.799 20.9037C145.102 20.9037 146.272 19.9374 146.959 18.4779V20.577H150.205V2.53125H146.859V9.7016H146.866ZM143.347 17.8848C141.216 17.8848 139.78 16.1322 139.78 14.1731C139.78 12.2139 141.216 10.4613 143.347 10.4613C145.477 10.4613 146.966 12.1939 146.966 14.193C146.966 16.1922 145.551 17.8782 143.347 17.8782V17.8848Z" fill="#111553"/>
            <path d="M154.325 18.0049C153.39 18.0049 152.649 18.7313 152.649 19.6309C152.649 20.5305 153.398 21.2769 154.325 21.2769C155.253 21.2769 155.995 20.5505 155.995 19.6309C155.995 18.7112 155.267 18.0049 154.325 18.0049ZM154.332 20.9303C153.598 20.9303 153.063 20.3572 153.063 19.6309C153.063 18.9045 153.598 18.3314 154.325 18.3314C155.053 18.3314 155.574 18.9178 155.574 19.6376C155.574 20.3572 155.047 20.9237 154.332 20.9237V20.9303Z" fill="#111553"/>
            <path d="M154.699 19.6765V19.6565C154.899 19.5966 155.04 19.4566 155.04 19.2766C155.04 19.1167 154.974 18.9902 154.88 18.9169C154.76 18.8502 154.619 18.7969 154.312 18.7969C154.045 18.7969 153.838 18.8168 153.685 18.8436V20.4695H154.065V19.8165H154.245C154.453 19.8165 154.553 19.8965 154.586 20.0763C154.633 20.2629 154.666 20.4161 154.713 20.4761H155.12C155.08 20.4161 155.054 20.3162 154.999 20.0697C154.953 19.8498 154.86 19.7298 154.699 19.6699V19.6765ZM154.251 19.5632H154.071V19.0968C154.112 19.0901 154.178 19.0768 154.278 19.0768C154.519 19.0768 154.625 19.1767 154.625 19.3233C154.625 19.4899 154.459 19.5632 154.245 19.5632H154.251Z" fill="#111553"/>
          </svg>
        </Link>
      </header>

      {/* Main content container - transparent background */}
      <main className="flex-1 flex flex-col items-center px-4 pb-12 pt-2 sm:px-6">
        <div className="w-full max-w-[1200px] bg-transparent rounded-[24px] overflow-hidden">
          {/* Main page title - centered, large */}
          <div className="pt-0 pb-2 px-6 text-center">
            <h1
              className="text-[#111553] font-semibold tracking-tight"
              style={{ fontSize: '36px', lineHeight: '44px' }}
            >
              Choose the right plan for your team
            </h1>
            {/* 7-day free trial badge */}
            <div className="flex items-center justify-center gap-2 mt-3 mb-2 text-[#111553]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <path d="M8 2V5M16 2V5M3 9H21M5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-sm font-medium">7-day free trial</span>
            </div>
          </div>

          {/* Kit-style header: ad spend question + slider row with billing on right */}
          <div className="pt-6 pb-8 px-6">
            <h2
              className="text-[#111553] font-semibold tracking-tight mb-3 text-left w-full lg:max-w-[calc((100%-3rem)/3)]"
              style={{ fontSize: '24px', lineHeight: '32px' }}
            >
              What is your monthly ad spend?
            </h2>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
              {/* Slider block - width matches one card column for alignment */}
              <div className="w-full lg:max-w-[calc((100%-3rem)/3)] shrink-0">
                <div className="flex items-baseline justify-between text-sm text-[#111553] mb-1">
                  <span>{AD_SPEND_STEPS[0]}</span>
                  <span>{AD_SPEND_STEPS[MAX_AD_SPEND_INDEX]}</span>
                </div>
                <div className="relative pt-3 pb-2 overflow-visible">
                  {/* Tooltip above thumb (Kit-style blue bubble with arrow) */}
                  <div
                    className="absolute z-10 top-0 overflow-visible"
                    style={{
                      left: `calc(${(adSpendIndex / MAX_AD_SPEND_INDEX) * 100}% - 0px)`,
                      transform: 'translate(-50%, -100%)',
                    }}
                  >
                    <div className="relative bg-primary-600 text-white text-sm font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-md overflow-visible">
                      {AD_SPEND_STEPS[adSpendIndex]}
                      {/* Speech bubble arrow pointing down to thumb */}
                      <div
                        className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-2.5 h-2.5 bg-primary-600 rotate-45"
                        aria-hidden
                      />
                    </div>
                  </div>

                  {/* Track + thumb */}
                  <div
                    ref={sliderTrackRef}
                    role="slider"
                    aria-valuemin={0}
                    aria-valuemax={MAX_AD_SPEND_INDEX}
                    aria-valuenow={adSpendIndex}
                    aria-valuetext={AD_SPEND_STEPS[adSpendIndex]}
                    tabIndex={0}
                    onClick={handleTrackClick}
                    onKeyDown={(e) => {
                      if (e.key === 'ArrowLeft') setAdSpendIndex((i) => Math.max(0, i - 1));
                      if (e.key === 'ArrowRight') setAdSpendIndex((i) => Math.min(MAX_AD_SPEND_INDEX, i + 1));
                    }}
                    className="relative h-3 rounded-full bg-[#e1e1e1] cursor-pointer overflow-visible"
                  >
                    {/* Filled portion */}
                    <div
                      className="absolute inset-y-0 left-0 rounded-full bg-primary-600 transition-all duration-150"
                      style={{ width: `${(adSpendIndex / MAX_AD_SPEND_INDEX) * 100}%` }}
                    />
                    {/* Thumb: white circle with primary border + grip icon */}
                    <div
                      className="absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-2 border-primary-600 shadow-sm flex items-center justify-center cursor-grab active:cursor-grabbing"
                      style={{ left: `calc(${(adSpendIndex / MAX_AD_SPEND_INDEX) * 100}% - 12px)` }}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        const move = (e: MouseEvent) => {
                          const track = sliderTrackRef.current;
                          if (!track) return;
                          const rect = track.getBoundingClientRect();
                          const x = e.clientX - rect.left;
                          const pct = Math.max(0, Math.min(1, x / rect.width));
                          const index = Math.round(pct * MAX_AD_SPEND_INDEX);
                          setAdSpendIndex(index);
                        };
                        window.addEventListener('mousemove', move);
                        const up = () => {
                          window.removeEventListener('mousemove', move);
                          window.removeEventListener('mouseup', up);
                        };
                        window.addEventListener('mouseup', up);
                      }}
                    >
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="text-[#111553]" aria-hidden>
                        <path d="M2 4H10M4 2L2 4L4 6M8 2L10 4L8 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side: Currency selector + Billing frequency selector */}
              <div className="flex shrink-0 items-end gap-3">
                {/* Currency selector - with bottom padding to match billing selector alignment */}
                <div className="relative pb-3">
                  <div className="flex items-center border-2 border-primary-200 rounded-full bg-white p-1 h-[56px]">
                    <button
                      type="button"
                      onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
                      className="flex items-center gap-2 px-5 py-3 bg-white rounded-full hover:bg-primary-50 transition-colors h-full"
                    >
                    <span className="text-2xl">{CURRENCIES.find(c => c.code === currency)?.flag}</span>
                    <span className="text-sm font-medium text-[#111553]">{currency}</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      className={cn("transition-transform", showCurrencyDropdown && "rotate-180")}
                    >
                      <path d="M6 9L12 15L18 9" stroke="#111553" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    </button>
                  </div>
                  
                  {/* Dropdown */}
                  {showCurrencyDropdown && (
                    <>
                      <div
                        className="fixed inset-0 z-10"
                        onClick={() => setShowCurrencyDropdown(false)}
                      />
                      <div className="absolute top-full mt-2 left-0 bg-white border-2 border-primary-200 rounded-2xl shadow-lg overflow-hidden z-20 min-w-[140px]">
                        {CURRENCIES.map((curr) => (
                          <button
                            key={curr.code}
                            type="button"
                            onClick={() => {
                              setCurrency(curr.code);
                              setShowCurrencyDropdown(false);
                            }}
                            className={cn(
                              "w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors",
                              currency === curr.code
                                ? "bg-primary-50 text-[#111553]"
                                : "text-[#111553] hover:bg-gray-50"
                            )}
                          >
                            <span className="text-2xl">{curr.flag}</span>
                            <span>{curr.label}</span>
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Billing frequency selector - rounded pill with overlapping tags */}
                <div className="relative w-[420px] pb-3">
                  <div className="flex rounded-full border-2 border-primary-200 overflow-hidden bg-white p-1 h-[56px]">
                    {BILLING_OPTIONS.map((opt, i) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setBilling(opt.id)}
                        className={cn(
                          'flex-1 px-5 py-3 text-sm font-medium transition-all rounded-full whitespace-nowrap',
                          billing === opt.id
                            ? 'bg-gradient-to-b from-[#6B63FF] to-[#554BFD] text-white shadow-sm'
                            : 'bg-transparent text-[#111553] hover:bg-primary-50'
                        )}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                  {/* Discount tags - overlapping the bottom of buttons */}
                  <div className="absolute bottom-0 left-0 right-0 flex">
                    <div className="flex-1" />
                    <div className="flex-1 flex justify-center">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#EEFF9D] border border-[#bae100] text-[#111553] text-xs font-semibold shadow-sm">
                        save 10%
                      </span>
                    </div>
                    <div className="flex-1 flex justify-center">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#EEFF9D] border border-[#bae100] text-[#111553] text-xs font-semibold shadow-sm">
                        save 20%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing cards - Kit-style hierarchy and styling */}
          <div className="px-4 sm:px-6 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PLANS.map((plan) => {
                const isRecommended = plan.id === recommendedPlanId;
                const isProPlan = plan.id === 'pro';
                
                // Disable logic based on ad spend
                const isLitePlan = plan.id === 'lite';
                const isStandardPlan = plan.id === 'standard';
                const adSpendValue = AD_SPEND_STEPS[adSpendIndex];
                
                // Disable Lite if ad spend > $5K (index > 0)
                const liteShouldDisable = isLitePlan && adSpendIndex > 0;
                // Disable Standard if ad spend > $50K (index > 6)
                const standardShouldDisable = isStandardPlan && adSpendIndex > 6;
                
                const shouldDisable = isCustomProMode && (plan.id === 'lite' || plan.id === 'standard') || liteShouldDisable || standardShouldDisable;
                
                // Override plan details for Custom Pro mode
                const displayName = isCustomProMode && isProPlan ? 'Custom Pro' : plan.name;
                const displayDescription = isCustomProMode && isProPlan 
                  ? 'Flexible solutions for high-volume advertisers and agencies' 
                  : plan.description;
                
                // Get current currency symbol
                const currencySymbol = CURRENCIES.find(c => c.code === currency)?.symbol || '$';
                
                // Calculate pricing based on billing frequency
                const basePrice = plan.price ? parseInt(plan.price.replace('$', '')) : 0;
                let displayPrice = basePrice;
                let billingTotal = 0;
                let savingsAmount = 0;
                let billingText = '';
                
                if (basePrice > 0) {
                  if (billing === 'quarterly') {
                    displayPrice = Math.round(basePrice * 0.9); // 10% off
                    billingTotal = displayPrice * 3;
                    savingsAmount = (basePrice * 3) - billingTotal;
                    billingText = `${currencySymbol}${billingTotal.toLocaleString()} billed quarterly (Save ${currencySymbol}${savingsAmount} per quarter)`;
                  } else if (billing === 'annually') {
                    displayPrice = Math.round(basePrice * 0.8); // 20% off
                    billingTotal = displayPrice * 12;
                    savingsAmount = (basePrice * 12) - billingTotal;
                    billingText = `${currencySymbol}${billingTotal.toLocaleString()} billed yearly (Save ${currencySymbol}${savingsAmount} per year)`;
                  } else {
                    displayPrice = basePrice;
                    billingText = 'Billed monthly';
                  }
                }
                
                return (
                  <div
                    key={plan.id}
                    className={cn(
                      "relative rounded-2xl border p-6 flex flex-col min-h-0 transition-all",
                      shouldDisable
                        ? "border-[#e5e5e5] bg-[#f5f5f5] opacity-60"
                        : "border-[#eaecf0] bg-white shadow-[var(--shadow-pricing-sm)] hover:shadow-[var(--shadow-pricing-md)]"
                    )}
                  >
                    {isRecommended && !shouldDisable && (
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#D1FAE5] text-[#065F46] text-xs font-semibold rounded-full">
                        Recommended
                      </div>
                    )}
                  {/* Plan name */}
                  <h2 className={cn("font-bold text-3xl leading-tight", shouldDisable ? "text-[#9f9ea3]" : "text-[#111553]")}>
                    {displayName}
                  </h2>
                  {/* Subtitle */}
                  <p className={cn("mt-1 text-sm font-normal", shouldDisable ? "text-[#9f9ea3]" : "text-[#111553]")} style={{ lineHeight: '20px' }}>
                    {displayDescription}
                  </p>
                  {/* Custom Pro mode: Show special copy instead of price/billing/capacity */}
                  {isCustomProMode && isProPlan ? (
                    <>
                      <div className="mt-4">
                        <p className={cn("font-bold text-2xl", shouldDisable ? "text-[#9f9ea3]" : "text-[#111553]")}>
                          Over {currencySymbol}100k ad spend?
                        </p>
                        <p className={cn("text-sm font-normal mt-1", shouldDisable ? "text-[#9f9ea3]" : "text-[#111553]")}>
                          We will send you a quote for a custom plan.
                        </p>
                      </div>
                      {/* Input field for custom ad spend */}
                      <div className="mt-8">
                        <label htmlFor="custom-ad-spend" className="block text-sm font-medium text-[#111553] mb-2">
                          Your monthly ad spend
                        </label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#111553] font-medium">
                            {currencySymbol}
                          </span>
                          <input
                            id="custom-ad-spend"
                            type="text"
                            value={customAdSpend}
                            onChange={(e) => {
                              const value = e.target.value.replace(/[^0-9]/g, '');
                              setCustomAdSpend(value);
                            }}
                            placeholder="e.g., 150000"
                            className="w-full pl-8 pr-4 py-2.5 border-2 border-[#e1e1e1] rounded-lg text-[#111553] placeholder:text-[#9f9ea3] focus:border-primary-600 focus:outline-none transition-colors"
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Price */}
                      {plan.priceLabel ? (
                        <p className={cn("mt-4 font-semibold text-base", shouldDisable ? "text-[#9f9ea3]" : "text-[#111553]")}>
                          {plan.priceLabel}
                        </p>
                      ) : (
                        <p className="mt-4">
                          <span className={cn("font-bold text-2xl", shouldDisable ? "text-[#9f9ea3]" : "text-[#111553]")}>{currencySymbol}{displayPrice.toLocaleString()}</span>
                          <span className={cn("font-normal text-base align-baseline", shouldDisable ? "text-[#9f9ea3]" : "text-[#111553]")}>/mo</span>
                        </p>
                      )}
                      {/* Billing line */}
                      {billingText && (
                        <p className={cn("mt-1 text-sm font-normal", shouldDisable ? "text-[#9f9ea3]" : "text-[#475467]")}>
                          {billingText}
                        </p>
                      )}
                  {/* Key capacity with dotted underline (number/word emphasized) */}
                  {plan.keyCapacity && (
                    <p className={cn("mt-8 text-sm border-b border-dotted pb-0.5 w-fit", shouldDisable ? "text-[#9f9ea3] border-[#d4d4d4]" : "text-[#111553] border-[#d4d4d4]")}>
                      {plan.keyCapacity.match(/^Up to ([\d,]+k?)\s+(.+)$/) ? (
                        <>Up to <strong>{currencySymbol}{plan.keyCapacity.replace(/^Up to ([\d,]+k?)\s+(.+)$/, '$1')}</strong> {plan.keyCapacity.replace(/^Up to [\d,]+k?\s+/, '')}</>
                      ) : plan.keyCapacity.startsWith('Unlimited ') ? (
                        <><strong>Unlimited</strong> {plan.keyCapacity.replace(/^Unlimited /, '')}</>
                      ) : plan.keyCapacity.startsWith('Single ') ? (
                        <><strong>Single</strong> {plan.keyCapacity.replace(/^Single /, '')}</>
                      ) : (
                        plan.keyCapacity
                      )}
                    </p>
                  )}
                    </>
                  )}
                  {/* CTA - dynamic background based on recommendation, disabled for non-pro in Custom Pro mode */}
                  <button
                    type="button"
                    disabled={shouldDisable || (isCustomProMode && isProPlan && !customAdSpend)}
                    className={cn(
                      "mt-4 w-full py-3 px-4 rounded-lg font-bold text-sm text-center transition-colors",
                      shouldDisable || (isCustomProMode && isProPlan && !customAdSpend)
                        ? "bg-[#d4d4d4] text-[#9f9ea3] cursor-not-allowed"
                        : isRecommended
                          ? "bg-[#EDFF9D] text-[#111553] hover:bg-[#d4e885]"
                          : "bg-[#e5e5e5] text-[#111553] hover:bg-[#d4d4d4]"
                    )}
                  >
                    {isCustomProMode && isProPlan ? 'Request quote and start trial' : plan.cta}
                  </button>
                  {plan.customNote && (
                    <p className={cn("mt-3 text-xs leading-relaxed", shouldDisable ? "text-[#9f9ea3]" : "text-[#475467]")}>{plan.customNote}</p>
                  )}
                  {/* Gray separator */}
                  <hr className={cn("mt-5 mb-4 border-t", shouldDisable ? "border-[#d4d4d4]" : "border-[#e1e1e1]")} />
                  {/* Feature list intro */}
                  <p className="text-sm text-[#111553] font-bold mb-3">
                    {plan.buildsOn ? (
                      <>← Everything in {plan.buildsOn} plan, plus:</>
                    ) : (
                      <>Key features:</>
                    )}
                  </p>
                  {/* Feature list - dotted underline, hover tooltip */}
                  <ul className="space-y-2 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature.label}>
                        <FeatureItem label={feature.label} tooltip={feature.tooltip} />
                      </li>
                    ))}
                    {/* Add Dedicated Customer Success Manager for Custom Pro */}
                    {isCustomProMode && isProPlan && (
                      <li>
                        <FeatureItem 
                          label="Dedicated Customer Success Manager" 
                          tooltip="Get personalized support from a dedicated account manager to maximize your ROI." 
                        />
                      </li>
                    )}
                  </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 pb-8">
            {PLANS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveCardIndex(i)}
                aria-label={`Go to plan ${i + 1}`}
                className={cn(
                  'w-2 h-2 rounded-full transition-colors',
                  i === activeCardIndex ? 'bg-primary-600' : 'bg-[#e1e1e1]'
                )}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Chat widget */}
      <div className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[#c9ed1a] border-2 border-[#bae100] shadow-lg flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity">
        <Icon name="mail" size="lg" className="text-[#111553]" />
      </div>
    </div>
  );
}
