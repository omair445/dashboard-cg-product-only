# ClickGuard Customer Dashboard Design System

> **Document Purpose**: This comprehensive design system document is intended for designers creating UI mockups in Figma and AI agents generating UI prototypes for the ClickGuard customer-facing dashboard. It covers all visual specifications, component patterns, user journeys, and interaction guidelines.

**Scope**: Customer-facing dashboard ONLY (excludes admin panel)

---

## Table of Contents

1. [Brand Identity & Visual Foundation](#1-brand-identity--visual-foundation)
2. [Color System](#2-color-system)
3. [Typography System](#3-typography-system)
4. [Spacing & Layout System](#4-spacing--layout-system)
5. [Component Library](#5-component-library)
6. [Charts & Data Visualization](#6-charts--data-visualization)
7. [Navigation & Information Architecture](#7-navigation--information-architecture)
8. [Page Templates & Layouts](#8-page-templates--layouts)
9. [User Journeys & Flows](#9-user-journeys--flows)
10. [States & Feedback Patterns](#10-states--feedback-patterns)
11. [Responsive Design](#11-responsive-design)
12. [Interactions & Animations](#12-interactions--animations)
13. [Iconography](#13-iconography)
14. [Design Tokens Reference](#14-design-tokens-reference)

---

## 1. Brand Identity & Visual Foundation

### 1.1 Brand Personality
- **Professional**: Clean, business-focused interface for marketing professionals
- **Trustworthy**: Security-focused product protecting advertising investments
- **Data-Driven**: Analytics-heavy with clear data visualization
- **Modern**: Contemporary UI with rounded corners and generous whitespace

### 1.2 Visual Style
- **Theme**: Light mode only (dark mode assets exist but are disabled)
- **Overall Aesthetic**: Clean, minimal, with subtle shadows and soft gradients
- **Corner Radius Philosophy**: Generous rounded corners (16px-24px for containers)
- **Depth**: Minimal shadows, mostly flat design with subtle elevation

### 1.3 Background
```css
/* Global page background */
background: #F2F2F2;
/* Alternative gradient (used in some areas) */
background: linear-gradient(98.3deg, #f5f7ff 18.08%, #f5f5f5 100%);
```

---

## 2. Color System

### 2.1 Primary Brand Colors (Blues)

| Token | Hex | Usage |
|-------|-----|-------|
| `primary-100` | `#e0e7ff` | Light backgrounds, hover states |
| `primary-200` | `#a7c7fe` | Secondary highlights |
| `primary-300` | `#7ba7fe` | Tertiary accents |
| `primary-400` | `#5a8dfd` | Interactive elements hover |
| `primary-500` | `#0d3ef2` | **Primary brand color**, buttons, links |
| `primary-600` | `#1a4ad9` | Button hover states |
| `primary-700` | `#082796` | Deep accents |
| `primary-800` | `#153996` | Text on light backgrounds |
| `primary-900` | `#041349` | Darkest brand shade |

**Primary Action Color**: `#0d3ef2` (primary-500)
**Interactive Purple**: `#554BFD` (t-dark-blue) - Used for checkboxes, toggles, active states

### 2.2 Semantic Status Colors

#### Success (Green)
| Token | Hex | Usage |
|-------|-----|-------|
| `green-100` | `#e4f8ec` | Success background |
| `green-300` | `#b6ecca` | Light success |
| `green-400` | `#71da97` | Success highlight |
| `green-500` | `#22c55e` | **Primary success** |
| `green-600` | `#1da54f` | Success hover |
| `green-700` | `#136e35` | Success text |
| `green-900` | `#083016` | Deep success |

#### Error/Danger (Red)
| Token | Hex | Usage |
|-------|-----|-------|
| `red-100` | `#fdbcb8` | Error background light |
| `red-300` | `#f99395` | Error highlight |
| `red-400` | `#f37686` | Error accent |
| `red-500` | `#ec4b6e` | **Primary error** |
| `red-600` | `#ca3665` | Error hover |
| `red-700` | `#a9255b` | Error text |
| `danger` | `#F04438` | Critical alerts |
| `t-red` | `#DE3024` | Danger text |

#### Warning (Amber/Yellow)
| Token | Hex | Usage |
|-------|-----|-------|
| `amber-100` | `#fff4cc` | Warning background |
| `amber-300` | `#fde0a5` | Warning light |
| `amber-400` | `#fbc251` | Warning accent |
| `amber-500` | `#efa106` | **Primary warning** |
| `amber-700` | `#a35e0a` | Warning text |

#### Info (Purple)
| Token | Hex | Usage |
|-------|-----|-------|
| `purple-100` | `#f3eafb` | Info background |
| `purple-300` | `#dabff3` | Light purple |
| `purple-400` | `#bc8aea` | Purple accent |
| `purple-500` | `#9649df` | **Primary purple** |
| `purple-600` | `#7c41b4` | Purple hover |
| `purple-700` | `#5e3187` | Purple text |

### 2.3 Data Visualization Palette

These colors are specifically for charts and data displays:

#### Traffic Quality Colors
| Name | Hex | Usage |
|------|-----|-------|
| `sea-600` | `#A5D6A7` | Valid/Good traffic (green) |
| `cherry-600` | `#EF9A9A` | Invalid/Blocked traffic (red) |
| `yellow-600` | `#FFF59D` | Suspicious traffic (yellow) |
| `neon-600` | `#79C9FF` | Informational/Neutral (blue) |
| `violet-600` | `#C9B6FF` | Highlighted data (purple) |

#### Extended Chart Palette
```
Sea Scale (Greens):     #68AD6A → #91C293 → #A5D6A7 → #CAE8CB → #E4F4E5 → #F3FAF3
Cherry Scale (Reds):    #DB8686 → #EF9A9A → #F8D0D0 → #FBE5E5 → #FDF3F3
Yellow Scale:           #F2C708 → #FCD113 → #FFE445 → #FFF59D → #FFFAC2
Neon Scale (Blues):     #32AFFE → #79C9FF → #A3D8FF → #DFEFFF → #F0F8FF
Violet Scale (Purples): #AB88FD → #C9B6FF → #DED5FF → #EEE8FF → #F6F3FF
Rose Scale (Pinks):     #FF4D4D → #FF8080 → #FFB3B3 → #FFCFCF → #FFE5E5
```

### 2.4 Neutral/Gray Scale

| Token | Hex | Usage |
|-------|-----|-------|
| `gray-50` | `#f9fafb` | Lightest background, table headers |
| `gray-100` | `#f3f4f6` | Card hover, selected states |
| `gray-200` | `#e5e7eb` | Borders, dividers |
| `gray-300` | `#d1d5db` | Disabled borders |
| `gray-400` | `#9ca3af` | Placeholder text |
| `gray-500` | `#6b7280` | Secondary text |
| `gray-600` | `#4b5563` | Dark secondary text |
| `gray-700` | `#374151` | Modal overlay base |

### 2.5 Text Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `t-base-blue` | `#111553` | **Primary text color** |
| `t-heading` | `#080736` | Headings, titles |
| `t-dark` | `#4e545e` | Body text |
| `t-secondary` | `#69707d` | Secondary/muted text |
| `t-tertiary` | `#a8aeb9` | Tertiary/placeholder text |
| `t-menu` | `#5e5e7c` | Menu item text |
| `t-title` | `#69707d` | Section titles |

### 2.6 UI Element Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `card-background` | `#ffffff` | Card/panel backgrounds |
| `card-border` | `#edeffd` | Card borders |
| `input-border` | `#e3e7fc` | Form input borders |
| `input-background` | `#ffffff` | Input backgrounds |
| `table-header-background` | `#f9fafb` | Table header bg |
| `selected-menu-item` | `#f3f4f6` | Selected nav item |
| `modal-background` | `rgba(55, 65, 81, 0.4)` | Modal overlay |
| `border-light` | `#edeffd` | Light borders |

### 2.7 Special Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `b-yellow` | `#EEFF9D` | Highlight/CTA yellow background |
| `b-yellow-dark` | `#BAE100` | Yellow accent |
| `t-dark-blue` | `#554BFD` | Interactive purple (checkboxes, toggles) |
| `t-purple` | `#918AFF` | Light purple accents |
| `t-light-purple` | `#5E54FD` | Purple gradient end |
| `t-trend-up` | `#17B26A` | Positive trend indicator |
| `t-bar-pink` | `#FFAFF8` | Chart accent pink |
| `t-map-click` | `#B7B2FF` | Map click indicator |

---

## 3. Typography System

### 3.1 Font Families

| Family | CSS Value | Usage |
|--------|-----------|-------|
| **Host Grotesk** | `"Host Grotesk", sans-serif` | **Primary font** - All UI text |
| **Noah** | `"noah", "Mulish", sans-serif` | Alternative headers |
| **Inter** | `"inter", sans-serif` | Data/numbers (optional) |

**Primary Font**: Host Grotesk
- Available weights: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
- Available styles: Normal, Italic

### 3.2 Font Scale

| Token | Size | Line Height | Usage |
|-------|------|-------------|-------|
| `xs` | 10px | 12px | Labels, badges, meta |
| `sm` | 12px | 16px | Small text, captions, help text |
| `base` | 14px | 20px | **Body text**, inputs, buttons |
| `lg` | 16px | 24px | Subheadings, large buttons |
| `xl` | 18px | 28px | Section headers |
| `2xl` | 24px | 32px | Page titles |
| `3xl` | 30px | 36px | Large headings |
| `5xl` | 32px | 40px | Dashboard metrics |
| `6xl` | 48px | 54px | Hero numbers |
| `7xl` | 72px | 80px | Large display |
| `8xl` | 88px | 96px | Extra large display |

### 3.3 Font Weights

| Weight | Value | Usage |
|--------|-------|-------|
| `normal` | 400 | Body text, descriptions |
| `medium` | 500 | **Most common** - Labels, buttons, links |
| `semibold` | 600 | Emphasis, important labels |
| `bold` | 700 | Headings, strong emphasis |
| `extrabold` | 800 | Hero text, large metrics |

### 3.4 Typography Hierarchy Examples

```
Page Title:          24px/32px, Bold (700), #080736
Section Title:       18px/28px, Medium (500), #111553
Card Title:          16px/24px, Medium (500), #111553
Body Text:           14px/20px, Normal (400), #111553
Secondary Text:      14px/20px, Normal (400), #69707d
Small/Caption:       12px/16px, Normal (400), #69707d
Label:               14px/20px, Medium (500), #111553
Button Text:         14px/20px, Medium (500), #ffffff (on primary)
```

---

## 4. Spacing & Layout System

### 4.1 Base Spacing Scale

Using 4px base unit (Tailwind default):

| Token | Value | Usage |
|-------|-------|-------|
| `0` | 0px | No spacing |
| `0.5` | 2px | Micro spacing |
| `1` | 4px | Tight spacing |
| `1.5` | 6px | Small gaps |
| `2` | 8px | Default small spacing |
| `3` | 12px | Medium spacing |
| `4` | 16px | Default spacing |
| `5` | 20px | Comfortable spacing |
| `6` | 24px | Large spacing |
| `7` | 28px | Section padding |
| `8` | 32px | Large section padding |

### 4.2 Common Spacing Patterns

**Card/Section Padding**:
```
Top: 16px (pt-4)
Bottom: 28px (pb-7)
Left/Right: 24px (px-6)
```

**Form Field Spacing**:
```
Label bottom margin: 4px (mb-1)
Field bottom margin: 12px (mb-3)
Help text top margin: 8px (mt-2)
```

**List Item Spacing**:
```
Between items: 8px (space-y-2) or 16px (space-y-4)
```

**Button Spacing**:
```
Icon to label: 8px (gap-2)
Button group: 12px (gap-3)
```

### 4.3 Layout Grid

**Main Layout Structure**:
```
+------------------+--------------------------------+
|     Navbar       |         72px fixed height      |
+--------+---------+--------------------------------+
|        |         |                                |
| Sidebar|  230px  |        Main Content            |
| (fixed)|  or 80px|        (flex-1)                |
|        | collapsed                                |
+--------+-----------------------------------------+
```

**Content Grid**:
- Max container width: None specified (full width with padding)
- Content padding: 24px on sides
- Card grid: CSS Grid or Flexbox with gap-4 (16px)

### 4.4 Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `rounded-none` | 0px | No radius |
| `rounded-sm` | 2px | Checkboxes |
| `rounded` | 4px | Small elements |
| `rounded-md` | 6px | Buttons, inputs |
| `rounded-lg` | 8px | Dialogs, dropdowns |
| `rounded-xl` | 12px | Medium cards |
| `rounded-2xl` | 16px | Cards, sections |
| `rounded-3xl` | 24px | **Primary card style** |
| `rounded-full` | 9999px | Pills, avatars, badges |

**Key Patterns**:
- **Cards/Sections**: `rounded-3xl` (24px)
- **Buttons**: `rounded-md` (6px) or `rounded-full` for pills
- **Inputs**: `rounded-lg` (8px)
- **Modals**: `rounded-2xl` (16px)
- **Badges**: `rounded-full` (pill shape)

### 4.5 Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `shadow-sm` | Small elevation | Buttons, cards (default) |
| `shadow-outline-workspace` | `0px 1px 2px 0px #1018280D` | Subtle card shadow |
| `shadow-errorShadow` | `0px 4px 8px -2px #1018280F` | Error state |
| `shadow-dropShadow` | `0px 24px 48px -12px #1018282E` | Large elevation |
| `shadow-outline-purple` | `0 0 0 4px #4F46E540` | Focus ring |
| `shadow-glow` | Purple glow effect | Special interactive states |
| `shadow-s-yellow` | `0px 4px 6px 0px #D2FB0C66` | Yellow CTA glow |

---

## 5. Component Library

### 5.1 Buttons

#### Button Variants

**Contained (Solid)**
```
Primary:   bg-#0d3ef2, text-white, hover:bg-#1a4ad9
Secondary: bg-#ffffff, text-#343741, border-#e5e7eb
Success:   bg-#22c55e, text-white
Danger:    bg-#ec4b6e, text-white
Warning:   bg-#efa106, text-white
Yellow:    bg-#EEFF9D, text-#111553 (CTA special)
Purple:    bg-purple-gradient, text-white
Neutral:   bg-gray-100, text-gray-700
White:     bg-gray-50, text-primary-500
```

**Outlined**
```
Border color matches variant, transparent background
Hover: fills with light variant color
```

**Text (Ghost)**
```
No background, colored text
Subtle hover background
```

#### Button Sizes

| Size | Padding | Font Size | Icon Size |
|------|---------|-----------|-----------|
| `xxs` | 4px 8px | 10px | 16px |
| `xs` | 4px 12px | 10px | 16px |
| `sm` | 6px 16px | 12px | 16px |
| `md` | 8px 20px | 14px | 16px |
| `lg` | 8px 24px | 16px | 24px |
| `xl` | 12px 28px | 16px | 24px |

#### Button States

```
Default:    Normal appearance
Hover:      Darker background or subtle elevation
Active:     Even darker, slight scale(0.98)
Disabled:   opacity-50, pointer-events-none
Loading:    Show spinner, disable interaction
```

### 5.2 Form Elements

#### Text Input

```
Height: 40px (default)
Padding: 8px 12px (with icon: pl-40px)
Border: 1px solid #e3e7fc
Border radius: 8px (rounded-lg)
Background: #ffffff
Font: 14px medium #111553
Placeholder: #9ca3af

Focus:
  - Border: #0d3ef2
  - No ring (ring-0)

Error:
  - Border: #ec4b6e
  - Error text below: 10px red-700
```

#### Checkbox

```
Size: 18px × 18px
Border: 2px solid #343741
Border radius: 2px (rounded-sm)
Background (unchecked): transparent
Background (checked): #554BFD
Check icon: white checkmark SVG

Disabled: opacity-50
Label: 14px medium #444346, margin-left: 8px
```

#### Radio Button

```
Size: 16px × 16px
Border: 2px solid #D0D5DD
Border radius: full (circle)
Background: #f9fafb

Selected:
  - Border: 4px solid #554BFD
  - Inner dot: same color

Label: 14px medium #111553
Description: 14px normal #69707d
```

#### Toggle/Switch

```
Track size: 36px × 20px
Knob size: 16px × 16px
Border radius: full
Transition: 200ms ease-in-out

Off state:
  - Track: gray-200
  - Knob: white, left position

On state:
  - Track: primary color (varies)
  - Knob: white, right position (translate-x)
```

#### Select/Dropdown

```
Same styling as text input
Dropdown icon: ChevronDown, right side
Dropdown panel:
  - Background: white
  - Border: 1px solid #e5e7eb
  - Shadow: shadow-sm
  - Border radius: 8px
  - Max height: 240px (scrollable)

Option:
  - Padding: 8px 12px
  - Hover: bg-gray-50
  - Selected: bg-primary-100, text-primary-700
```

#### Date Picker

```
Calendar background: white
Header background: #e5e7eb
Selected day: bg-#554BFD, text-white
Today indicator: border-primary
Day hover: bg-gray-200
Month/year selectors: gray text, dropdown style
```

### 5.3 Cards & Containers

#### Section Card (Primary Container)

```
Background: #ffffff
Border: 1px solid #edeffd (optional)
Border radius: 24px (rounded-3xl)
Padding: 16px top, 28px bottom, 24px sides
Margin bottom: 12px
Shadow: shadow-sm (optional)

Header:
  - Title: 18px medium #111553
  - Subtitle: 16px normal #69707d
  - Actions slot: right-aligned buttons/links
```

#### Info Card (KPI Display)

```
Background: white or light variant
Border radius: 16px
Padding: 16px-24px
Contains:
  - Label: 12px #69707d
  - Value: 24px-32px bold #111553
  - Trend indicator: colored arrow + percentage
```

### 5.4 Tables

```
Container: rounded-2xl, border, overflow-hidden
Header row:
  - Background: #f9fafb
  - Text: 12px semibold #0d3ef2
  - Padding: 12px 16px

Body row:
  - Background: white
  - Border-bottom: 1px solid #e5e7eb
  - Padding: 12px 16px
  - Hover: bg-gray-50

Text: 14px normal #111553

Pagination:
  - Buttons: rounded-full, border
  - Active: bg-primary-500, text-white
  - Disabled: opacity-50
```

### 5.5 Modals & Dialogs

```
Overlay: rgba(55, 65, 81, 0.4), backdrop-blur-sm
Dialog:
  - Background: white
  - Border radius: 16px
  - Shadow: shadow-xl
  - Max width: varies (md: 448px, lg: 512px, xl: 576px)
  - Padding: 24px

Header:
  - Icon (optional): 48px, colored background circle
  - Title: 18px semibold #111553
  - Close button: top-right, gray-400, hover:gray-600

Footer:
  - Button alignment: right
  - Gap: 12px
```

### 5.6 Badges & Tags

```
Default:
  - Background: #ffffff
  - Border: 1px solid #CECBFF
  - Text: 12px medium #082796
  - Padding: 4px 8px
  - Border radius: full

Selected:
  - Background: #e0e7ff

Status variants:
  - Success: bg-#EDFCF3, border-#AAF0C7, text-#097347
  - Warning: bg-amber-100, text-amber-700
  - Error: bg-red-100, text-red-700
```

### 5.7 Tooltips

```
Background: #374151
Text: white, 12px
Padding: 8px 12px
Border radius: 6px
Max width: 300px
Arrow: 6px triangle matching background
Position: top (default), adjusts dynamically
```

### 5.8 Notices/Alerts

```
Types: info, warning, critical, positive

Info:
  - Background: white or primary-100
  - Border-left: 4px solid #0d3ef2
  - Icon: InfoIcon, blue

Warning:
  - Background: #fff4cc
  - Border-left: 4px solid #efa106
  - Icon: ExclamationIcon, amber

Critical:
  - Background: #FEF3F2
  - Border-left: 4px solid #F04438
  - Icon: ExclamationIcon, red

Positive:
  - Background: #e4f8ec
  - Border-left: 4px solid #22c55e
  - Icon: CheckIcon, green
```

---

## 6. Charts & Data Visualization

### 6.1 Chart Library

**Primary Library**: Nivo.rocks (@nivo/*)
- @nivo/bar - Bar charts
- @nivo/line - Line charts
- @nivo/pie - Pie/Donut charts
- @nivo/funnel - Funnel charts
- @nivo/heatmap - Heat maps
- @nivo/geo - Geographic maps

### 6.2 Chart Types Used

#### Bar Chart
```
Layout: vertical or horizontal
Variants: grouped, stacked
Height: 200px (vertical), 300px (horizontal)
Colors: Dynamic from data or palette
Axis text: #444444
Grid lines: #6b7280, 0.5px stroke
Border radius on bars: 4px top corners
```

#### Line Chart
```
Height: 200-300px
Line width: 2px
Points: 6px dots
Area fill: gradient from line color to transparent
Curve: smooth (cardinal)
Grid: horizontal lines only
```

#### Pie/Donut Chart
```
Inner radius (donut): 60-70%
Padding between slices: 2px
Label position: outside or legend
Colors: Semantic palette
Center text: Total value display
```

#### Funnel Chart
```
Direction: top to bottom
Colors: Gradient from sea-600 to cherry-600
Labels: Right side, with values
Width: Proportional to value
```

### 6.3 Chart Color Assignments

```javascript
// Traffic Quality
Valid/Good:      sea-600 (#A5D6A7)
Invalid/Blocked: cherry-600 (#EF9A9A)
Suspicious:      yellow-600 (#FFF59D)

// Additional data series
Series 1: neon-600 (#79C9FF)
Series 2: violet-600 (#C9B6FF)
Series 3: rose-600 (#FF8080)
Series 4: sea-700 (#91C293)
Series 5: cherry-700 (#DB8686)
```

### 6.4 Chart Tooltip

```
Background: white
Border: 1px solid #edeffd
Border radius: 8px
Shadow: shadow-sm
Padding: 8px

Content:
  - Color dot: 8px circle, series color
  - Label: 12px #69707d
  - Value: 14px semibold #111553
```

### 6.5 Map Chart (Choropleth)

```
Projection: Natural Earth
Color scale: sea-300 to sea-700 (gradient)
Default/No data: #f5f5f5
Border: #e5e7eb, 1px
Hover: Darker shade + tooltip
```

---

## 7. Navigation & Information Architecture

### 7.1 Top Navigation Bar (Navbar)

```
Height: 72px
Background: white
Border-bottom: 1px solid #edeffd
Position: fixed, top
Z-index: 50

Contents (left to right):
1. Logo (link to home)
2. Asset/Workspace Switcher (dropdown)
3. [Spacer]
4. Action buttons (Add Website, Continue Setup - contextual)
5. Knowledge Base (icon button)
6. Notifications (bell icon with badge)
7. User Menu (avatar dropdown)
```

### 7.2 Sidebar Navigation

```
Width: 230px (expanded), 80px (collapsed)
Background: white
Border-right: 1px solid #edeffd
Position: fixed, left
Top: 72px (below navbar)
Height: calc(100vh - 72px)

Sections:
├── REPORTING
│   ├── Dashboard
│   ├── Analytics
│   ├── Threat
│   ├── Click Forensics
│   └── Scheduled Reports
├── PROTECTION
│   ├── AI & Custom Rules
│   ├── Exclusions
│   └── Blacklist
├── CONNECTIONS
│   ├── Authorizations
│   └── Ad Accounts
└── [Bottom]
    ├── Share/Affiliate Promo
    ├── Settings
    └── User Info
```

**Menu Item Styling**:
```
Padding: 12px 16px
Border radius: 8px
Text: 14px medium #5e5e7c

Hover:
  - Background: #f3f4f6

Active:
  - Background: #f3f4f6
  - Text: #0d3ef2
  - Left border: 3px solid #0d3ef2

Icon: 20px, same color as text
```

### 7.3 Settings Navigation

Settings uses a left-side sub-navigation:

```
Sections:
├── WEBSITE
│   ├── Site Preferences
│   └── Tracking Code
├── WORKSPACE
│   ├── Preferences
│   ├── Team Access
│   └── Billing
└── PERSONAL
    ├── Offers (with badge)
    ├── Profile
    ├── Notifications
    └── Security
```

### 7.4 Breadcrumbs

```
Used in: Protection pages with campaign drill-down

Format: Home / Ad Account / Campaign
Separator: " / " or ChevronRight icon
Text: 14px, #69707d
Link hover: #0d3ef2
Current page: #111553, no link
```

---

## 8. Page Templates & Layouts

### 8.1 Main Layout Structure

```
+------------------------------------------------------------------+
|                        Navbar (72px)                              |
+--------+---------------------------------------------------------+
|        |  Page Header (optional - title, date picker, actions)   |
|        +---------------------------------------------------------+
| Sidebar|                                                         |
| (230px)|               Main Content Area                         |
|        |           (padding: 24px all sides)                     |
|        |                                                         |
|        |  +------------------------------------------------+    |
|        |  |              Section Card                       |    |
|        |  |  +------------------------------------------+   |    |
|        |  |  |            Content                       |   |    |
|        |  |  +------------------------------------------+   |    |
|        |  +------------------------------------------------+    |
|        |                                                         |
+--------+---------------------------------------------------------+
```

### 8.2 Dashboard Page Template

```
+------------------------------------------------------------------+
| Page Header                                                       |
| [Date Range Picker] [Ad Account Filter] [Campaign Filter]        |
+------------------------------------------------------------------+
| KPI Cards Row (3-4 cards)                                        |
| [Total Clicks] [Invalid %] [Blocked] [Savings]                   |
+------------------------------------------------------------------+
|                                                                   |
| +---------------------------+  +--------------------------------+ |
| |     Traffic Timeline      |  |        Source Map              | |
| |     (Line Chart)          |  |     (Choropleth)               | |
| +---------------------------+  +--------------------------------+ |
|                                                                   |
| +---------------------------+  +--------------------------------+ |
| |    Threat Activity        |  |       Top Threats              | |
| |    (Bar Chart)            |  |       (Table)                  | |
| +---------------------------+  +--------------------------------+ |
+------------------------------------------------------------------+
```

### 8.3 Analytics Page Template

```
+------------------------------------------------------------------+
| Page Header + Filters                                             |
+------------------------------------------------------------------+
| Stats Summary Row (horizontal scroll)                             |
| [Metric 1] [Metric 2] [Metric 3] [Metric 4] ...                  |
+------------------------------------------------------------------+
| +---------------------------+  +--------------------------------+ |
| |    Traffic Quality        |  |    Campaign Performance        | |
| |    (Stacked Bar)          |  |    (Table with sorting)        | |
| +---------------------------+  +--------------------------------+ |
|                                                                   |
| +--------------------------------------------------------------+ |
| |                    Detailed Analytics                         | |
| |                    (Full width table)                         | |
| +--------------------------------------------------------------+ |
+------------------------------------------------------------------+
```

### 8.4 Settings Page Template

```
+------------------------------------------------------------------+
| Settings Navbar (tabs or no header)                               |
+--------+---------------------------------------------------------+
| Side   |                                                         |
| Nav    |  +------------------------------------------------+    |
| (220px)|  |              Settings Section                   |    |
|        |  |  Title                                          |    |
|        |  |  Description                                    |    |
|        |  |  +------------------------------------------+   |    |
|        |  |  |     Form Fields / Options               |   |    |
|        |  |  +------------------------------------------+   |    |
|        |  |  [Save Button]                                  |    |
|        |  +------------------------------------------------+    |
|        |                                                         |
+--------+---------------------------------------------------------+
```

### 8.5 Protection Page Template

```
+------------------------------------------------------------------+
| Breadcrumbs: Asset > Ad Account > Campaign                        |
| [Scope Selector]                                                  |
+------------------------------------------------------------------+
| +---------------------------+  +--------------------------------+ |
| |    Protection Panel       |  |     Custom Rules Panel         | |
| |    - Toggle switches      |  |     - Rules list               | |
| |    - Mode selector        |  |     - Add rule button          | |
| |    - Description          |  |     - Rule editor              | |
| +---------------------------+  +--------------------------------+ |
+------------------------------------------------------------------+
```

---

## 9. User Journeys & Flows

### 9.1 Onboarding Flow (New User)

```
1. Sign Up (Auth0)
   └── Email/Password or Social Login

2. Email Verification (/emails/verify)
   └── Check inbox, click verification link

3. Workspace Creation Wizard (/start/standard)
   Step 1: Monthly Ad Spend Input
           - Slider or text input
           - Currency selector

   Step 2: Consultation (Optional)
           - Schedule call with expert
           - Or skip

   Step 3: Plan Selection
           - Plan comparison cards
           - Feature highlights
           - Price display
           - Select button

   Step 4: Tracking Code Setup (/setup/{accountId})
           - Copy tracking script
           - Platform-specific instructions
           - Verification status

4. Dashboard (activated)
   └── First-run experience/demo data option
```

### 9.2 Daily Monitoring Flow

```
1. Login → Dashboard

2. Review KPIs
   └── Check invalid click percentage
   └── Review blocked traffic
   └── Note any unusual spikes

3. Drill Down (if needed)
   └── Click on metric card → Analytics
   └── Filter by date range, platform, campaign

4. Investigate Threats
   └── Threat page for detailed analysis
   └── Click Forensics for individual clicks

5. Adjust Protection (if needed)
   └── Protection → AI & Custom Rules
   └── Modify sensitivity
   └── Add/remove rules
```

### 9.3 Ad Platform Connection Flow

```
1. Settings → Connections
   └── Or Sidebar → Authorizations

2. Select Platform Tab
   └── Google Ads | Facebook Ads | Bing Ads

3. Choose Connection Type
   └── Individual Account (OAuth)
   └── Manager/MCC Account

4. OAuth Flow
   └── Redirect to platform
   └── Grant permissions
   └── Return to app

5. Account Selection
   └── List connected accounts
   └── Select which to protect

6. Confirmation
   └── Success message
   └── Redirect to dashboard or protection setup
```

### 9.4 Team Management Flow

```
1. Settings → Team Access

2. View Current Team
   └── Table: Name, Email, Role, Actions

3. Invite Member
   └── Click "Add Member"
   └── Modal: Email input
   └── Select role: OWNER, WRITE, READ
   └── Send Invite

4. Manage Invitations
   └── Pending invites list
   └── Resend or revoke

5. Manage Existing Members
   └── Change role dropdown
   └── Remove member (with confirmation)
```

### 9.5 Billing & Subscription Flow

```
1. Settings → Billing

2. Tabs: Subscription | Payment Methods | Invoices

Subscription Tab:
├── Current plan display
├── Usage metrics
├── Upgrade/Downgrade button
└── Plan comparison modal

Payment Methods Tab:
├── Saved cards list
├── Default indicator
├── Add new card
├── Remove card (with confirmation)
└── Card expiry warning banner

Invoices Tab:
├── Invoice history table
├── Date, Amount, Status, Download
├── Date range filter
└── PDF download links
```

### 9.6 Exclusion/Whitelist Management Flow

```
1. Sidebar → Exclusions (or Blacklist)

2. View Current Rules
   └── Filter by: Entity, Scope, Status, Campaign
   └── Table with pagination

3. Create New Exclusion
   └── Click "Add Exclusion"
   └── Modal form:
       - Entity type (IP, Domain, User, etc.)
       - Value input
       - Scope selection
       - Campaign assignment (optional)
   └── Save

4. Edit/Delete Existing
   └── Row actions menu
   └── Edit in drawer/modal
   └── Delete with confirmation
```

---

## 10. States & Feedback Patterns

### 10.1 Loading States

**Full Page Loading**:
```
- Centered spinner
- "Loading..." text below
- Gray overlay (optional)
```

**Section Loading**:
```
- Inline spinner within section
- Preserves layout
- Disabled interaction
```

**Button Loading**:
```
- Spinner replaces icon or appears left of label
- Disabled state
- Label change: "Save" → "Saving..."
```

**Skeleton Loading**:
```
- Placeholder shapes matching content
- Animated shimmer effect
- Gray-200 background
```

### 10.2 Empty States

**No Data**:
```
- Icon: InboxIcon or relevant illustration
- Headline: "No data yet"
- Subtext: Explanation and action
- CTA Button (optional)

Example:
[Icon]
"No traffic data"
"Select a different time period or connect an ad account"
[Connect Account]
```

**Zero Results (Search/Filter)**:
```
- Icon: SearchIcon
- "No results found"
- "Try adjusting your filters"
- [Clear Filters] button
```

**First Use**:
```
- Illustration or icon
- Welcome message
- Quick start guide or CTA
```

### 10.3 Error States

**Form Validation Error**:
```
- Red border on field
- Error message below: 10px, #a9255b
- Icon: ExclamationCircle
```

**API/Server Error**:
```
- Toast notification (bottom-center)
- Red background
- Error message
- Auto-dismiss: 5 seconds
```

**Page Error**:
```
- Full page error display
- Icon: ExclamationIcon
- "Something went wrong"
- Error details
- [Try Again] button
```

**Network Error**:
```
- Inline error message
- [Retry] button
- Preserve previous data if available
```

### 10.4 Success States

**Action Confirmation**:
```
- Toast notification (bottom-center)
- Green background (#22c55e)
- Check icon
- "Changes saved" or specific message
- Auto-dismiss: 3 seconds
```

**Form Submission**:
```
- Success toast
- Form reset or redirect
- Green check indicator
```

### 10.5 Warning States

**Card Expiring Soon**:
```
- Banner at top of page
- Yellow/amber background
- Warning icon
- "Your card expires soon"
- [Update Payment Method] link
```

**Setup Incomplete**:
```
- Notice component in dashboard
- "Finish setup to start protecting"
- Progress indicator
- [Continue Setup] CTA
```

### 10.6 Demo Mode

```
- Visual indicator: "Demo Data" badge
- Certain actions disabled with tooltip
- Sample data displayed
- Toggle in account switcher
```

---

## 11. Responsive Design

### 11.1 Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| `mobile` | < 640px | Mobile phones |
| `sm` | ≥ 640px | Large phones |
| `md` | ≥ 768px | Tablets |
| `lg` | ≥ 1024px | Small laptops |
| `xl` | ≥ 1280px | Desktops |
| `laptop` | ≥ 1281px | Custom laptop |
| `3xl` | ≥ 1600px | Large monitors |
| `4xl` | ≥ 1750px | Extra large |

### 11.2 Mobile Adaptations

**Sidebar**:
```
Mobile: Hidden, slide-over drawer (hamburger menu trigger)
Desktop: Fixed, collapsible
```

**Navbar**:
```
Mobile: Simplified, essential actions only
Desktop: Full controls
```

**Layout**:
```
Mobile: Single column, stacked sections
Desktop: Multi-column, side-by-side
```

**Tables**:
```
Mobile: Horizontal scroll or card view
Desktop: Full table with all columns
```

**Buttons**:
```
Mobile: Full width (mobile:w-full)
Desktop: Auto width
```

**Typography**:
```
Mobile: Larger touch targets, increased text (mobile:!text-lg for buttons)
Desktop: Standard sizing
```

### 11.3 Responsive Grid Examples

**Dashboard Cards**:
```
Mobile: 1 column
Tablet: 2 columns
Desktop: 3-4 columns
```

**Chart + Table Layout**:
```
Mobile: Stack vertically
Desktop: Side by side (50/50 or 60/40)
```

---

## 12. Interactions & Animations

### 12.1 Transitions

**Default Transition**:
```css
transition: all 200ms ease-in-out;
```

**Modal/Dialog**:
```css
/* Overlay */
transition: opacity 300ms ease;
/* Dialog */
transition: transform 300ms ease, opacity 300ms ease;
transform: scale(0.95) → scale(1);
opacity: 0 → 1;
```

**Drawer/Slide-over**:
```css
transition: transform 300ms ease;
transform: translateX(100%) → translateX(0);
```

**Dropdown**:
```css
transition: opacity 150ms ease, transform 150ms ease;
transform: translateY(-8px) → translateY(0);
```

### 12.2 Hover Effects

**Buttons**:
```
Background: Darken by 10%
Cursor: pointer
Transform: none (or subtle scale(1.02) for CTAs)
```

**Cards**:
```
Background: Subtle gray (gray-50)
Shadow: Increase slightly
Border: May darken
```

**Links**:
```
Color: Primary-600 (darker)
Text-decoration: underline (optional)
```

**Table Rows**:
```
Background: gray-50
```

### 12.3 Focus States

```css
/* Default focus ring */
outline: none;
ring: 2px solid primary-500;
ring-offset: 2px;

/* Purple focus ring */
box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.25);
```

### 12.4 Loading Spinner

```css
/* Standard spinner */
animation: spin 1s linear infinite;

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Size: 16px-24px depending on context */
/* Color: primary-500 or white (on dark backgrounds) */
```

### 12.5 Toast Notifications

```
Position: bottom-center
Enter: Slide up + fade in
Exit: Fade out
Duration: 3-5 seconds (auto-dismiss)
Max visible: 1
```

---

## 13. Iconography

### 13.1 Icon Libraries

**Primary**: Heroicons (@heroicons/react v1)
- Style: Outline (default), Solid (for emphasis)
- Weight: Consistent stroke width

**Secondary**: React Icons
- Remix Icons (ri-)
- Chakra Glyphs (cg-)
- Ant Design (ai-)

### 13.2 Icon Sizes

| Context | Size |
|---------|------|
| Inline with text | 16px (h-4 w-4) |
| Button icons | 16px-20px |
| Navigation | 20px (h-5 w-5) |
| Section headers | 24px (h-6 w-6) |
| Empty states | 48px-64px |
| Modal type icons | 48px |

### 13.3 Common Icons

```
Navigation:
- HomeIcon (Dashboard)
- ChartBarIcon (Analytics)
- ShieldCheckIcon (Protection)
- ExclamationIcon (Threat)
- CursorClickIcon (Click Forensics)
- DocumentReportIcon (Reports)
- CogIcon (Settings)
- BellIcon (Notifications)

Actions:
- PlusIcon (Add)
- PencilIcon (Edit)
- TrashIcon (Delete)
- DownloadIcon (Export)
- RefreshIcon (Refresh)
- XIcon (Close)
- CheckIcon (Confirm/Success)

Status:
- CheckCircleIcon (Success)
- ExclamationCircleIcon (Warning)
- XCircleIcon (Error)
- InformationCircleIcon (Info)

Data:
- TrendingUpIcon (Positive trend)
- TrendingDownIcon (Negative trend)
- ArrowUpIcon / ArrowDownIcon (Sort)
- FilterIcon (Filters)
- SearchIcon (Search)
```

---

## 14. Design Tokens Reference

### 14.1 CSS Custom Properties (Complete List)

```css
:root {
  /* Background */
  --background: #ffffff;
  --bg-plan: #F2F2F2;

  /* Primary Blues */
  --color-primary-100: #e0e7ff;
  --color-primary-200: #a7c7fe;
  --color-primary-300: #7ba7fe;
  --color-primary-400: #5a8dfd;
  --color-primary-500: #0d3ef2;
  --color-primary-600: #1a4ad9;
  --color-primary-700: #082796;
  --color-primary-800: #153996;
  --color-primary-900: #041349;

  /* Grays */
  --color-gray-50: #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-200: #e5e7eb;
  --color-gray-300: #d1d5db;
  --color-gray-400: #9ca3af;
  --color-gray-500: #6b7280;
  --color-gray-600: #4b5563;
  --color-gray-700: #374151;

  /* Status Colors */
  --color-green-100: #e4f8ec;
  --color-green-500: #22c55e;
  --color-green-700: #136e35;
  --color-red-500: #ec4b6e;
  --color-red-700: #a9255b;
  --color-amber-500: #efa106;
  --color-amber-700: #a35e0a;
  --color-purple-500: #9649df;

  /* Chart Palette */
  --color-sea-600: #A5D6A7;
  --color-cherry-600: #EF9A9A;
  --color-yellow-600: #FFF59D;
  --color-neon-600: #79C9FF;
  --color-violet-600: #C9B6FF;

  /* Text Colors */
  --base-blue: #111553;
  --color-text-heading: #080736;
  --color-text-dark: #4e545e;
  --color-text-secondary: #69707d;
  --color-text-tertiary: #a8aeb9;
  --color-text-menu: #5e5e7c;

  /* UI Colors */
  --card-background: #ffffff;
  --card-border: #edeffd;
  --input-border: #e3e7fc;
  --table-header-background: #f9fafb;
  --modal-background: rgba(55, 65, 81, 0.4);
  --selected-menu-item: #f3f4f6;

  /* Interactive */
  --t-dark-blue: #554BFD;
  --t-purple: #918AFF;
  --t-light-purple: #5E54FD;
  --t-trend-up: #17B26A;
  --t-danger: #F04438;

  /* Special */
  --b-yellow: #EEFF9D;
  --b-yellow-dark: #BAE100;
  --t-bar-pink: #FFAFF8;

  /* Toast */
  --toastify-color-success: #22c55e;
  --toastify-color-error: #ef4444;
  --toastify-color-warning: #f59e0b;
  --toastify-color-info: #2461fd;
}
```

### 14.2 Tailwind Utilities Reference

```
/* Border Radius */
rounded-sm: 2px
rounded-md: 6px
rounded-lg: 8px
rounded-xl: 12px
rounded-2xl: 16px
rounded-3xl: 24px
rounded-full: 9999px

/* Shadows */
shadow-sm: Standard shadow
shadow-outline-workspace: 0px 1px 2px 0px #1018280D
shadow-errorShadow: 0px 4px 8px -2px #1018280F
shadow-dropShadow: 0px 24px 48px -12px #1018282E
shadow-outline-purple: 0 0 0 4px #4F46E540

/* Transitions */
transition: default
duration-150: 150ms
duration-200: 200ms
duration-300: 300ms
ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)
```

---

## Summary for Designers

### Quick Reference Card

| Element | Specification |
|---------|--------------|
| **Primary Font** | Host Grotesk |
| **Base Text Size** | 14px/20px |
| **Primary Color** | #0d3ef2 |
| **Interactive Purple** | #554BFD |
| **Primary Text** | #111553 |
| **Secondary Text** | #69707d |
| **Background** | #F2F2F2 |
| **Card Background** | #ffffff |
| **Card Border** | #edeffd |
| **Card Radius** | 24px |
| **Button Radius** | 6px |
| **Input Radius** | 8px |
| **Default Spacing** | 16px |
| **Section Padding** | 16px 24px 28px 24px |

### Key Design Principles

1. **Clean & Professional** - Minimal ornamentation, let data speak
2. **Generous Whitespace** - Plenty of breathing room
3. **Rounded Everything** - Soft, friendly corners (24px for cards)
4. **Semantic Colors** - Green=good, Red=bad, Yellow=warning
5. **Chart-First** - Data visualization is the hero
6. **Consistent Spacing** - Use the spacing scale consistently
7. **Accessible** - Proper color contrast, focus states, labels

---

*Document Version: 1.0*
*Last Updated: 2024*
*For: ClickGuard Customer Dashboard (Non-Admin)*
