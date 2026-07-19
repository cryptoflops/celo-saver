# Reown.com Design System Reference

> Extracted from https://reown.com on 2026-07-18
> Used as design inspiration for celo-saver redesign

## Fonts

Reown uses two custom fonts (not from Google Fonts):
- **KHTeka-Regular** — Body text, headings (weight 300-400)
- **KHTekaMono-Regular** — All buttons, navigation (weight 400)

### For celo-saver (closest available replacements):
- Body/Headings: **Satoshi** (variable, weight 300-500) or **Geist**
- Mono/Buttons: **JetBrains Mono** or **DM Mono** (weight 400)

### Typography Scale

| Token | Size | Weight | Line-Height | Letter-Spacing | Usage |
|-------|------|--------|-------------|----------------|-------|
| H1 | 36px / 2.25rem | 400 | 1.1 | -0.02em | Hero heading |
| H2 | 24px / 1.5rem | 400 | 1.2 | -0.01em | Section headings |
| H3 | 24px / 1.5rem | 400 | 1.2 | -0.01em | Card titles |
| H4 | 20px / 1.25rem | 400 | 1.2 | -0.01em | Sub-section headings |
| Body lead | 18px / 1.125rem | 300 | 1.4 | -0.01em | Hero paragraph |
| Body | 16px / 1rem | 400 | 1.5 | -0.01em | Body text |
| Small | 14px / 0.875rem | 400 | 1.4 | 0 | Small text |
| Caption | 12px / 0.75rem | 400 | 1.5 | 0 | Captions |
| Eyebrow | 14px / 0.875rem | 400 | 1.2 | +0.02em | Section labels |
| Nav (large) | 22px / 1.375rem | 400 (mono) | 1 | -0.05em | Navigation buttons |
| Button | 16px / 1rem | 400 (mono) | 1 | -0.05em | CTA buttons |

## Colors

### RGB Color Palette (from CSS custom properties)

| Token | RGB | Hex | Usage |
|-------|-----|-----|-------|
| --p-color-white | 255, 255, 255 | #FFFFFF | White text on dark surfaces |
| --p-color-black | 0, 0, 0 | #000000 | Black text on light surfaces |
| --s-color-backdrop | 0, 0, 0 | #000000 | Backdrop/overlay |
| --s-color-surface-dark | 32, 32, 32 | #202020 | Dark surface (main bg) |
| --s-color-surface | 154, 154, 154 | #9A9A9A | Mid surface |
| --s-color-surface-subtle | 233, 233, 233 | #E9E9E9 | Subtle surface (light) |
| --s-color-surface-dim | 208, 208, 208 | #D0D0D0 | Dim surface |
| --s-color-surface-lift | 150, 150, 150 | #969696 | Lifted surface |
| --s-color-on-surface | 108, 108, 108 | #6C6C6C | Muted text on dark |
| --s-color-on-surface-muted | 114, 114, 114 | #727272 | Very muted text |
| --s-color-divider | 187, 187, 187 | #BBBBBB | Dividers |
| --s-color-border | 79, 79, 79 | #4F4F4F | Borders |
| --s-color-border-strong | 122, 122, 122 | #7A7A7A | Strong borders |
| --s-color-border-subtle | 147, 147, 147 | #939393 | Subtle borders |
| --s-color-field-bg | 54, 54, 54 | #363636 | Input fields bg |
| --s-color-field-text | 233, 233, 233 | #E9E9E9 | Input text |
| --s-color-button-text | 154, 154, 154 | #9A9A9A | Button text (muted) |
| --s-color-button-bg | 9, 136, 240 | #0988F0 | Button background |
| --s-color-accent | 9, 136, 240 | #0988F0 | **Primary blue accent** |
| --s-color-accent-blue | 9, 136, 240 | #0988F0 | Blue accent |
| --s-color-accent-green | 24, 172, 101 | #18AC65 | Green accent |
| --s-color-accent-orange | 244, 98, 74 | #F4624A | Orange/danger accent |
| --s-color-accent-yellow | 255, 184, 0 | #FFB800 | Yellow accent |
| --s-color-danger | 244, 98, 74 | #F4624A | Danger/error |
| --s-color-placeholder | 79, 79, 79 | #4F4F4F | Placeholder text |
| --p-color-blue | 9, 136, 240 | #0988F0 | Blue base |
| --p-color-blue-strong | 8, 120, 211 | #0878D3 | Stronger blue |
| --p-color-blue-surface | 55, 157, 239 | #379DEF | Blue surface (used for buttons) |

### Grey Scale

| Token | Hex | 
|-------|-----|
| grey-1 / --s-color-surface-subtle | #E9E9E9 |
| grey-2 / --s-color-divider | #BBBBBB |
| grey-3 / --s-color-button-text | #9A9A9A |
| grey-4 | #787878 |
| grey-5 / --s-color-on-surface | #6C6C6C |
| grey-6 / --s-color-border | #4F4F4F |
| grey-7 / --s-color-field-bg | #363636 |
| grey-8 / --s-color-surface-dark | #202020 |

## Component Patterns

### Navigation Buttons (Header)
```
.button--large
  font: KHTekaMono 22px, weight 400
  letter-spacing: -1.1px (-0.05em)
  line-height: 22px (1)
  padding: 11px 23px 13px
  border-radius: 25px (pill) or 14px (active)
  
  Variants:
  - theme--white: bg #FFFFFF, border #FFFFFF, color #202020 (ghost/outline feel)
  - theme--blue is-active: bg #379DEF, border #379DEF, color #202020 (active/CTA)
```

### CTA Buttons (Primary)
```
.button (default size)
  font: KHTekaMono 16px, weight 400
  letter-spacing: -0.8px (-0.05em)
  line-height: 16px (1)
  padding: 13px 15px
  border-radius: 16px
  
  Variants:
  - button--solid theme--blue: bg #379DEF, border #379DEF, color #202020
  - button--outline theme--white: bg transparent, border #FFFFFF, color #FFFFFF
  - button--solid theme--black: bg #202020, border #202020, color #FFFFFF
```

### Cards
- Border-radius: 16px (default card), up to 2.5rem-5.5rem (hero cards)
- Background: varies (grey-2 on dark sections, grey-7 on light sections)
- No box-shadow — flat design
- Gap: 40px between card elements

### Layout
- **12-column CSS Grid** — `grid-template-columns: repeat(12, 98px)` with 8px gap
- **Max page width**: 100rem (1600px)
- **Page gutter**: 0.5rem (8px)
- **Section spacing**: 0.5rem between sections
- **Section padding**: `0px 8px`
- **Stack spacing**: 1.5rem (sm), 2rem (md), 2.5rem (lg)
- **Header**: fixed, transparent bg, margin-top 8px

## Design Patterns Summary

1. **Monochromatic greyscale + blue accent** — Core palette is black/white/grey, single blue accent
2. **Monospace navigation** — All clickable UI text in monospace with tight tracking
3. **Pill/rounded buttons** — Very large border-radius on nav items
4. **Flat design** — No shadows, depth through color contrast and rounded corners
5. **Generous radius** — Even small CTAs get 16px radius
6. **Negative tracking everywhere** — All text has -0.01em or tighter letter-spacing
7. **Light body weight** — Hero paragraphs at weight 300 for elegance
8. **Custom fonts** — Proprietary KHTeka family (replace with Satoshi/Geist + JetBrains Mono)
