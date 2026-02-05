---
name: clickguard-ui-design
description: Design and implement UI for ClickGuard customer dashboard using Next.js 16, Tailwind v4, and FlyonUI. Triggers include "design", "mockup", "UI", "component", "dashboard", "page layout", or visual styling tasks.
---

# ClickGuard UI Design System (Next.js & Tailwind v4)

Design system for the ClickGuard customer-facing dashboard.
**Stack:** Next.js 16 (App Router), React 19, Tailwind CSS v4, FlyonUI.

## Quick Reference

```
┌─────────────────────────────────────────────────────────────┐
│ Font Family:      Host Grotesk ('font-sans')                │
│ Base Font:        14px/20px (text-base)                     │
│ Primary Color:    bg-primary-500 (#0137ff)                  │
│ Interactive:      text-t-dark-blue (#554BFD)                │
│ Text Primary:     text-t-base-blue (#111553)                │
│ Text Secondary:   text-t-secondary (#475467)                │
│ Page Background:  bg-page-bg (#F2F2F2)                      │
│ Card Background:  bg-white                                  │
│ Card Border:      border-card-border (#eaecf0)              │
│ Card Radius:      rounded-3xl (24px)                        │
│ Button Radius:    rounded-md (6px)                          │
│ Input Radius:     rounded-lg (8px)                          │
│ Padding:          p-6 (24px standard container padding)     │
└─────────────────────────────────────────────────────────────┘
```

## Essential Color Tokens (Tailwind)

### Primary & Action
| Token Class | Hex Value | Usage |
|-------------|-----------|-------|
| `bg-primary-500` | `#0137ff` | Primary buttons, active states (Main Brand) |
| `bg-primary-600` | `#554bfd` | Hover states, accents |
| `bg-primary-50` | `#eeedfe` | Light backgrounds, subtle highlights |
| `text-t-dark-blue`| `#554BFD` | Interactive text, links |

### Text Colors
| Token Class | Hex Value | Usage |
|-------------|-----------|-------|
| `text-t-base-blue` | `#111553` | **Default Body Text** |
| `text-t-heading` | `#080736` | Headings |
| `text-t-secondary` | `#475467` | Secondary/Muted text |
| `text-t-menu` | `#444346` | Navigation items |

### Status Colors
| Token Class | Hex (Ref) | Usage |
|-------------|-----------|-------|
| `text-status-normal` | `#17B26A` | Success, Trending Up |
| `text-status-suspicious` | `#F79009` | Warning, Review Needed |
| `text-status-bad` | `#F04438` | Error, Blocked, Threat |
| `text-status-ignored` | `#667085` | Ignored, Neutral |

### Chart/Data Visualization
| Color Name | Token Class | Usage |
|------------|-------------|-------|
| Sea (Green) | `text-sea-600` / `bg-sea-600` | Valid Traffic |
| Cherry (Red) | `text-cherry-600` / `bg-cherry-600` | Invalid/Blocked |
| Yellow | `text-yellow-600` / `bg-yellow-600` | Suspicious |
| Neon (Blue) | `text-neon-600` / `bg-neon-600` | Informational |

## Typography (Host Grotesk)

**Note:** The `font-sans` utility is configured to use Host Grotesk.

*   **Page Title**: `text-2xl font-bold text-t-heading` (24px)
*   **Section Title**: `text-xl font-medium text-t-base-blue` (18px)
*   **Card Title**: `text-lg font-medium text-t-base-blue` (16px)
*   **Body Text**: `text-base font-normal text-t-base-blue` (14px - Default)
*   **Small/Label**: `text-sm font-medium text-t-secondary` (12px)

## Component Patterns (FlyonUI + Tailwind)

### Section Card
Standard container for dashboard content.
```tsx
<div className="bg-white border border-card-border rounded-3xl p-6 mb-3 shadow-sm">
  <div className="flex justify-between items-center mb-6">
    <h3 className="text-xl font-medium text-t-base-blue">Section Title</h3>
  </div>
  {/* Content */}
</div>
```

### Primary Button
Using FlyonUI `.btn` class with overrides if necessary, or tailored utilities.
```tsx
<button type="button" className="btn btn-primary bg-primary-500 hover:bg-primary-600 text-white rounded-md px-5 border-none">
  Primary Action
</button>
```

### Secondary Button
```tsx
<button type="button" className="btn bg-white border border-gray-200 text-t-menu hover:bg-gray-50 rounded-md px-5">
  Cancel
</button>
```

### Form Input
```tsx
<div className="form-control">
  <label className="label">
    <span className="label-text text-sm font-medium text-t-base-blue">Email Address</span>
  </label>
  <input 
    type="email" 
    placeholder="name@company.com" 
    className="input border-input-border text-t-base-blue focus:border-primary-500 rounded-lg w-full" 
  />
</div>
```

### Badge/Status Pill
```tsx
<span className="badge bg-primary-50 text-primary-600 border-none rounded-full px-3 py-1 text-xs font-medium">
  Active
</span>
```

### Icons (Iconify)
Use the Tailwind CSS plugin syntax for icons.
```tsx
<span className="icon-[tabler--user] text-xl"></span>
<span className="icon-[heroicons--home] text-lg text-t-menu"></span>
```

## Layout Structure

**Dashboard Layout**
```tsx
<div className="min-h-screen bg-page-bg font-sans text-t-base-blue">
  {/* Navbar (Fixed 72px) */}
  <header className="h-[72px] ..." />
  
  <div className="flex">
    {/* Sidebar (230px) */}
    <aside className="w-[230px] ..." />
    
    {/* Main Content */}
    <main className="flex-1 p-6">
      {/* Cards match the Section Card pattern */}
    </main>
  </div>
</div>
```

## Rules & Best Practices

1.  **Tailwind First**: Use utility classes (e.g., `p-6`, `mb-4`). Do not write custom CSS unless absolutely necessary.
2.  **Semantic Colors**: Always use the defined tokens (e.g., `text-t-base-blue`, `bg-page-bg`) instead of hardcoded hex values.
3.  **FlyonUI Components**: Leverage FlyonUI for complex interactive components (dropdowns, modals, drawers) but apply ClickGuard branding (border radius `rounded-3xl` for cards, `rounded-md` for buttons).
4.  **Icons**: Use `span` tags with `icon-[set--name]` classes.
5.  **Whitespace**: Respect the 4px grid. Standard gap is `gap-3` (12px) or `gap-4` (16px). Cards usually have `mb-3` or `mb-4`.
6.  **Typography**: Default is `Host Grotesk`. Ensure `font-sans` is on the root layout (already configured).

## HTML/Figma Handoff
When asking for code from a Figma design:
- Request **React/Next.js** components using **Tailwind CSS**.
- Explicitly mention "**FlyonUI** compatibility" if standard UI elements are involved.
