---
name: Vitality Core
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#3e4a38'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#6e7b66'
  outline-variant: '#bdcbb3'
  surface-tint: '#176e00'
  primary: '#176e00'
  on-primary: '#ffffff'
  primary-container: '#50d130'
  on-primary-container: '#0f5400'
  inverse-primary: '#60e13f'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#5c5f61'
  on-tertiary: '#ffffff'
  tertiary-container: '#b5b8ba'
  on-tertiary-container: '#45494b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#7dff5a'
  primary-fixed-dim: '#60e13f'
  on-primary-fixed: '#032100'
  on-primary-fixed-variant: '#0f5300'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#e0e3e5'
  tertiary-fixed-dim: '#c4c7c9'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#444749'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-xl:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  xxl: 64px
  gutter: 24px
  margin: 24px
---

## Brand & Style
The design system is centered on a philosophy of energetic wellness, clarity, and approachability. Targeted at health, fitness, and lifestyle sectors, it aims to evoke feelings of optimism, renewal, and structural reliability. 

The aesthetic is **Corporate Modern with a Soft Edge**. It utilizes generous whitespace and a clean, systematic layout to ensure professional credibility, while the high-vibrancy primary color and fully rounded shapes prevent the interface from feeling clinical. The visual language is designed to be highly legible and motivating, balancing the precision of a health tool with the friendliness of a personal coach.

## Colors
The palette is dominated by "Vitality Green" (#50d130), a high-energy primary hue used for calls to action, progress indicators, and brand highlights. This is balanced against a deep slate secondary color for high-contrast typography and a neutral scale built on cool greys.

- **Primary:** Used for the most important interactive elements and brand identifiers.
- **Secondary:** Reserved for headers, primary text, and high-emphasis backgrounds.
- **Surface:** A very light tint of neutral or pure white is used for backgrounds to maintain a fresh, airy feel.
- **Feedback:** Semantic colors (Success, Warning, Error) should follow standard accessibility ratios while maintaining the saturated profile of the primary green.

## Typography
This design system utilizes **Manrope** for all hierarchy levels. Manrope is chosen for its modern, semi-geometric structure that maintains high legibility while appearing contemporary and balanced.

Headlines use heavy weights (700-800) with slight negative letter spacing to create a strong visual "anchor" for page sections. Body text is set with generous line heights to ensure long-form readability. Labels and functional text utilize semi-bold weights to distinguish them clearly from body content.

## Layout & Spacing
The system follows a **12-column fluid grid** for desktop and a **4-column grid** for mobile. A consistent 8px base unit (2x 4px base) drives all spatial decisions, from component padding to section margins.

- **Desktop:** 12 columns, 24px gutters, max-width of 1280px.
- **Tablet:** 8 columns, 24px gutters, 32px side margins.
- **Mobile:** 4 columns, 16px gutters, 20px side margins.

Horizontal spacing between related elements should typically use `md` (16px), while vertical spacing between distinct sections should use `xl` (40px) or `xxl` (64px) to create breathing room.

## Elevation & Depth
Depth is achieved through **Tonal Layering** supplemented by **Ambient Shadows**. Surfaces do not use harsh borders; instead, they are distinguished by subtle shifts in background color or soft, diffused shadows.

- **Level 0 (Base):** Primary background color (#f8fafc).
- **Level 1 (Cards/Containers):** White background with a 10% opacity shadow, 12px blur, and 4px vertical offset.
- **Level 2 (Modals/Popovers):** White background with a 15% opacity shadow, 24px blur, and 8px vertical offset.

Shadows should be tinted slightly with the secondary color (#0f172a) rather than pure black to maintain a sophisticated, soft appearance.

## Shapes
The design system employs a **Pill-shaped (3)** roundedness strategy. Every interactive element—including buttons, input fields, and tags—utilizes a fully rounded radius to maximize the approachable and friendly brand personality.

Larger containers like cards and modals should use `rounded-xl` (3rem/48px) to echo the pill-shaped language of the smaller components without becoming inefficient with space. This organic shape language is core to the "Vitality" theme, avoiding sharp corners that feel aggressive or clinical.

## Components
- **Buttons:** Use a full pill shape. Primary buttons feature white text on the primary green background. Secondary buttons use a ghost style with a 2px stroke.
- **Inputs:** High-affordance fields with a 2px light grey border that shifts to the primary green on focus. Icons should be placed within the pill-shaped padding.
- **Chips/Tags:** Small pill shapes used for filtering and categorization. Use a light tint of the primary color (10% opacity) with dark green text for an "active" state.
- **Cards:** Large radius (48px) containers with a subtle ambient shadow. Content within should be inset by at least 24px (lg spacing).
- **Progress Bars:** Thick, pill-shaped tracks with the primary green indicating completion.
- **Checkboxes & Radios:** Should be oversized and use the primary green for the "selected" state, maintaining rounded profiles even for checkboxes (softly rounded squares).