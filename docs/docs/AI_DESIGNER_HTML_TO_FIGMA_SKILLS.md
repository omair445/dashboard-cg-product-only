# AI Designer Skills - HTML to Figma Conversion

> **Purpose**: This skills file is optimized for AI agents generating HTML/CSS that will be converted to Figma using HTML-to-Figma plugins. All values are in exact CSS format with pixel values for precise conversion.

---

## CRITICAL INSTRUCTIONS FOR HTML-TO-FIGMA

1. **Use exact pixel values** - No `rem`, `em`, or relative units
2. **Use hex colors** - Not CSS variables or rgba where possible
3. **Include all CSS properties** - Plugins need explicit values
4. **Use inline styles or style blocks** - For reliable conversion
5. **Structure HTML semantically** - Proper nesting for Figma layers
6. **Name elements with classes** - Becomes Figma layer names
7. **Use standard fonts** - Or embed web fonts

---

## CSS RESET FOR FIGMA CONVERSION

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Host Grotesk', 'Mulish', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: #111553;
  background-color: #F2F2F2;
  -webkit-font-smoothing: antialiased;
}
```

---

## COLOR PALETTE (HEX VALUES)

### Primary Blues
```css
--primary-100: #e0e7ff;
--primary-200: #a7c7fe;
--primary-300: #7ba7fe;
--primary-400: #5a8dfd;
--primary-500: #0d3ef2;  /* PRIMARY BRAND */
--primary-600: #1a4ad9;  /* Hover */
--primary-700: #082796;
--primary-800: #153996;
--primary-900: #041349;

/* Interactive Purple */
--interactive: #554BFD;  /* Checkboxes, toggles */
```

### Status Colors
```css
/* Success */
--success-bg: #e4f8ec;
--success: #22c55e;
--success-text: #136e35;
--trend-up: #17B26A;

/* Error */
--error-bg: #fdbcb8;
--error: #ec4b6e;
--error-text: #a9255b;
--danger: #F04438;
--danger-bg: #FEF3F2;

/* Warning */
--warning-bg: #fff4cc;
--warning: #efa106;
--warning-text: #a35e0a;

/* Info */
--info-bg: #f3eafb;
--info: #9649df;
--info-text: #5e3187;
```

### Chart/Data Colors
```css
/* Traffic Quality */
--chart-valid: #A5D6A7;      /* Green - Good traffic */
--chart-invalid: #EF9A9A;    /* Red - Bad traffic */
--chart-suspicious: #FFF59D; /* Yellow - Suspicious */
--chart-info: #79C9FF;       /* Blue - Informational */
--chart-highlight: #C9B6FF;  /* Purple - Highlighted */
--chart-accent: #FFAFF8;     /* Pink - Accent */

/* Extended palette */
--sea-700: #91C293;
--sea-600: #A5D6A7;
--sea-500: #CAE8CB;
--sea-400: #E4F4E5;

--cherry-700: #DB8686;
--cherry-600: #EF9A9A;
--cherry-500: #F8D0D0;
--cherry-400: #FBE5E5;

--yellow-700: #FCD113;
--yellow-600: #FFE445;
--yellow-500: #FFF59D;
--yellow-400: #FFFAC2;

--neon-700: #32AFFE;
--neon-600: #79C9FF;
--neon-500: #A3D8FF;
--neon-400: #DFEFFF;

--violet-700: #AB88FD;
--violet-600: #C9B6FF;
--violet-500: #DED5FF;
--violet-400: #EEE8FF;
```

### Grays & Neutrals
```css
--gray-50: #f9fafb;
--gray-100: #f3f4f6;
--gray-200: #e5e7eb;
--gray-300: #d1d5db;
--gray-400: #9ca3af;
--gray-500: #6b7280;
--gray-600: #4b5563;
--gray-700: #374151;
```

### Text Colors
```css
--text-primary: #111553;    /* Main text */
--text-heading: #080736;    /* Headings */
--text-body: #4e545e;       /* Body text */
--text-secondary: #69707d;  /* Secondary */
--text-tertiary: #a8aeb9;   /* Muted */
--text-placeholder: #9ca3af;
--text-menu: #5e5e7c;
--text-link: #0d3ef2;
--text-link-hover: #1a4ad9;
```

### UI Colors
```css
--bg-page: #F2F2F2;
--bg-card: #ffffff;
--bg-input: #ffffff;
--bg-hover: #f3f4f6;
--bg-selected: #e0e7ff;
--bg-table-header: #f9fafb;
--bg-modal-overlay: rgba(55, 65, 81, 0.4);

--border-card: #edeffd;
--border-input: #e3e7fc;
--border-divider: #e5e7eb;
--border-light: #edeffd;

/* Special */
--yellow-cta: #EEFF9D;
--yellow-cta-dark: #BAE100;
```

---

## TYPOGRAPHY (EXACT CSS)

### Font Family
```css
font-family: 'Host Grotesk', 'Mulish', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Font Weights
```css
font-weight: 400; /* Normal - body text */
font-weight: 500; /* Medium - labels, buttons (MOST USED) */
font-weight: 600; /* Semibold - emphasis */
font-weight: 700; /* Bold - headings */
font-weight: 800; /* Extrabold - hero metrics */
```

### Type Scale (Copy-Paste Ready)

```css
/* XS - Meta, badges */
.text-xs {
  font-size: 10px;
  line-height: 12px;
}

/* SM - Captions, help text */
.text-sm {
  font-size: 12px;
  line-height: 16px;
}

/* BASE - Body text, inputs (DEFAULT) */
.text-base {
  font-size: 14px;
  line-height: 20px;
}

/* LG - Subheadings */
.text-lg {
  font-size: 16px;
  line-height: 24px;
}

/* XL - Section headers */
.text-xl {
  font-size: 18px;
  line-height: 28px;
}

/* 2XL - Page titles */
.text-2xl {
  font-size: 24px;
  line-height: 32px;
}

/* 3XL - Large headings */
.text-3xl {
  font-size: 30px;
  line-height: 36px;
}

/* 5XL - Dashboard metrics */
.text-5xl {
  font-size: 32px;
  line-height: 40px;
}

/* 6XL - Hero numbers */
.text-6xl {
  font-size: 48px;
  line-height: 54px;
}
```

### Typography Presets (Complete CSS)

```css
/* Page Title */
.page-title {
  font-family: 'Host Grotesk', sans-serif;
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  color: #080736;
}

/* Section Title */
.section-title {
  font-family: 'Host Grotesk', sans-serif;
  font-size: 18px;
  line-height: 28px;
  font-weight: 500;
  color: #111553;
}

/* Card Title */
.card-title {
  font-family: 'Host Grotesk', sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: #111553;
}

/* Body Text */
.body-text {
  font-family: 'Host Grotesk', sans-serif;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #111553;
}

/* Secondary Text */
.secondary-text {
  font-family: 'Host Grotesk', sans-serif;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #69707d;
}

/* Caption/Small */
.caption {
  font-family: 'Host Grotesk', sans-serif;
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  color: #69707d;
}

/* Label */
.label {
  font-family: 'Host Grotesk', sans-serif;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  color: #111553;
}

/* Button Text */
.button-text {
  font-family: 'Host Grotesk', sans-serif;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
}

/* Metric Value */
.metric-value {
  font-family: 'Host Grotesk', sans-serif;
  font-size: 32px;
  line-height: 40px;
  font-weight: 700;
  color: #111553;
}

/* Metric Label */
.metric-label {
  font-family: 'Host Grotesk', sans-serif;
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  color: #69707d;
}
```

---

## SPACING VALUES (PIXELS)

```css
--space-0: 0px;
--space-0-5: 2px;
--space-1: 4px;
--space-1-5: 6px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-7: 28px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
```

---

## BORDER RADIUS (PIXELS)

```css
--radius-none: 0px;
--radius-sm: 2px;      /* Checkboxes */
--radius-default: 4px;
--radius-md: 6px;      /* Buttons */
--radius-lg: 8px;      /* Inputs, dropdowns */
--radius-xl: 12px;     /* Medium cards */
--radius-2xl: 16px;    /* Modals */
--radius-3xl: 24px;    /* Section cards (PRIMARY) */
--radius-full: 9999px; /* Pills, badges */
```

---

## SHADOWS (CSS BOX-SHADOW)

```css
--shadow-sm: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
--shadow-md: 0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);
--shadow-lg: 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03);
--shadow-xl: 0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03);
--shadow-card: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
--shadow-dropdown: 0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08);
--shadow-focus: 0 0 0 4px rgba(79, 70, 229, 0.25);
--shadow-yellow-glow: 0px 4px 6px 0px rgba(210, 251, 12, 0.4);
```

---

## COMPONENT HTML TEMPLATES

### Button - Primary

```html
<button class="btn-primary" style="
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 20px;
  background-color: #0d3ef2;
  color: #ffffff;
  font-family: 'Host Grotesk', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
">
  Button Label
</button>

<!-- Hover State -->
<button class="btn-primary-hover" style="
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 20px;
  background-color: #1a4ad9;
  color: #ffffff;
  font-family: 'Host Grotesk', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
">
  Button Label
</button>
```

### Button - Secondary

```html
<button class="btn-secondary" style="
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 20px;
  background-color: #ffffff;
  color: #343741;
  font-family: 'Host Grotesk', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
">
  Button Label
</button>
```

### Button - Danger

```html
<button class="btn-danger" style="
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 20px;
  background-color: #ec4b6e;
  color: #ffffff;
  font-family: 'Host Grotesk', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
">
  Delete
</button>
```

### Button - Success

```html
<button class="btn-success" style="
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 20px;
  background-color: #22c55e;
  color: #ffffff;
  font-family: 'Host Grotesk', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
">
  Save
</button>
```

### Button - Yellow CTA

```html
<button class="btn-yellow-cta" style="
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 20px;
  background-color: #EEFF9D;
  color: #111553;
  font-family: 'Host Grotesk', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0px 4px 6px 0px rgba(210, 251, 12, 0.4);
">
  Get Started
</button>
```

### Button Sizes

```html
<!-- XS Button -->
<button style="padding: 4px 12px; font-size: 10px; line-height: 12px;">XS</button>

<!-- SM Button -->
<button style="padding: 6px 16px; font-size: 12px; line-height: 16px;">Small</button>

<!-- MD Button (Default) -->
<button style="padding: 8px 20px; font-size: 14px; line-height: 20px;">Medium</button>

<!-- LG Button -->
<button style="padding: 8px 24px; font-size: 16px; line-height: 24px;">Large</button>

<!-- XL Button -->
<button style="padding: 12px 28px; font-size: 16px; line-height: 24px;">Extra Large</button>
```

### Text Input

```html
<div class="input-group" style="display: flex; flex-direction: column; gap: 4px;">
  <label style="
    font-family: 'Host Grotesk', sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: #111553;
  ">Label</label>

  <input type="text" placeholder="Placeholder text" style="
    width: 100%;
    height: 40px;
    padding: 8px 12px;
    background-color: #ffffff;
    border: 1px solid #e3e7fc;
    border-radius: 8px;
    font-family: 'Host Grotesk', sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: #111553;
    outline: none;
  "/>

  <span style="
    font-family: 'Host Grotesk', sans-serif;
    font-size: 12px;
    line-height: 16px;
    color: #69707d;
  ">Help text goes here</span>
</div>
```

### Text Input - Error State

```html
<div class="input-group-error" style="display: flex; flex-direction: column; gap: 4px;">
  <label style="
    font-family: 'Host Grotesk', sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: #111553;
  ">Label</label>

  <input type="text" value="Invalid value" style="
    width: 100%;
    height: 40px;
    padding: 8px 12px;
    background-color: #ffffff;
    border: 1px solid #ec4b6e;
    border-radius: 8px;
    font-family: 'Host Grotesk', sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: #111553;
    outline: none;
  "/>

  <span style="
    font-family: 'Host Grotesk', sans-serif;
    font-size: 10px;
    line-height: 12px;
    color: #a9255b;
  ">Error message here</span>
</div>
```

### Text Input - Focus State

```html
<input type="text" style="
  width: 100%;
  height: 40px;
  padding: 8px 12px;
  background-color: #ffffff;
  border: 1px solid #0d3ef2;
  border-radius: 8px;
  font-family: 'Host Grotesk', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #111553;
  outline: none;
"/>
```

### Text Input with Icon

```html
<div style="position: relative; width: 100%;">
  <div style="
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    color: #9ca3af;
  ">
    <!-- Icon SVG here -->
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path d="..."/>
    </svg>
  </div>

  <input type="text" placeholder="Search..." style="
    width: 100%;
    height: 40px;
    padding: 8px 12px 8px 40px;
    background-color: #ffffff;
    border: 1px solid #e3e7fc;
    border-radius: 8px;
    font-family: 'Host Grotesk', sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: #111553;
    outline: none;
  "/>
</div>
```

### Checkbox

```html
<!-- Unchecked -->
<div class="checkbox-group" style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
  <div class="checkbox" style="
    width: 18px;
    height: 18px;
    border: 2px solid #343741;
    border-radius: 2px;
    background-color: transparent;
  "></div>
  <span style="
    font-family: 'Host Grotesk', sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: #444346;
  ">Checkbox label</span>
</div>

<!-- Checked -->
<div class="checkbox-group-checked" style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
  <div class="checkbox-checked" style="
    width: 18px;
    height: 18px;
    border: 2px solid #554BFD;
    border-radius: 2px;
    background-color: #554BFD;
    display: flex;
    align-items: center;
    justify-content: center;
  ">
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M10 3L4.5 8.5L2 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
  <span style="
    font-family: 'Host Grotesk', sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: #444346;
  ">Checkbox label</span>
</div>
```

### Radio Button

```html
<!-- Unselected -->
<div class="radio-group" style="display: flex; align-items: flex-start; gap: 8px; cursor: pointer;">
  <div class="radio" style="
    width: 16px;
    height: 16px;
    border: 2px solid #D0D5DD;
    border-radius: 9999px;
    background-color: #f9fafb;
    margin-top: 2px;
  "></div>
  <div>
    <span style="
      font-family: 'Host Grotesk', sans-serif;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      color: #111553;
      display: block;
    ">Radio label</span>
    <span style="
      font-family: 'Host Grotesk', sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      color: #69707d;
    ">Description text</span>
  </div>
</div>

<!-- Selected -->
<div class="radio-group-selected" style="display: flex; align-items: flex-start; gap: 8px; cursor: pointer;">
  <div class="radio-selected" style="
    width: 16px;
    height: 16px;
    border: 4px solid #554BFD;
    border-radius: 9999px;
    background-color: #ffffff;
    margin-top: 2px;
  "></div>
  <div>
    <span style="
      font-family: 'Host Grotesk', sans-serif;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      color: #111553;
      display: block;
    ">Radio label</span>
    <span style="
      font-family: 'Host Grotesk', sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      color: #69707d;
    ">Description text</span>
  </div>
</div>
```

### Toggle/Switch

```html
<!-- Off State -->
<div class="toggle-group" style="display: flex; align-items: center; gap: 12px;">
  <div class="toggle-off" style="
    width: 36px;
    height: 20px;
    background-color: #e5e7eb;
    border-radius: 9999px;
    position: relative;
    cursor: pointer;
  ">
    <div style="
      width: 16px;
      height: 16px;
      background-color: #ffffff;
      border-radius: 9999px;
      position: absolute;
      top: 2px;
      left: 2px;
      box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    "></div>
  </div>
  <span style="
    font-family: 'Host Grotesk', sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: #4e545e;
  ">Toggle label</span>
</div>

<!-- On State -->
<div class="toggle-group" style="display: flex; align-items: center; gap: 12px;">
  <div class="toggle-on" style="
    width: 36px;
    height: 20px;
    background-color: #554BFD;
    border-radius: 9999px;
    position: relative;
    cursor: pointer;
  ">
    <div style="
      width: 16px;
      height: 16px;
      background-color: #ffffff;
      border-radius: 9999px;
      position: absolute;
      top: 2px;
      right: 2px;
      box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    "></div>
  </div>
  <span style="
    font-family: 'Host Grotesk', sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: #4e545e;
  ">Toggle label</span>
</div>
```

### Select/Dropdown

```html
<div class="select-wrapper" style="position: relative; width: 100%;">
  <div class="select-trigger" style="
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 40px;
    padding: 8px 12px;
    background-color: #ffffff;
    border: 1px solid #e3e7fc;
    border-radius: 8px;
    cursor: pointer;
  ">
    <span style="
      font-family: 'Host Grotesk', sans-serif;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      color: #111553;
    ">Selected option</span>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="#9ca3af">
      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
    </svg>
  </div>

  <!-- Dropdown Panel (shown when open) -->
  <div class="select-dropdown" style="
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    width: 100%;
    max-height: 240px;
    overflow-y: auto;
    background-color: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08);
    z-index: 10;
  ">
    <div class="select-option" style="
      padding: 8px 12px;
      font-family: 'Host Grotesk', sans-serif;
      font-size: 14px;
      line-height: 20px;
      color: #111553;
      cursor: pointer;
    ">Option 1</div>
    <div class="select-option-selected" style="
      padding: 8px 12px;
      background-color: #e0e7ff;
      font-family: 'Host Grotesk', sans-serif;
      font-size: 14px;
      line-height: 20px;
      color: #082796;
      cursor: pointer;
    ">Option 2 (Selected)</div>
    <div class="select-option-hover" style="
      padding: 8px 12px;
      background-color: #f9fafb;
      font-family: 'Host Grotesk', sans-serif;
      font-size: 14px;
      line-height: 20px;
      color: #111553;
      cursor: pointer;
    ">Option 3 (Hover)</div>
  </div>
</div>
```

### Section Card

```html
<div class="section-card" style="
  background-color: #ffffff;
  border: 1px solid #edeffd;
  border-radius: 24px;
  padding: 16px 24px 28px 24px;
  margin-bottom: 12px;
">
  <!-- Header -->
  <div class="section-header" style="
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 16px;
  ">
    <div>
      <h2 style="
        font-family: 'Host Grotesk', sans-serif;
        font-size: 18px;
        font-weight: 500;
        line-height: 28px;
        color: #111553;
        margin: 0;
      ">Section Title</h2>
      <p style="
        font-family: 'Host Grotesk', sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        color: #69707d;
        margin: 4px 0 0 0;
      ">Section description or subtitle</p>
    </div>
    <button style="
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 20px;
      background-color: #0d3ef2;
      color: #ffffff;
      font-family: 'Host Grotesk', sans-serif;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    ">Action</button>
  </div>

  <!-- Content -->
  <div class="section-content">
    <!-- Your content here -->
  </div>
</div>
```

### KPI Card

```html
<div class="kpi-card" style="
  background-color: #ffffff;
  border-radius: 16px;
  padding: 20px 24px;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
">
  <div style="
    font-family: 'Host Grotesk', sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    color: #69707d;
    margin-bottom: 8px;
  ">Total Clicks</div>

  <div style="display: flex; align-items: baseline; gap: 12px;">
    <span style="
      font-family: 'Host Grotesk', sans-serif;
      font-size: 32px;
      font-weight: 700;
      line-height: 40px;
      color: #111553;
    ">12,450</span>

    <!-- Positive Trend -->
    <div style="
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 2px 8px;
      background-color: #e4f8ec;
      border-radius: 9999px;
    ">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="#17B26A">
        <path d="M6 2L10 6H7V10H5V6H2L6 2Z"/>
      </svg>
      <span style="
        font-family: 'Host Grotesk', sans-serif;
        font-size: 12px;
        font-weight: 500;
        color: #136e35;
      ">+12%</span>
    </div>

    <!-- Negative Trend (alternative) -->
    <!--
    <div style="
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 2px 8px;
      background-color: #fdbcb8;
      border-radius: 9999px;
    ">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="#a9255b">
        <path d="M6 10L2 6H5V2H7V6H10L6 10Z"/>
      </svg>
      <span style="
        font-family: 'Host Grotesk', sans-serif;
        font-size: 12px;
        font-weight: 500;
        color: #a9255b;
      ">-5%</span>
    </div>
    -->
  </div>
</div>
```

### Table

```html
<div class="table-container" style="
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  overflow: hidden;
">
  <table style="width: 100%; border-collapse: collapse;">
    <!-- Header -->
    <thead>
      <tr style="background-color: #f9fafb;">
        <th style="
          padding: 12px 16px;
          text-align: left;
          font-family: 'Host Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 600;
          line-height: 16px;
          color: #0d3ef2;
          border-bottom: 1px solid #e5e7eb;
        ">Column 1</th>
        <th style="
          padding: 12px 16px;
          text-align: left;
          font-family: 'Host Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 600;
          line-height: 16px;
          color: #0d3ef2;
          border-bottom: 1px solid #e5e7eb;
        ">Column 2</th>
        <th style="
          padding: 12px 16px;
          text-align: right;
          font-family: 'Host Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 600;
          line-height: 16px;
          color: #0d3ef2;
          border-bottom: 1px solid #e5e7eb;
        ">Column 3</th>
      </tr>
    </thead>

    <!-- Body -->
    <tbody>
      <tr>
        <td style="
          padding: 12px 16px;
          font-family: 'Host Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          color: #111553;
          border-bottom: 1px solid #e5e7eb;
        ">Cell content</td>
        <td style="
          padding: 12px 16px;
          font-family: 'Host Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          color: #111553;
          border-bottom: 1px solid #e5e7eb;
        ">Cell content</td>
        <td style="
          padding: 12px 16px;
          text-align: right;
          font-family: 'Host Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          color: #111553;
          border-bottom: 1px solid #e5e7eb;
        ">$1,234</td>
      </tr>
      <!-- Hover row -->
      <tr style="background-color: #f9fafb;">
        <td style="
          padding: 12px 16px;
          font-family: 'Host Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          color: #111553;
          border-bottom: 1px solid #e5e7eb;
        ">Hovered row</td>
        <td style="
          padding: 12px 16px;
          font-family: 'Host Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          color: #111553;
          border-bottom: 1px solid #e5e7eb;
        ">Cell content</td>
        <td style="
          padding: 12px 16px;
          text-align: right;
          font-family: 'Host Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          color: #111553;
          border-bottom: 1px solid #e5e7eb;
        ">$5,678</td>
      </tr>
    </tbody>
  </table>

  <!-- Pagination -->
  <div style="
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
    border-top: 1px solid #e5e7eb;
  ">
    <button style="
      padding: 4px 16px;
      font-family: 'Host Grotesk', sans-serif;
      font-size: 14px;
      font-weight: 500;
      color: #9ca3af;
      background-color: transparent;
      border: 1px solid #e5e7eb;
      border-radius: 9999px;
      cursor: not-allowed;
    ">Previous</button>
    <button style="
      padding: 4px 16px;
      font-family: 'Host Grotesk', sans-serif;
      font-size: 14px;
      font-weight: 500;
      color: #111553;
      background-color: transparent;
      border: 1px solid #111553;
      border-radius: 9999px;
      cursor: pointer;
    ">Next</button>
  </div>
</div>
```

### Badge

```html
<!-- Default Badge -->
<span class="badge" style="
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  background-color: #ffffff;
  border: 1px solid #CECBFF;
  border-radius: 9999px;
  font-family: 'Host Grotesk', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: #082796;
">Badge</span>

<!-- Success Badge -->
<span class="badge-success" style="
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  background-color: #EDFCF3;
  border: 1px solid #AAF0C7;
  border-radius: 9999px;
  font-family: 'Host Grotesk', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: #097347;
">Active</span>

<!-- Error Badge -->
<span class="badge-error" style="
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  background-color: #FEF3F2;
  border: 1px solid #fdbcb8;
  border-radius: 9999px;
  font-family: 'Host Grotesk', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: #a9255b;
">Blocked</span>

<!-- Warning Badge -->
<span class="badge-warning" style="
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  background-color: #fff4cc;
  border: 1px solid #fbc251;
  border-radius: 9999px;
  font-family: 'Host Grotesk', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: #a35e0a;
">Pending</span>
```

### Modal/Dialog

```html
<!-- Modal Overlay -->
<div class="modal-overlay" style="
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(55, 65, 81, 0.4);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
">
  <!-- Modal Dialog -->
  <div class="modal-dialog" style="
    width: 100%;
    max-width: 448px;
    background-color: #ffffff;
    border-radius: 16px;
    box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03);
    padding: 24px;
  ">
    <!-- Close Button -->
    <button style="
      position: absolute;
      top: 16px;
      right: 16px;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      border: none;
      cursor: pointer;
      color: #9ca3af;
    ">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"/>
      </svg>
    </button>

    <!-- Modal Header -->
    <div style="text-align: center; margin-bottom: 20px;">
      <!-- Icon (optional) -->
      <div style="
        width: 48px;
        height: 48px;
        background-color: #e0e7ff;
        border-radius: 9999px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 16px auto;
      ">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#0d3ef2">
          <path d="..."/>
        </svg>
      </div>

      <h3 style="
        font-family: 'Host Grotesk', sans-serif;
        font-size: 18px;
        font-weight: 600;
        line-height: 28px;
        color: #111553;
        margin: 0 0 8px 0;
      ">Modal Title</h3>

      <p style="
        font-family: 'Host Grotesk', sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: #69707d;
        margin: 0;
      ">Modal description text goes here explaining what this modal is for.</p>
    </div>

    <!-- Modal Content -->
    <div style="margin-bottom: 24px;">
      <!-- Form fields or content -->
    </div>

    <!-- Modal Footer -->
    <div style="display: flex; justify-content: flex-end; gap: 12px;">
      <button style="
        padding: 8px 20px;
        background-color: #ffffff;
        color: #343741;
        font-family: 'Host Grotesk', sans-serif;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        border: 1px solid #e5e7eb;
        border-radius: 6px;
        cursor: pointer;
      ">Cancel</button>
      <button style="
        padding: 8px 20px;
        background-color: #0d3ef2;
        color: #ffffff;
        font-family: 'Host Grotesk', sans-serif;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
      ">Confirm</button>
    </div>
  </div>
</div>
```

### Notice/Alert

```html
<!-- Info Notice -->
<div class="notice-info" style="
  display: flex;
  gap: 12px;
  padding: 16px;
  background-color: #ffffff;
  border-left: 4px solid #0d3ef2;
  border-radius: 8px;
">
  <svg width="20" height="20" viewBox="0 0 20 20" fill="#0d3ef2" style="flex-shrink: 0; margin-top: 2px;">
    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"/>
  </svg>
  <div>
    <p style="
      font-family: 'Host Grotesk', sans-serif;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      color: #111553;
      margin: 0 0 4px 0;
    ">Information</p>
    <p style="
      font-family: 'Host Grotesk', sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      color: #69707d;
      margin: 0;
    ">This is an informational message for the user.</p>
  </div>
</div>

<!-- Warning Notice -->
<div class="notice-warning" style="
  display: flex;
  gap: 12px;
  padding: 16px;
  background-color: #fff4cc;
  border-left: 4px solid #efa106;
  border-radius: 8px;
">
  <svg width="20" height="20" viewBox="0 0 20 20" fill="#efa106" style="flex-shrink: 0; margin-top: 2px;">
    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"/>
  </svg>
  <div>
    <p style="
      font-family: 'Host Grotesk', sans-serif;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      color: #111553;
      margin: 0 0 4px 0;
    ">Warning</p>
    <p style="
      font-family: 'Host Grotesk', sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      color: #69707d;
      margin: 0;
    ">Please review this information carefully.</p>
  </div>
</div>

<!-- Error Notice -->
<div class="notice-error" style="
  display: flex;
  gap: 12px;
  padding: 16px;
  background-color: #FEF3F2;
  border-left: 4px solid #F04438;
  border-radius: 8px;
">
  <svg width="20" height="20" viewBox="0 0 20 20" fill="#F04438" style="flex-shrink: 0; margin-top: 2px;">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"/>
  </svg>
  <div>
    <p style="
      font-family: 'Host Grotesk', sans-serif;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      color: #111553;
      margin: 0 0 4px 0;
    ">Error</p>
    <p style="
      font-family: 'Host Grotesk', sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      color: #69707d;
      margin: 0;
    ">Something went wrong. Please try again.</p>
  </div>
</div>

<!-- Success Notice -->
<div class="notice-success" style="
  display: flex;
  gap: 12px;
  padding: 16px;
  background-color: #e4f8ec;
  border-left: 4px solid #22c55e;
  border-radius: 8px;
">
  <svg width="20" height="20" viewBox="0 0 20 20" fill="#22c55e" style="flex-shrink: 0; margin-top: 2px;">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
  </svg>
  <div>
    <p style="
      font-family: 'Host Grotesk', sans-serif;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      color: #111553;
      margin: 0 0 4px 0;
    ">Success</p>
    <p style="
      font-family: 'Host Grotesk', sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      color: #69707d;
      margin: 0;
    ">Your changes have been saved successfully.</p>
  </div>
</div>
```

### Tooltip

```html
<div class="tooltip" style="
  position: absolute;
  padding: 8px 12px;
  background-color: #374151;
  color: #ffffff;
  font-family: 'Host Grotesk', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  border-radius: 6px;
  max-width: 300px;
  z-index: 100;
">
  Tooltip text goes here
  <!-- Arrow -->
  <div style="
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid #374151;
  "></div>
</div>
```

### Empty State

```html
<div class="empty-state" style="
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  text-align: center;
">
  <!-- Icon -->
  <div style="
    width: 64px;
    height: 64px;
    background-color: #f3f4f6;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
  ">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="#9ca3af">
      <path d="M20 13V6c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v7m16 0v5c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-5m16 0H4"/>
    </svg>
  </div>

  <h3 style="
    font-family: 'Host Grotesk', sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 28px;
    color: #111553;
    margin: 0 0 8px 0;
  ">No data available</h3>

  <p style="
    font-family: 'Host Grotesk', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #69707d;
    margin: 0 0 24px 0;
    max-width: 360px;
  ">Select a different time period or connect an ad account to start seeing data.</p>

  <button style="
    padding: 8px 20px;
    background-color: #0d3ef2;
    color: #ffffff;
    font-family: 'Host Grotesk', sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  ">Connect Account</button>
</div>
```

### Loading Spinner

```html
<div class="loading-spinner" style="
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 48px;
">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style="animation: spin 1s linear infinite;">
    <circle cx="12" cy="12" r="10" stroke="#e5e7eb" stroke-width="3"/>
    <path d="M12 2a10 10 0 0 1 10 10" stroke="#0d3ef2" stroke-width="3" stroke-linecap="round"/>
  </svg>
  <span style="
    font-family: 'Host Grotesk', sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #69707d;
  ">Loading...</span>
</div>

<style>
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
```

---

## PAGE LAYOUT TEMPLATES

### Main App Layout

```html
<div class="app-layout" style="
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #F2F2F2;
">
  <!-- Navbar -->
  <nav class="navbar" style="
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 72px;
    background-color: #ffffff;
    border-bottom: 1px solid #edeffd;
    display: flex;
    align-items: center;
    padding: 0 24px;
    z-index: 40;
  ">
    <!-- Navbar content -->
  </nav>

  <div style="display: flex; margin-top: 72px;">
    <!-- Sidebar -->
    <aside class="sidebar" style="
      position: fixed;
      top: 72px;
      left: 0;
      bottom: 0;
      width: 230px;
      background-color: #ffffff;
      border-right: 1px solid #edeffd;
      overflow-y: auto;
      z-index: 30;
    ">
      <!-- Sidebar content -->
    </aside>

    <!-- Main Content -->
    <main style="
      flex: 1;
      margin-left: 230px;
      padding: 24px;
      min-height: calc(100vh - 72px);
    ">
      <!-- Page content -->
    </main>
  </div>
</div>
```

### Dashboard Layout

```html
<div class="dashboard-page" style="max-width: 1400px; margin: 0 auto;">
  <!-- Page Header -->
  <div class="page-header" style="
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  ">
    <h1 style="
      font-family: 'Host Grotesk', sans-serif;
      font-size: 24px;
      font-weight: 700;
      line-height: 32px;
      color: #080736;
      margin: 0;
    ">Dashboard</h1>

    <div style="display: flex; gap: 12px;">
      <!-- Date picker, filters -->
    </div>
  </div>

  <!-- KPI Cards -->
  <div class="kpi-row" style="
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-bottom: 24px;
  ">
    <!-- KPI Card components -->
  </div>

  <!-- Charts Row -->
  <div class="charts-row" style="
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-bottom: 24px;
  ">
    <!-- Chart sections -->
  </div>

  <!-- Table Section -->
  <div class="table-section">
    <!-- Table component -->
  </div>
</div>
```

---

## CHART SPECIFICATIONS

### Bar Chart Container

```html
<div class="chart-container" style="
  background-color: #ffffff;
  border: 1px solid #edeffd;
  border-radius: 24px;
  padding: 24px;
">
  <div class="chart-header" style="margin-bottom: 16px;">
    <h3 style="
      font-family: 'Host Grotesk', sans-serif;
      font-size: 16px;
      font-weight: 500;
      color: #111553;
      margin: 0;
    ">Chart Title</h3>
  </div>

  <div class="chart-body" style="height: 300px;">
    <!-- Chart renders here -->
    <!-- Use these colors for bars: -->
    <!-- Valid: #A5D6A7 -->
    <!-- Invalid: #EF9A9A -->
    <!-- Suspicious: #FFF59D -->
  </div>

  <!-- Legend -->
  <div class="chart-legend" style="
    display: flex;
    gap: 24px;
    margin-top: 16px;
    justify-content: center;
  ">
    <div style="display: flex; align-items: center; gap: 8px;">
      <div style="width: 12px; height: 12px; border-radius: 2px; background-color: #A5D6A7;"></div>
      <span style="font-size: 12px; color: #69707d;">Valid</span>
    </div>
    <div style="display: flex; align-items: center; gap: 8px;">
      <div style="width: 12px; height: 12px; border-radius: 2px; background-color: #EF9A9A;"></div>
      <span style="font-size: 12px; color: #69707d;">Invalid</span>
    </div>
    <div style="display: flex; align-items: center; gap: 8px;">
      <div style="width: 12px; height: 12px; border-radius: 2px; background-color: #FFF59D;"></div>
      <span style="font-size: 12px; color: #69707d;">Suspicious</span>
    </div>
  </div>
</div>
```

### Chart Tooltip

```html
<div class="chart-tooltip" style="
  background-color: #ffffff;
  border: 1px solid #edeffd;
  border-radius: 8px;
  padding: 8px;
  box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08);
">
  <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
    <div style="width: 8px; height: 8px; border-radius: 9999px; background-color: #A5D6A7;"></div>
    <span style="font-size: 12px; color: #69707d;">Valid Clicks</span>
  </div>
  <div style="font-size: 14px; font-weight: 600; color: #111553;">1,234</div>
</div>
```

---

## RESPONSIVE WIDTHS

```css
/* Breakpoints for reference */
--mobile: 640px;   /* max-width */
--sm: 640px;       /* min-width */
--md: 768px;       /* min-width */
--lg: 1024px;      /* min-width */
--xl: 1280px;      /* min-width */
--2xl: 1536px;     /* min-width */

/* Common responsive patterns */
/* Mobile: 1 column, full-width components */
/* Tablet: 2 columns */
/* Desktop: 3-4 columns, sidebar visible */
```

---

## QUICK REFERENCE

```
┌────────────────────────────────────────────────────────────┐
│                    QUICK REFERENCE                         │
├────────────────────────────────────────────────────────────┤
│ Font Family:     'Host Grotesk', sans-serif               │
│ Base Font Size:  14px                                      │
│ Base Line Height: 20px                                     │
│ Font Weight:     500 (medium) for most UI                  │
│                                                            │
│ Primary Color:   #0d3ef2                                   │
│ Primary Hover:   #1a4ad9                                   │
│ Interactive:     #554BFD                                   │
│ Text Primary:    #111553                                   │
│ Text Secondary:  #69707d                                   │
│ Background:      #F2F2F2                                   │
│ Card Background: #ffffff                                   │
│ Card Border:     #edeffd                                   │
│ Input Border:    #e3e7fc                                   │
│                                                            │
│ Success:         #22c55e                                   │
│ Error:           #ec4b6e                                   │
│ Warning:         #efa106                                   │
│                                                            │
│ Card Radius:     24px                                      │
│ Button Radius:   6px                                       │
│ Input Radius:    8px                                       │
│ Modal Radius:    16px                                      │
│ Badge Radius:    9999px (full)                             │
│                                                            │
│ Button Padding:  8px 20px (md)                             │
│ Input Height:    40px                                      │
│ Card Padding:    16px 24px 28px 24px                       │
│ Navbar Height:   72px                                      │
│ Sidebar Width:   230px (expanded), 80px (collapsed)        │
│                                                            │
│ Chart Valid:     #A5D6A7                                   │
│ Chart Invalid:   #EF9A9A                                   │
│ Chart Suspicious: #FFF59D                                  │
└────────────────────────────────────────────────────────────┘
```

---

## IMPORTANT NOTES FOR HTML-TO-FIGMA

1. **Always use pixel values** - `14px` not `0.875rem`
2. **Specify all CSS properties explicitly** - Don't rely on inheritance
3. **Use hex colors** - `#0d3ef2` not `rgb()` or `hsl()`
4. **Include font-family on every text element**
5. **Set explicit width/height where needed**
6. **Use `display: flex` for layouts** - Most reliable conversion
7. **Name classes descriptively** - They become layer names
8. **Nest elements logically** - Creates proper Figma groups
9. **Include all states** - Default, hover, active, disabled, error
10. **Keep SVG icons inline** - For better icon recognition

---

*Version: 1.0 - HTML-to-Figma Optimized*
*Platform: ClickGuard Customer Dashboard*
