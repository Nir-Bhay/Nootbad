# Nootbad - Coming Soon Landing Page Specification

## 1. Concept & Vision

Nootbad is a pre-launch landing page for India's upcoming hyperlocal refurbished books platform. The page embodies a warm, nostalgic "pencil art on paper" aesthetic — like a beloved notebook filled with sketches and ideas. The mission: "Save knowledge from being wasted and make it accessible to all." The page collects interested users' information while building excitement and emotional connection through Hinglish copy and hand-drawn visual elements.

## 2. Design Language

### Aesthetic Direction
Pencil sketch / notebook paper aesthetic — every element feels hand-drawn with graphite pencil on aged paper. Think: a creative person's sketchbook brought to life digitally.

### Color Palette
- **Primary Background:** Cream/Off-White `#FDF6EC` (aged notebook paper)
- **Secondary Background:** Light Beige `#F5E6CA` (alternating sections)
- **Primary Text:** Charcoal `#2C2C2C` (pencil graphite)
- **Secondary Text:** Warm Gray `#6B6B6B`
- **Accent 1:** Muted Terracotta `#C07A50` (CTAs, highlights)
- **Accent 2:** Forest Green `#2D5F2D` (icons, secondary)
- **Accent 3:** Soft Yellow `#E8C547` (badges, subtle highlights)
- **Dark Background:** Charcoal `#2C2C2C` (footer)

### Typography
- **Headings:** Playfair Display (Bold/ExtraBold) — classic book-lover feel
- **Sub-headings:** Crimson Pro (Regular/Medium) — elegant serif
- **Body:** Inter (Regular/Medium) — clean readability
- **Decorative:** Caveat (Regular) — handwritten touches

### Spatial System
- Section padding: 80-120px vertical (desktop), 40-60px (mobile)
- Max content width: 1200px, centered
- Card border-radius: 16px
- Button border-radius: 30px

### Motion Philosophy
- Scroll reveal: fade-in + slide-up, 400ms ease-out
- Hover states: subtle lift (translateY -4px) + shadow increase
- Button interactions: scale 1.03 on hover, 0.97 on click
- Hero illustration: gentle floating (translateY -10px to 10px, 3s loop)
- Pencil line dividers: SVG stroke animation on scroll

### Visual Assets
- Hand-drawn SVG icons (book, pencil, glasses, plant, location pin, etc.)
- Pencil sketch borders (irregular, organic lines)
- Wavy/sketchy divider lines between sections
- Paper texture overlays

## 3. Layout & Structure

### Page Flow (13 Sections)
1. **Sticky Navbar** — Transparent → cream on scroll
2. **Hero** — Full viewport, centered, 2-column on desktop
3. **Problem Statement** — 3 cards showing pain points
4. **Solution** — Centered intro + 4-step flow diagram
5. **Features** — 3x2 grid of feature cards
6. **Target Audience** — 4 persona cards
7. **Social Proof** — 3 testimonial cards
8. **How It Works** — Vertical timeline (zigzag on desktop)
9. **CTA Form** — Primary conversion section with form
10. **FAQ** — Accordion style
11. **Founder's Note** — Photo + story
12. **Final CTA Banner** — Terracotta background
13. **Footer** — 3-column with links

### Responsive Strategy
- Desktop: Multi-column layouts, full spacing
- Tablet: 2-column grids, reduced spacing
- Mobile: Single column, stacked, sticky bottom CTA

## 4. Features & Interactions

### Core Features
- Email collection form with validation
- Smooth scroll navigation
- FAQ accordion
- Mobile hamburger menu
- Sticky CTA button on mobile

### Interaction Details
- **Navbar:** Scrolls to form on "I'm Interested" click
- **Hero buttons:** Primary scrolls to form, secondary scrolls to next section
- **Cards:** Hover lift effect
- **Form:** Real-time validation, success state
- **FAQ:** Click to expand/collapse with icon rotation
- **Mobile CTA:** Fixed at bottom, always visible

### Form Fields
- Name (required)
- Email (required, validated)
- City (required)
- Interest type (radio: Buy/Sell/Donate/All)

## 5. Component Inventory

### Navbar
- States: Transparent (top), Solid cream (scrolled)
- Mobile: Hamburger → slide-out drawer

### Hero Section
- Badge tag, H1, subheading, 2 CTAs, trust line
- Floating illustration with animation

### Cards (Problem/Feature/Testimonial)
- Default: Cream bg, sketch border, shadow
- Hover: Lift up 4px, increased shadow, border color change

### Timeline Steps
- Numbered circles with pencil sketch style
- Alternating left-right on desktop

### Form
- Inputs: Cream bg, bottom border only
- Focus: Terracotta bottom border
- Submit: Large terracotta button

### FAQ Accordion
- Closed: "+" icon, gray text
- Open: "×" icon, terracotta text, expanded content

### Footer
- Dark background, 3-column layout
- Social icons, quick links

## 6. Technical Approach

- **Framework:** React + Vite + TypeScript
- **Styling:** Tailwind CSS + custom CSS for sketch effects
- **Animations:** CSS animations + Intersection Observer for scroll reveals
- **Form:** Local state management (simulated backend)
- **Icons:** Custom SVG components
- **Fonts:** Google Fonts (Playfair Display, Crimson Pro, Inter, Caveat)
