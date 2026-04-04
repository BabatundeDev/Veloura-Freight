# Veloura Freight Logistics

A polished freight logistics landing site built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Project Summary

Veloura Freight Logistics is a marketing and customer-facing web application for a logistics company. It supports:

- multi-page navigation for corporate logistics services
- shipment tracking lookup with mock status data
- quote request intake with local persistence
- interactive freight cost estimation
- industry and service showcases
- responsive navigation and smooth animations

The app is designed as a Vite-powered React SPA with client-side routing and accessible page transitions.

## Pages & Functionality

### Home

- Hero section with animated visuals and primary CTAs.
- Global network section showing geographic reach.
- Featured cards for Air, Sea, and Land freight.
- Embedded `FreightCalculator` component for instant pricing estimates.
- CTA blocks linking to quote and contact pages.

### Services

- Describes the three core logistics modes:
  - Air Freight
  - Sea Freight
  - Land Freight
- Each service includes a custom icon, summary, and feature bullets.

### Tracking

- Shipment tracking page with a tracking ID form.
- Simulates a lookup using sample IDs.
- Displays current stage, progress bar, and milestones.
- Provides error handling for invalid entries.

### Quote

- Quote request form collecting contact and shipment details.
- Supports delivery type selection: Air, Sea, Land.
- Stores submissions in browser `localStorage` for demo purposes.
- Shows a confirmation message after submission.

### Industries

- Industry-specific cards for key sectors:
  - Oil & Gas
  - Retail
  - Agriculture
  - Manufacturing
- Each card highlights logistics capabilities for the sector.

### Contact

- Displays direct contact channels:
  - email
  - phone
  - WhatsApp
- Shows an illustrative office location map.
- Includes address and contact CTA buttons.

## Key Components

### `src/components/Layout.tsx`

- Wraps all pages with a shared layout.
- Adds `Navbar` at the top and `Footer` at the bottom.
- Renders page content through `Outlet`.

### `src/components/Navbar.tsx`

- Desktop navigation links and mobile menu toggle.
- Uses `useState` for open/close state.
- Animates the mobile menu with `framer-motion`.

### `src/components/Footer.tsx`

- Static footer with company links and quick actions.
- Includes branding and compliance messaging.

### `src/components/ScrollToTop.tsx`

- Automatically scrolls to the top when the route changes.
- Improves navigation behavior on page transitions.

### `src/components/Hero.tsx`

- Full-screen hero section with animated truck graphics.
- Background image layer and CTA buttons.
- Visual brand messaging for global logistics.

### `src/components/GlobalMap.tsx`

- Marketing section highlighting worldwide coverage.
- Includes region labels and benefit list items.

### `src/components/FreightCalculator.tsx`

- Interactive cost estimator for freight shipments.
- Inputs: weight, shipping mode, and distance.
- Uses `useMemo` to compute an estimated price.
- Displays the result in a styled pricing card.

### `src/components/Reveal.tsx`

- Entrance animation wrapper using `framer-motion`.
- Triggers when content enters the viewport.
- Used for fade-up reveal effects across pages.

### `src/components/BrandAirplaneMark.tsx`

- Small logo/brand mark used in the navigation and footer.
- Simple SVG-based airplane icon with styling.

## Data & Tracking Logic

### `src/data/mockTracking.ts`

- Stores demo shipment IDs and stage data.
- Builds a stage timeline for tracking results.
- Converts form input into normalized tracking IDs.
- Supports optional local `localStorage` overrides.

## Application State

The app uses React state in several interactive places:

- `Navbar`: mobile menu open/close state.
- `Tracking`: tracking ID input, result state, error state, loading state.
- `Quote`: form values, submission state, loading state.
- `FreightCalculator`: selected mode, weight, distance, and computed cost.

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Framer Motion

## Project Structure

- `src/App.tsx` — main route definitions and layout nesting.
- `src/components/` — reusable UI pieces and layout components.
- `src/pages/` — route pages with content and interactions.
- `src/data/` — mock tracking logic and data utilities.
- `public/` — static assets and images.
- `src/index.css` — global styling and Tailwind setup.

## Notes

- Navigation is handled with `react-router-dom`.
- Styling is built with Tailwind CSS utility classes.
- Animations are powered by `framer-motion`.
- Local storage is used for demo persistence in the quote and tracking flows.

## License

This repository is currently private.
