---
name: Vitality Core
colors:
  surface: '#f9f9ff'
  surface-dim: '#d0daf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e8eeff'
  surface-container-high: '#dfe8ff'
  surface-container-highest: '#d9e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#3e4a38'
  inverse-surface: '#273143'
  inverse-on-surface: '#ecf0ff'
  outline: '#6e7b66'
  outline-variant: '#bdcbb3'
  surface-tint: '#176e00'
  primary: '#176e00'
  on-primary: '#ffffff'
  primary-container: '#50d130'
  on-primary-container: '#0f5400'
  inverse-primary: '#60e13f'
  secondary: '#516072'
  on-secondary: '#ffffff'
  secondary-container: '#d1e1f7'
  on-secondary-container: '#556477'
  tertiary: '#5c5f61'
  on-tertiary: '#ffffff'
  tertiary-container: '#b5b8bb'
  on-tertiary-container: '#46494b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#7dff5a'
  primary-fixed-dim: '#60e13f'
  on-primary-fixed: '#032100'
  on-primary-fixed-variant: '#0f5300'
  secondary-fixed: '#d4e4fa'
  secondary-fixed-dim: '#b8c8de'
  on-secondary-fixed: '#0d1d2d'
  on-secondary-fixed-variant: '#39485a'
  tertiary-fixed: '#e0e3e6'
  tertiary-fixed-dim: '#c4c7ca'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#44474a'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d9e3fb'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 34px
    fontWeight: '700'
    lineHeight: 41px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 30px
  title-md:
    fontFamily: Manrope
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 25px
  body-lg:
    fontFamily: Manrope
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Manrope
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 4px
  margin-mobile: 20px
  margin-desktop: 40px
  gutter: 16px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

This design system is built on the principles of **Modern iOS (HIG) Minimalism**, optimized for the Bulgarian market. It prioritizes clarity, breathability, and a sense of "digital wellness." The personality is clinical yet compassionate—professional enough to be trusted with health data, but warm enough to encourage daily habit formation.

The visual language utilizes extreme whitespace, high-fidelity rounded corners, and a strict adherence to a "content-first" hierarchy. By removing unnecessary containers and borders, the design focuses the user's attention on their health metrics and progress, evoking an emotional response of calm control and optimism.

## Colors

The palette is derived directly from the brand's identity to ensure instant recognition and psychological alignment with health.

- **Primary (Vibrant Green):** Used for actionable items, success states, and progress indicators. It represents vitality and growth.
- **Secondary (Deep Navy/Charcoal):** Used for primary text and high-contrast UI elements. It provides the "professional" weight necessary for a health app.
- **Tertiary (Soft Gray):** Used for subtle backgrounds, card grouping, and secondary surfaces to maintain a soft, non-aggressive interface.
- **Background:** Pure white (#FFFFFF) is the standard for all primary views to maximize legibility and the feeling of cleanliness.

## Typography

**Manrope** is selected for its exceptional Cyrillic support and its similarity to SF Pro's systematic, clean aesthetic. It offers the precision required for data-heavy health screens while maintaining a modern, approachable feel.

The typographic hierarchy follows iOS patterns: large, bold page titles for navigation clarity and standard 17pt body text for optimal readability. For the Bulgarian language, particular attention must be paid to line height, as Cyrillic characters can often feel denser than Latin equivalents; the 1.4x - 1.5x scaling ensures a light, breathable feel.

## Layout & Spacing

The layout utilizes a **Fluid Grid** system based on a 4px baseline unit. 

- **Mobile:** A single-column layout with 20px side margins. Elements are grouped in cards that span the full width minus margins.
- **Tablet/Desktop:** A 12-column grid. Content is centered with a max-width of 1200px to prevent line lengths from becoming too long for comfortable reading.
- **Rhythm:** Vertical spacing relies on "Stack" increments. Use `stack-lg` (32px) to separate major sections and `stack-sm` (8px) for internal element grouping (e.g., a label and its input field).

## Elevation & Depth

To maintain the HIG-inspired minimalist look, this design system avoids heavy shadows in favor of **Tonal Layers** and **Soft Ambient Occlusion**.

- **Level 0 (Base):** White (#FFFFFF) background.
- **Level 1 (Cards/Surfaces):** Soft Gray (#F2F4F7) or White with a very subtle 1px border (#E4E7EB).
- **Level 2 (Interactive):** Elements that sit above the base layer use a very large, diffused shadow: `0px 10px 30px rgba(12, 28, 44, 0.04)`. This creates a "lifted" effect without the clutter of traditional drop shadows.
- **Glassmorphism:** Used sparingly for bottom tab bars and top navigation headers using a `backdrop-filter: blur(20px)` and 80% opacity white fill.

## Shapes

The design uses a high degree of roundedness to feel organic and "friendly." Following the user's request for 2xl/3xl corners, the system defaults to a **Pill-shaped/High-radius** logic.

- **Main Cards:** Use `rounded-2xl` (24px) to create a soft, containerized look.
- **Buttons & Inputs:** Use `rounded-xl` (16px) or full pill-shape (999px) for primary actions.
- **Avatars/Icons:** Always circular or use `rounded-lg` (12px) for a "squircle" effect consistent with iOS app icons.

## Components

- **Buttons:** Primary buttons use the Vibrant Green background with white text. They should have a minimum height of 50px for touch accessibility. Secondary buttons use a Soft Gray background with Navy text.
- **Cards:** Cards are the primary container. They should have no border, a White background, and the Level 2 ambient shadow.
- **Input Fields:** Large, 56px height fields with 16px internal padding. Labels sit above the field in `label-caps` style. Background is Soft Gray (#F2F4F7) with no border unless focused (then 2px Primary Green).
- **Chips/Filters:** Pill-shaped elements used for health categories (e.g., "Сън," "Хранене," "Тренировка"). Unselected: Gray background; Selected: Navy background with white text.
- **Progress Rings:** Using the Primary Green, these should be high-stroke weight (8-12px) to visualize daily goals on the dashboard.
- **List Items:** Use "Chevron-right" icons for navigation. Items are separated by a 0.5px hairline divider that does not extend to the full width of the screen, stopping at the text alignment.