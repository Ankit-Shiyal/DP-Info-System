<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- ANCHORED_SESSION_SUMMARY -->
## Session Summary — Core Capabilities Redesign

### What Changed
- **`page.tsx`**: Replaced the 5-row zig-zag 50/50 services layout with a two-tier section:
  1. **PlatformPreview component** — A realistic dark-themed SaaS dashboard mockup showing KPI metrics (Revenue $2.4M, Active Users 8,432, System Health 99.99%), Recent Activity feed, Notifications panel, service status indicators, and a sidebar nav (E, A, C, D, P for the 5 domains)
  2. **Compact 5-column feature card grid** — Each service (Enterprise Software, AI, Cloud Infrastructure, Digital Products, API & Automation) as a concise card with icon, short description, tags (max 3), and link
- **CTA button**: Changed from "View All Capabilities" (outline) to "Explore Solutions" (filled dark with ArrowRight icon)
- **Reduced whitespace**: `marginBottom` on section header reduced from `4rem` to `2rem`

### What Stayed the Same
- All 5 illustration components (`EnterpriseDashboard`, `AINetwork`, `CloudDiagram`, `DigitalProductMockup`, `ApiInterface`) unchanged
- `services` data array unchanged (titles, descriptions, tags, icons, gradients, accent colors)
- Section background (`#F1F5F9`) and overall page flow preserved
- Other sections (Hero, Statistics, Why Choose Us, Portfolio, Workflow, FAQ, CTA) untouched

### Design Decisions
- PlatformPreview placed between header and feature cards to serve as the unified visual anchor ("realistic interactive product preview")
- Dashboard uses dark theme (`#0F172A` base) for visual contrast against the light section background
- Feature cards reduced from full-width zig-zag panels to 1/5-width columns to eliminate empty space and create a more compact, scannable layout
- Service descriptions truncated via display (CSS naturally clips in narrow cards) — all data preserved
- Sidebar labels (E, A, C, D, P) correspond to: Enterprise, AI, Cloud, Digital Products, API Platform
<!-- END_ANCHORED_SESSION_SUMMARY -->
