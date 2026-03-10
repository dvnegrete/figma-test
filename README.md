# Accindi — Figma to React (Pixel Perfect)

A proof of concept demonstrating the complete workflow of transforming a Figma design into a functional React interface, faithfully reproducing the spacing, typography, color, and component values defined in the original file.

---

## Goal

Demonstrate the ability to:

1. **Extract** exact values from a Figma file via the official API (colors, padding, gap, border-radius, typography, images)
2. **Translate** those values into React components + plain CSS without external UI libraries
3. **Architect** the code following Clean Architecture principles and separation of concerns
4. **Achieve** a pixel-perfect result compared to the original design

---

## Design Reference

| | |
|---|---|
| **File** | Accindi — Figma Designs Marketplace |
| **Tool** | Figma (imported `.fig` file) |
| **Screen implemented** | My Offers — grid view with filters |
| **Reference resolution** | 1440 × 1024 px |

Product images and style values (colors, spacing, typography, radii) were taken directly from the Figma design file.

---

## Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 19 | UI framework |
| TypeScript | 5.9 | Static typing |
| Vite | 7 | Bundler and dev server |
| Plain CSS | — | Styles (no Tailwind or CSS-in-JS) |

No external component libraries. The entire UI system was built from scratch based on the design.

---

## Project Structure

```
src/
├── types/
│   └── index.ts              # Domain entities: Offer, AlertType, AlertConfig
│
├── data/
│   ├── offers.ts             # Mock data for the 6 offers (extracted from the design)
│   └── alerts.ts             # Configuration for the 4 reusable alert types
│
├── components/
│   │
│   ├── ui/                   # Generic components — no business logic
│   │   ├── Alert/            # Modal with success / error / dev variants
│   │   ├── Dropdown/         # Filter with multi-select checkbox panel
│   │   ├── NavItem/          # Navigation button for dark sidebars
│   │   ├── Pagination/       # Pagination with dynamic page calculation
│   │   ├── SearchInput/      # Search field with integrated icon
│   │   ├── icons.tsx         # SVG icon library (Tabler Icons style)
│   │   └── index.ts          # Barrel export
│   │
│   ├── OfferCard/            # Product card — consumes Offer + ui/
│   ├── Sidebar/              # Navigation sidebar — collapsible by group
│   ├── Navbar/               # Top bar — breadcrumb + action buttons
│   └── MyOffers/             # Main page — orchestrates grid + filters
│
├── App.tsx                   # Root layout: Sidebar + Navbar + MyOffers
├── App.css                   # Application shell styles
└── index.css                 # Global reset + font imports
```

---

## Implemented Features

### My Offers — Grid
- 3-column grid with 6 offer cards
- Real product images exported from the Figma file via API
- Points badge required per offer

### Filters
- **"All Categories" Dropdown** — floating panel with multi-select checkboxes (All / Products / Services / Discounts), filters in real time by `offer.category`
- **Search** — searches by `offer.title` (case-insensitive, partial match)
- Both filters work as AND; changing either one resets to page 1
- Empty state shown when no offers match

### Pagination
- Dynamic pagination calculated over filtered results
- Items-per-page selector (8 / 16 / 24)
- Automatically hidden when there is only one page

### Sidebar
- **Dashboard** group — collapsible (shows/hides Profile)
- **Rewards Management** group — collapsible (shows/hides Offers + Transactions)
- Pure CSS animation using `grid-template-rows: 0fr ↔ 1fr`
- Active "Offers" item highlighted with background `#1a365d`

### Alerts
- **Purchase successful** — green check icon (clicking the cart button on an offer)
- **Purchase unsuccessful** — red error icon (clicking the info button on an offer)
- **Dev** — blue info icon (unimplemented buttons: Search, Bell, nav items)
- Rendered via `createPortal` onto `document.body`
- Dismissed with the ✕ button or by clicking the backdrop

### Responsive
- `> 1200px` — 3 columns (faithful to the Figma design)
- `780px – 1200px` — 2 columns
- `< 780px` — 1 column

---

## Implementation Process

```
Figma design file
    ↓  inspect design values
Colors, padding, gap, radius, fonts, images
    ↓  translate into CSS and components
React + plain CSS
    ↓  compare against design
Pixel-perfect result
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Preview the build
npm run preview
```

---

## Architecture Decisions

| Decision | Reason |
|---|---|
| Plain CSS, no frameworks | Maximum control over pixel-perfect output; no third-party style overrides |
| `ui/` separated from feature components | Generic components have no domain knowledge; reusable across any screen |
| Types in `src/types/` | Single source of truth; `AlertType`, `AlertConfig`, `Offer` available globally |
| Data in `src/data/` | Decouples static configuration from UI state; `ALERTS` reusable in any component |
| `createPortal` for modals | Escapes any `z-index` or `overflow:hidden` in the component tree |
| `grid-template-rows: 0fr ↔ 1fr` | Collapse animation without measuring height in JavaScript |
| Design values sourced from Figma | All spacing, colors, and typography taken directly from the design file |
