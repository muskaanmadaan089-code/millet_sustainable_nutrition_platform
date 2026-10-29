---
name: Earthy Modernist
colors:
  surface: '#fbf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae8e7'
  surface-container-highest: '#e4e2e1'
  on-surface: '#1b1c1c'
  on-surface-variant: '#46483c'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0f0'
  outline: '#76786b'
  outline-variant: '#c6c8b8'
  surface-tint: '#56642b'
  primary: '#56642b'
  on-primary: '#ffffff'
  primary-container: '#8a9a5b'
  on-primary-container: '#253000'
  inverse-primary: '#bdce89'
  secondary: '#775a00'
  on-secondary: '#ffffff'
  secondary-container: '#fec72c'
  on-secondary-container: '#6f5400'
  tertiary: '#5e604d'
  on-tertiary: '#ffffff'
  tertiary-container: '#94957f'
  on-tertiary-container: '#2c2e1d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d9eaa3'
  primary-fixed-dim: '#bdce89'
  on-primary-fixed: '#161f00'
  on-primary-fixed-variant: '#3e4c16'
  secondary-fixed: '#ffdf98'
  secondary-fixed-dim: '#f5bf22'
  on-secondary-fixed: '#251a00'
  on-secondary-fixed-variant: '#5a4300'
  tertiary-fixed: '#e4e4cc'
  tertiary-fixed-dim: '#c8c8b0'
  on-tertiary-fixed: '#1b1d0e'
  on-tertiary-fixed-variant: '#474836'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e1'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md-mobile:
    fontFamily: Montserrat
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  title-lg:
    fontFamily: Montserrat
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1200px
  gutter: 24px
---

## Brand & Style

This design system targets a health-conscious, environmentally aware demographic. The visual direction balances the warmth of traditional agriculture with the precision of modern nutritional science.

The aesthetic is **Organic Minimalism**. It utilizes heavy whitespace to convey a sense of clarity and "clean eating," while incorporating subtle tactile elements like grain textures to ground the digital experience in the physical world. The emotional response should be one of calm reliability, vitality, and premium quality. 

Key visual hallmarks include:
- **Breathable Layouts:** Generous margins to prevent information density from feeling overwhelming.
- **Organic Depth:** Use of soft, colored shadows rather than neutral greys to maintain the earthy warmth.
- **Illustrative Accents:** Sparse use of line-art leaf motifs and grain patterns to provide brand character without clutter.

## Colors

The palette is derived directly from the lifecycle of the millet plant—from the sage green of the stalks to the golden hue of the harvested grain.

- **Primary (Sage Green):** Used for primary actions, success states, and brand-heavy components. It represents growth and sustainability.
- **Secondary (Millet Golden Yellow):** Used for highlighting nutritional benefits, secondary calls to action, and energetic accents.
- **Neutral (Warm Beige & Charcoal):** Beige acts as the "soft white" for cards and sections to reduce eye strain. Dark charcoal is used for typography to maintain high legibility while appearing softer than pure black.
- **Surface Tints:** Use 5% opacity of the primary color for subtle section backgrounds to maintain the "earthy" feel throughout the interface.

## Typography

This system uses a tiered typography approach to balance impact with utility. 

**Montserrat** is reserved for headlines and "Display" roles. Its geometric construction provides a modern, premium feel. For large display text, use a slight negative letter-spacing to create a "tight" editorial look.

**Inter** is the workhorse for all body copy, inputs, and labels. It was chosen for its exceptional legibility at small sizes and its neutral character, which allows the photography and brand colors to take center stage.

**Scale Usage:**
- Use `display-lg` for hero sections.
- Use `title-lg` for card headings and section titles.
- Use `label-md` with its uppercase styling for categories, tags, and small eyebrows above headlines.

## Layout & Spacing

The design system employs a **Fixed Grid** model for desktop and a **Fluid Grid** for mobile.

- **Desktop (1440px+):** 12-column grid with a 1200px max-container width. Gutters are fixed at 24px.
- **Tablet (768px - 1024px):** 8-column fluid grid with 32px side margins.
- **Mobile (Up to 767px):** 4-column fluid grid with 20px side margins.

**Spacing Philosophy:** Use `lg` (48px) and `xl` (80px) spacing to separate major content sections. This "breathable" approach reinforces the premium nature of the brand. Vertical rhythm should be strictly maintained using multiples of the 8px base unit.

## Elevation & Depth

To maintain the earthy and premium aesthetic, elevation is achieved through **Tonal Layering** and **Ambient Shadows** rather than stark borders.

- **Shadows:** Avoid pure black or grey shadows. Use a "Sage Shadow" (#8A9A5B at 10-15% opacity) with a high blur radius (20px+) and a slight Y-offset. This creates a soft, glowing lift that feels natural.
- **Card Surfaces:** Primary cards should use the Warm Beige (#F5F5DC) or White. When a card is placed on a White background, use the soft Sage Shadow. When placed on a Beige background, use a thin 1px Sage stroke at 20% opacity.
- **Interactivity:** Elements should feel tactile. On hover, increase the Y-offset of shadows and slightly scale the element (1.02x) to mimic a physical lift.

## Shapes

The shape language is defined by friendliness and accessibility. 

- **Primary Radius:** Large 24px (1.5rem) corners are the standard for all major containers and cards (`rounded-xl`).
- **Button Radius:** Buttons should be fully rounded (pill-shaped) to provide a soft, inviting touchpoint.
- **Input Radius:** Form fields should use a 12px radius to maintain consistency with the cards while remaining functional for text entry.

Avoid sharp 90-degree angles across the entire UI to sustain the organic "farm-to-table" narrative.

## Components

### Buttons
- **Primary:** Sage Green (#8A9A5B) background with White text. Pill-shaped. 16px horizontal padding, 24px vertical padding (large).
- **Secondary:** Golden Yellow (#E1AD01) background with Charcoal (#333333) text. Used for "Nutrition Facts" or "Explore Recipes."
- **Ghost:** Transparent background with Sage Green 2px stroke and text. Use for low-priority actions.

### Cards
- **Nutrition Card:** 24px corner radius, White background, soft Sage shadow. Use for displaying millet types or recipes.
- **Imagery:** Photography within cards should always have a matching 24px radius or be "bled" to the top edges with a 24px top-only radius.

### Form Inputs
- **Style:** 12px corner radius, White background, 1px Sage stroke at 30% opacity. 
- **Focus State:** Stroke becomes 100% Sage Green with a 4px soft outer glow.
- **Labels:** Use `label-md` typography placed 8px above the input field.

### Specialized Components
- **Nutrition Tags:** Small, pill-shaped chips using 10% opacity Sage Green or Golden Yellow backgrounds with corresponding dark text to categorize "High Fiber," "Gluten-Free," etc.
- **Grain Grain Overlays:** A subtle SVG "grain" texture can be applied as a mask (5% opacity) on large color blocks to add organic depth.