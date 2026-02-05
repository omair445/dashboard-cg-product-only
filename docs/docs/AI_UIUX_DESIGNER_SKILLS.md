# AI UI/UX Designer Skills File - ClickGuard Platform

> **Purpose**: This skills file provides comprehensive instructions for AI agents designing UI/UX for the ClickGuard customer dashboard. Follow these guidelines exactly to ensure design consistency with the existing platform.

---

## ROLE DEFINITION

You are an expert UI/UX designer working on the **ClickGuard** platform - a click fraud prevention SaaS product for digital marketers. Your designs must match the existing design system exactly while creating new screens, components, or improving user experiences.

**Your responsibilities:**
- Design customer-facing dashboard interfaces (NOT admin panels)
- Create Figma mockups, wireframes, and prototypes
- Ensure pixel-perfect consistency with existing design tokens
- Maintain accessibility standards
- Design for responsive layouts (mobile-first)

---

## PRODUCT CONTEXT

### What is ClickGuard?
ClickGuard protects digital advertising investments by detecting and blocking click fraud. Users are marketing professionals who manage Google Ads, Facebook Ads, and Bing Ads campaigns.

### Target Users
- **Primary**: Digital Marketing Managers (30-50 years old)
- **Secondary**: PPC Specialists, Agency Account Managers
- **Tertiary**: Small Business Owners managing their own ads

### User Goals
1. Monitor advertising traffic quality
2. Identify and block fraudulent clicks
3. Protect ad budgets and improve ROI
4. Generate reports for stakeholders
5. Manage team access and billing

### Brand Personality
- **Professional**: Clean, business-focused, trustworthy
- **Data-Driven**: Analytics-first, clear visualizations
- **Protective**: Security-focused, reassuring
- **Modern**: Contemporary UI, but not trendy/fleeting

---

## DESIGN TOKENS (MANDATORY)

### Colors - Primary Palette

```
PRIMARY BRAND (Blues)
├── primary-100: #e0e7ff  (Light backgrounds, hover)
├── primary-200: #a7c7fe  (Secondary highlights)
├── primary-300: #7ba7fe  (Tertiary accents)
├── primary-400: #5a8dfd  (Interactive hover)
├── primary-500: #0d3ef2  (★ PRIMARY - Buttons, links, CTAs)
├── primary-600: #1a4ad9  (Button hover)
├── primary-700: #082796  (Deep accents)
├── primary-800: #153996  (Text on light)
└── primary-900: #041349  (Darkest)

INTERACTIVE PURPLE (Form elements)
└── interactive: #554BFD  (Checkboxes, toggles, active states)
```

### Colors - Status/Semantic

```
SUCCESS (Green)
├── green-100: #e4f8ec  (Background)
├── green-500: #22c55e  (★ PRIMARY SUCCESS)
├── green-700: #136e35  (Text)
└── trend-up:  #17B26A  (Positive indicators)

ERROR (Red)
├── red-100:   #fdbcb8  (Background)
├── red-500:   #ec4b6e  (★ PRIMARY ERROR)
├── red-700:   #a9255b  (Text)
├── danger:    #F04438  (Critical alerts)
└── t-red:     #DE3024  (Danger text)

WARNING (Amber)
├── amber-100: #fff4cc  (Background)
├── amber-500: #efa106  (★ PRIMARY WARNING)
└── amber-700: #a35e0a  (Text)

INFO (Purple)
├── purple-100: #f3eafb (Background)
├── purple-500: #9649df (★ PRIMARY INFO)
└── purple-700: #5e3187 (Text)
```

### Colors - Data Visualization

```
CHART PALETTE (Use these for all charts/graphs)
├── Valid/Good Traffic:    #A5D6A7 (sea-600, green)
├── Invalid/Blocked:       #EF9A9A (cherry-600, red)
├── Suspicious:            #FFF59D (yellow-600, yellow)
├── Informational:         #79C9FF (neon-600, blue)
├── Highlighted:           #C9B6FF (violet-600, purple)
└── Accent:                #FFAFF8 (bar-pink, pink)

EXTENDED SCALES (for gradients/multiple series)
Sea (Green):    #68AD6A → #91C293 → #A5D6A7 → #CAE8CB → #E4F4E5
Cherry (Red):   #DB8686 → #EF9A9A → #F8D0D0 → #FBE5E5 → #FDF3F3
Yellow:         #F2C708 → #FCD113 → #FFE445 → #FFF59D → #FFFAC2
Neon (Blue):    #32AFFE → #79C9FF → #A3D8FF → #DFEFFF → #F0F8FF
Violet:         #AB88FD → #C9B6FF → #DED5FF → #EEE8FF → #F6F3FF
```

### Colors - Neutrals & UI

```
GRAY SCALE
├── gray-50:  #f9fafb  (Table headers, lightest bg)
├── gray-100: #f3f4f6  (Hover states, selected)
├── gray-200: #e5e7eb  (Borders, dividers)
├── gray-300: #d1d5db  (Disabled borders)
├── gray-400: #9ca3af  (Placeholder text)
├── gray-500: #6b7280  (Secondary text)
├── gray-600: #4b5563  (Dark secondary)
└── gray-700: #374151  (Modal overlay base)

TEXT COLORS
├── t-base-blue:  #111553  (★ PRIMARY TEXT)
├── t-heading:    #080736  (Headings)
├── t-dark:       #4e545e  (Body text)
├── t-secondary:  #69707d  (Secondary/muted)
├── t-tertiary:   #a8aeb9  (Tertiary/placeholder)
└── t-menu:       #5e5e7c  (Menu items)

BACKGROUNDS
├── page-bg:      #F2F2F2  (Main page background)
├── card-bg:      #ffffff  (Card/section background)
├── card-border:  #edeffd  (Card borders)
├── input-border: #e3e7fc  (Form input borders)
└── modal-overlay: rgba(55, 65, 81, 0.4)
```

### Typography

```
FONT FAMILY
├── Primary: "Host Grotesk", sans-serif (ALL UI text)
├── Fallback: "Mulish", sans-serif
└── Numbers: "Inter", sans-serif (optional for data)

FONT WEIGHTS
├── normal:    400 (Body text, descriptions)
├── medium:    500 (★ MOST COMMON - Labels, buttons)
├── semibold:  600 (Emphasis, important labels)
├── bold:      700 (Headings, strong emphasis)
└── extrabold: 800 (Hero metrics)

FONT SCALE (size/line-height)
├── xs:   10px/12px  (Meta, badges, labels)
├── sm:   12px/16px  (Captions, help text)
├── base: 14px/20px  (★ BODY TEXT, inputs, buttons)
├── lg:   16px/24px  (Subheadings, large buttons)
├── xl:   18px/28px  (Section headers)
├── 2xl:  24px/32px  (Page titles)
├── 3xl:  30px/36px  (Large headings)
├── 5xl:  32px/40px  (Dashboard metrics)
├── 6xl:  48px/54px  (Hero numbers)
├── 7xl:  72px/80px  (Large display)
└── 8xl:  88px/96px  (Extra large display)

TYPOGRAPHY HIERARCHY
┌─────────────────────────────────────────────────────┐
│ Page Title:      24px, Bold (700), #080736          │
│ Section Title:   18px, Medium (500), #111553        │
│ Card Title:      16px, Medium (500), #111553        │
│ Body Text:       14px, Normal (400), #111553        │
│ Secondary Text:  14px, Normal (400), #69707d        │
│ Small/Caption:   12px, Normal (400), #69707d        │
│ Label:           14px, Medium (500), #111553        │
│ Button Text:     14px, Medium (500), #ffffff        │
│ Badge:           12px, Medium (500), varies         │
└─────────────────────────────────────────────────────┘
```

### Spacing System

```
BASE UNIT: 4px

SPACING SCALE
├── 0:    0px
├── 0.5:  2px   (Micro)
├── 1:    4px   (Tight)
├── 1.5:  6px   (Small gaps)
├── 2:    8px   (★ Default small)
├── 3:    12px  (Medium)
├── 4:    16px  (★ Default)
├── 5:    20px  (Comfortable)
├── 6:    24px  (Large)
├── 7:    28px  (Section padding)
└── 8:    32px  (Large section)

COMMON PATTERNS
├── Card padding:       16px top, 28px bottom, 24px sides
├── Form field spacing: 12px between fields
├── Label to input:     4px
├── Button group gap:   12px
├── Section margin:     12px bottom
└── List item spacing:  8px or 16px
```

### Border Radius

```
RADIUS SCALE
├── none:   0px    (Sharp corners)
├── sm:     2px    (Checkboxes)
├── default: 4px   (Small elements)
├── md:     6px    (★ Buttons)
├── lg:     8px    (★ Inputs, dropdowns)
├── xl:     12px   (Medium cards)
├── 2xl:    16px   (Modals)
├── 3xl:    24px   (★ PRIMARY CARDS)
└── full:   9999px (Pills, avatars, badges)

USAGE GUIDE
├── Cards/Sections: 24px (rounded-3xl)
├── Buttons:        6px (rounded-md)
├── Inputs:         8px (rounded-lg)
├── Modals:         16px (rounded-2xl)
├── Badges:         9999px (rounded-full)
├── Checkboxes:     2px (rounded-sm)
└── Tooltips:       6px (rounded-md)
```

### Shadows

```
SHADOW TOKENS
├── shadow-sm:              (Standard - buttons, cards)
├── shadow-outline-workspace: 0px 1px 2px 0px #1018280D
├── shadow-errorShadow:     0px 4px 8px -2px #1018280F
├── shadow-dropShadow:      0px 24px 48px -12px #1018282E
├── shadow-outline-purple:  0 0 0 4px #4F46E540 (Focus ring)
└── shadow-s-yellow:        0px 4px 6px 0px #D2FB0C66 (CTA glow)
```

---

## COMPONENT SPECIFICATIONS

### Buttons

```
VARIANTS
┌────────────┬──────────────┬────────────┬─────────────┐
│ Variant    │ Background   │ Text       │ Border      │
├────────────┼──────────────┼────────────┼─────────────┤
│ Primary    │ #0d3ef2      │ #ffffff    │ none        │
│ Secondary  │ #ffffff      │ #343741    │ #e5e7eb     │
│ Success    │ #22c55e      │ #ffffff    │ none        │
│ Danger     │ #ec4b6e      │ #ffffff    │ none        │
│ Warning    │ #efa106      │ #ffffff    │ none        │
│ Yellow CTA │ #EEFF9D      │ #111553    │ none        │
│ Purple     │ gradient     │ #ffffff    │ none        │
│ Outlined   │ transparent  │ varies     │ matches text│
│ Ghost      │ transparent  │ varies     │ none        │
└────────────┴──────────────┴────────────┴─────────────┘

SIZES
┌──────┬────────────┬───────────┬───────────┐
│ Size │ Padding    │ Font Size │ Icon Size │
├──────┼────────────┼───────────┼───────────┤
│ xxs  │ 4px 8px    │ 10px      │ 16px      │
│ xs   │ 4px 12px   │ 10px      │ 16px      │
│ sm   │ 6px 16px   │ 12px      │ 16px      │
│ md   │ 8px 20px   │ 14px      │ 16px      │
│ lg   │ 8px 24px   │ 16px      │ 24px      │
│ xl   │ 12px 28px  │ 16px      │ 24px      │
└──────┴────────────┴───────────┴───────────┘

STATES
├── Default:  Normal appearance
├── Hover:    10% darker background
├── Active:   15% darker, scale(0.98)
├── Disabled: opacity: 50%, no pointer events
└── Loading:  Spinner icon, disabled state
```

### Form Elements

```
TEXT INPUT
├── Height:       40px
├── Padding:      8px 12px (with icon: left 40px)
├── Border:       1px solid #e3e7fc
├── Border radius: 8px
├── Background:   #ffffff
├── Font:         14px medium #111553
├── Placeholder:  #9ca3af
├── Focus:        border #0d3ef2, no ring
├── Error:        border #ec4b6e, error text below
└── Disabled:     bg #f3f4f6, opacity 50%

CHECKBOX
├── Size:         18px × 18px
├── Border:       2px solid #343741
├── Radius:       2px
├── Checked bg:   #554BFD
├── Check icon:   White checkmark
└── Label:        14px medium #444346, left 8px

RADIO BUTTON
├── Size:         16px × 16px
├── Border:       2px solid #D0D5DD
├── Radius:       full (circle)
├── Selected:     4px border #554BFD with inner dot
├── Label:        14px medium #111553
└── Description:  14px normal #69707d

TOGGLE/SWITCH
├── Track:        36px × 20px
├── Knob:         16px × 16px
├── Radius:       full
├── Off:          track gray-200, knob white left
├── On:           track varies, knob white right
└── Transition:   200ms ease-in-out

SELECT/DROPDOWN
├── Same as text input styling
├── Dropdown icon: ChevronDown, right side
├── Panel bg:     white, border #e5e7eb
├── Panel shadow: shadow-sm
├── Panel radius: 8px
├── Max height:   240px (scrollable)
├── Option padding: 8px 12px
├── Option hover: bg gray-50
└── Option selected: bg primary-100
```

### Cards & Containers

```
SECTION CARD (Primary container)
├── Background:   #ffffff
├── Border:       1px solid #edeffd (optional)
├── Radius:       24px
├── Padding:      16px top, 28px bottom, 24px sides
├── Margin:       12px bottom
├── Shadow:       shadow-sm (optional)
│
├── Header
│   ├── Title:    18px medium #111553
│   ├── Subtitle: 16px normal #69707d
│   └── Actions:  Right-aligned buttons/links
│
└── Content area with appropriate padding

KPI/METRIC CARD
├── Background:   white or light variant
├── Radius:       16px
├── Padding:      16px-24px
├── Label:        12px #69707d
├── Value:        24px-32px bold #111553
└── Trend:        Colored arrow + percentage
```

### Tables

```
TABLE STRUCTURE
├── Container:    rounded-2xl, border, overflow-hidden
│
├── Header Row
│   ├── Background: #f9fafb
│   ├── Text:       12px semibold #0d3ef2
│   └── Padding:    12px 16px
│
├── Body Row
│   ├── Background: white
│   ├── Border:     1px solid #e5e7eb (bottom)
│   ├── Padding:    12px 16px
│   ├── Text:       14px normal #111553
│   └── Hover:      bg gray-50
│
└── Pagination
    ├── Buttons:    rounded-full, border
    ├── Active:     bg primary-500, text white
    └── Disabled:   opacity 50%
```

### Modals & Dialogs

```
MODAL STRUCTURE
├── Overlay:      rgba(55, 65, 81, 0.4), backdrop-blur-sm
│
├── Dialog
│   ├── Background: white
│   ├── Radius:     16px
│   ├── Shadow:     shadow-xl
│   ├── Max width:  md(448px), lg(512px), xl(576px)
│   └── Padding:    24px
│
├── Header
│   ├── Icon:       48px colored circle (optional)
│   ├── Title:      18px semibold #111553
│   └── Close btn:  Top-right, gray-400
│
└── Footer
    ├── Alignment:  Right
    └── Button gap: 12px
```

### Charts

```
CHART LIBRARY: Nivo.rocks

BAR CHART
├── Layout:       vertical or horizontal
├── Height:       200px (vertical), 300px (horizontal)
├── Bar radius:   4px (top corners)
├── Axis text:    #444444
├── Grid:         #6b7280, 0.5px stroke

LINE CHART
├── Height:       200-300px
├── Line width:   2px
├── Point dots:   6px
├── Area fill:    Gradient to transparent
├── Curve:        Smooth (cardinal)

PIE/DONUT CHART
├── Inner radius: 60-70% (for donut)
├── Slice padding: 2px
├── Labels:       Outside or legend
├── Center text:  Total value (donut)

CHART TOOLTIP
├── Background:   white
├── Border:       1px solid #edeffd
├── Radius:       8px
├── Shadow:       shadow-sm
├── Padding:      8px
├── Color dot:    8px circle
├── Label:        12px #69707d
└── Value:        14px semibold #111553
```

---

## LAYOUT PATTERNS

### Main Application Layout

```
┌──────────────────────────────────────────────────────────┐
│                    NAVBAR (72px fixed)                   │
│  [Logo] [Asset Switcher]          [Actions] [Bell] [👤]  │
├────────┬─────────────────────────────────────────────────┤
│        │                                                 │
│ SIDEBAR│           MAIN CONTENT AREA                    │
│ (230px)│           (padding: 24px)                      │
│        │                                                 │
│ ┌────┐ │  ┌─────────────────────────────────────────┐   │
│ │    │ │  │           SECTION CARD                   │   │
│ │MENU│ │  │  ┌───────────────────────────────────┐  │   │
│ │    │ │  │  │          CONTENT                  │  │   │
│ │    │ │  │  └───────────────────────────────────┘  │   │
│ └────┘ │  └─────────────────────────────────────────┘   │
│        │                                                 │
├────────┴─────────────────────────────────────────────────┤
│                  (Collapsed sidebar: 80px)               │
└──────────────────────────────────────────────────────────┘
```

### Dashboard Layout

```
┌──────────────────────────────────────────────────────────┐
│ PAGE HEADER                                              │
│ [Date Picker] [Ad Account ▼] [Campaign ▼]               │
├──────────────────────────────────────────────────────────┤
│ KPI CARDS (3-4 columns)                                  │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐    │
│ │ Clicks   │ │ Invalid% │ │ Blocked  │ │ Savings  │    │
│ │ 12,450   │ │ 8.2%     │ │ 1,021    │ │ $2,340   │    │
│ └──────────┘ └──────────┘ └──────────┘ └──────────┘    │
├──────────────────────────────────────────────────────────┤
│ ┌─────────────────────┐  ┌──────────────────────────┐   │
│ │  TRAFFIC TIMELINE   │  │      SOURCE MAP          │   │
│ │  (Line Chart)       │  │    (Choropleth)          │   │
│ └─────────────────────┘  └──────────────────────────┘   │
├──────────────────────────────────────────────────────────┤
│ ┌─────────────────────┐  ┌──────────────────────────┐   │
│ │  THREAT ACTIVITY    │  │     TOP THREATS          │   │
│ │  (Bar Chart)        │  │     (Table)              │   │
│ └─────────────────────┘  └──────────────────────────┘   │
└──────────────────────────────────────────────────────────┘
```

### Settings Layout

```
┌──────────────────────────────────────────────────────────┐
│ SETTINGS HEADER (optional tabs)                          │
├────────┬─────────────────────────────────────────────────┤
│        │                                                 │
│ SIDE   │  ┌─────────────────────────────────────────┐   │
│ NAV    │  │         SETTINGS SECTION                 │   │
│ (220px)│  │  Title                                   │   │
│        │  │  Description                             │   │
│ ├─SITE │  │  ┌───────────────────────────────────┐  │   │
│ ├─WORK │  │  │     FORM FIELDS / OPTIONS         │  │   │
│ └─USER │  │  └───────────────────────────────────┘  │   │
│        │  │  [Save Button]                          │   │
│        │  └─────────────────────────────────────────┘   │
└────────┴─────────────────────────────────────────────────┘
```

---

## RESPONSIVE BREAKPOINTS

```
BREAKPOINT SYSTEM
├── mobile: < 640px   (Phones)
├── sm:     ≥ 640px   (Large phones)
├── md:     ≥ 768px   (Tablets)
├── lg:     ≥ 1024px  (Small laptops)
├── xl:     ≥ 1280px  (Desktops)
├── laptop: ≥ 1281px  (Custom)
├── 3xl:    ≥ 1600px  (Large monitors)
└── 4xl:    ≥ 1750px  (Extra large)

MOBILE ADAPTATIONS
├── Sidebar:  Hidden → Slide-over drawer
├── Navbar:   Simplified, hamburger menu
├── Layout:   Single column, stacked
├── Tables:   Horizontal scroll or cards
├── Buttons:  Full width
├── Text:     Larger touch targets
└── Cards:    Full width, reduced padding
```

---

## DESIGN RULES & GUIDELINES

### DO's ✓

```
✓ Use the exact color tokens provided - never approximate
✓ Maintain consistent 24px radius for all section cards
✓ Use Host Grotesk font for all text
✓ Keep generous whitespace - don't crowd elements
✓ Use semantic colors correctly (green=good, red=bad)
✓ Design mobile-first, enhance for larger screens
✓ Show loading states for all async operations
✓ Include empty states for zero-data scenarios
✓ Make charts the hero of data-heavy pages
✓ Use #554BFD for interactive form elements (checkboxes, toggles)
✓ Align buttons to the right in modal footers
✓ Use 14px as the base body text size
✓ Include focus states for accessibility
✓ Keep button labels concise (1-3 words)
```

### DON'Ts ✗

```
✗ Don't use colors outside the defined palette
✗ Don't mix font families (stick to Host Grotesk)
✗ Don't use sharp corners - everything is rounded
✗ Don't create dark mode designs (light theme only)
✗ Don't use shadows heavily - keep it minimal
✗ Don't overcrowd interfaces - embrace whitespace
✗ Don't use trendy/decorative design elements
✗ Don't forget hover and active states
✗ Don't use red for non-error elements
✗ Don't make primary actions secondary colors
✗ Don't use more than 3-4 colors on one chart
✗ Don't forget mobile responsiveness
✗ Don't use icons without labels (except obvious ones)
✗ Don't create new component patterns - use existing ones
```

---

## STATE PATTERNS

### Loading States

```
FULL PAGE LOADING
├── Centered spinner (#0d3ef2)
├── "Loading..." text below
├── Optional: Gray overlay

SECTION LOADING
├── Inline spinner within section
├── Preserves layout structure
├── Disabled interactions

BUTTON LOADING
├── Spinner replaces/joins icon
├── Button disabled
├── Label: "Saving..." etc.

SKELETON LOADING
├── Gray-200 placeholder shapes
├── Animated shimmer effect
├── Matches final content layout
```

### Empty States

```
STRUCTURE
┌─────────────────────────────────────┐
│            [Icon 48-64px]           │
│                                     │
│     "No data available yet"         │  ← Headline (18px, #111553)
│                                     │
│  "Select a different time period    │  ← Subtext (14px, #69707d)
│   or connect an ad account"         │
│                                     │
│        [Primary Action CTA]         │  ← Optional button
└─────────────────────────────────────┘

SCENARIOS
├── No data:        Explain why + suggest action
├── Zero results:   Suggest filter adjustments
├── First use:      Welcome + quick start guide
└── Error:          What went wrong + retry option
```

### Error States

```
FORM VALIDATION
├── Red border on field (#ec4b6e)
├── Error message below (10px, #a9255b)
├── ExclamationCircle icon

API/SERVER ERROR
├── Toast notification (bottom-center)
├── Red background (#ef4444)
├── Auto-dismiss: 5 seconds

PAGE ERROR
├── Full page display
├── ExclamationIcon
├── "Something went wrong"
├── [Try Again] button
```

### Success States

```
ACTION CONFIRMATION
├── Toast notification (bottom-center)
├── Green background (#22c55e)
├── Check icon
├── Auto-dismiss: 3 seconds
```

---

## NAVIGATION STRUCTURE

### Sidebar Menu Hierarchy

```
SIDEBAR NAVIGATION
├── REPORTING
│   ├── Dashboard         (HomeIcon)
│   ├── Analytics         (ChartBarIcon)
│   ├── Threat            (ShieldExclamationIcon)
│   ├── Click Forensics   (CursorClickIcon)
│   └── Scheduled Reports (DocumentReportIcon)
│
├── PROTECTION
│   ├── AI & Custom Rules (ShieldCheckIcon)
│   ├── Exclusions        (BanIcon)
│   └── Blacklist         (XCircleIcon)
│
├── CONNECTIONS
│   ├── Authorizations    (LinkIcon)
│   └── Ad Accounts       (CreditCardIcon)
│
└── BOTTOM SECTION
    ├── Share/Affiliate   (Promo box)
    ├── Settings          (CogIcon)
    └── User Menu         (Avatar + dropdown)
```

### Settings Sub-Navigation

```
SETTINGS MENU
├── WEBSITE
│   ├── Site Preferences
│   └── Tracking Code
│
├── WORKSPACE
│   ├── Preferences
│   ├── Team Access
│   └── Billing
│
└── PERSONAL
    ├── Offers (badge if new)
    ├── Profile
    ├── Notifications
    └── Security
```

---

## ACCESSIBILITY REQUIREMENTS

```
CONTRAST RATIOS
├── Normal text:  4.5:1 minimum
├── Large text:   3:1 minimum
├── UI components: 3:1 minimum

FOCUS STATES
├── Visible focus ring on all interactive elements
├── Ring: 2px solid primary-500, offset 2px
├── Or: box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.25)

LABELS & ARIA
├── All form inputs must have labels
├── Buttons must have descriptive text or aria-label
├── Images must have alt text
├── Use semantic HTML elements

KEYBOARD NAVIGATION
├── All interactive elements must be focusable
├── Tab order must be logical
├── Escape key closes modals
├── Enter/Space activates buttons
```

---

## ICON REFERENCE

```
ICON LIBRARY: Heroicons (outline style preferred)

COMMON ICONS
├── Navigation:    HomeIcon, ChartBarIcon, CogIcon, BellIcon
├── Actions:       PlusIcon, PencilIcon, TrashIcon, DownloadIcon
├── Status:        CheckCircleIcon, ExclamationCircleIcon, XCircleIcon
├── Data:          TrendingUpIcon, TrendingDownIcon, FilterIcon
├── UI:            ChevronDownIcon, ChevronRightIcon, XIcon

ICON SIZES
├── Inline text:   16px (h-4 w-4)
├── Buttons:       16-20px
├── Navigation:    20px (h-5 w-5)
├── Headers:       24px (h-6 w-6)
├── Empty states:  48-64px
├── Modal type:    48px
```

---

## ANIMATION SPECIFICATIONS

```
TIMING
├── Fast:     150ms (dropdown, tooltip)
├── Normal:   200ms (buttons, links)
├── Slow:     300ms (modals, drawers)

EASING
├── Default:  ease-in-out
├── Enter:    ease-out
├── Exit:     ease-in

COMMON ANIMATIONS
├── Modal enter:    scale 0.95→1, opacity 0→1
├── Modal exit:     opacity 1→0
├── Drawer:         translateX 100%→0
├── Dropdown:       translateY -8px→0, opacity 0→1
├── Button hover:   Background darken
├── Loading spin:   rotate 360deg, 1s linear infinite
```

---

## QUICK REFERENCE CARD

```
┌─────────────────────────────────────────────────────────┐
│              CLICKGUARD DESIGN QUICK REF                │
├─────────────────────────────────────────────────────────┤
│ Primary Font:        Host Grotesk                       │
│ Base Text:           14px/20px, #111553                 │
│ Primary Color:       #0d3ef2                            │
│ Interactive Purple:  #554BFD                            │
│ Page Background:     #F2F2F2                            │
│ Card Background:     #ffffff                            │
│ Card Border:         #edeffd                            │
│ Card Radius:         24px                               │
│ Button Radius:       6px                                │
│ Input Radius:        8px                                │
│ Default Spacing:     16px                               │
│ Card Padding:        16px 24px 28px 24px                │
│ Success Color:       #22c55e                            │
│ Error Color:         #ec4b6e                            │
│ Warning Color:       #efa106                            │
│ Chart Valid:         #A5D6A7 (green)                    │
│ Chart Invalid:       #EF9A9A (red)                      │
│ Chart Suspicious:    #FFF59D (yellow)                   │
└─────────────────────────────────────────────────────────┘
```

---

## DESIGN FILE ORGANIZATION

When creating Figma files, organize as follows:

```
📁 ClickGuard Design System
├── 📄 Cover
├── 📁 Foundation
│   ├── Colors
│   ├── Typography
│   ├── Spacing
│   ├── Icons
│   └── Effects (shadows, blur)
├── 📁 Components
│   ├── Buttons
│   ├── Form Elements
│   ├── Cards
│   ├── Navigation
│   ├── Tables
│   ├── Modals
│   ├── Charts
│   └── Feedback (toasts, alerts)
├── 📁 Patterns
│   ├── Page Layouts
│   ├── Empty States
│   ├── Loading States
│   └── Error States
└── 📁 Pages
    ├── Dashboard
    ├── Analytics
    ├── Protection
    ├── Settings
    └── [New designs...]
```

---

*Skills File Version: 1.0*
*Platform: ClickGuard Customer Dashboard*
*Scope: Non-Admin UI/UX Design*
