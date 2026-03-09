# Demo Site Creative Reset Plan

## Objectives
- Replace the current direction with a completely different visual theme.
- Create a world-class, high-wow presentation for the director demo.
- Build a distinctive arts-forward identity across the shared shell and key pages.
- Use the dance imagery as part of a more dramatic, installation-like visual system.

## Checklist
- [x] Rebuild the shared visual system in `src/app/globals.css` around a bold new art direction.
- [x] Redesign `src/components/Navigation.tsx`, `src/components/Footer.tsx`, and `src/components/StatsCounter.tsx` to match the new brand language.
- [x] Reimagine `src/app/page.tsx` with a wow-factor homepage composition.
- [x] Reimagine `src/app/dance/page.tsx` with the same new theme and stronger storytelling.
- [x] Verify the redesign with lint/build checks and document the results below.

## Review
- Previous clean/minimal directions were rejected.
- Current task is a full creative reset with a distinctly different theme.
- Implemented a new "Kaleidoscope House" direction with luminous jewel-tone gradients, theatrical typography, prism-framed panels, and a more installation-like layout language.
- Rebuilt the shared shell so navigation, stats, and footer now feel like part of the brand concept rather than neutral chrome.
- Reimagined the homepage as a campaign-style landing page with a dramatic hero, mosaic program grid, performance-led storytelling, and a stronger closing CTA.
- Reimagined the dance page in the same visual world using the new dance images as centerpiece assets.
- Verification:
- `npm run lint` passes with the same pre-existing unrelated warnings in other pages.
- `npm run build` passes successfully after the creative reset.
- Browser snapshots reviewed for `/` and `/dance`.
