# OneThing

A single-page cinematic hero section with a fullscreen looping background video,
glassmorphic navigation, and a light/dark theme that crossfades between a daytime
and a nighttime clip.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS
- shadcn/ui

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL.

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Typecheck and build to `dist` |
| `npm run preview` | Serve the production build |
| `npm run lint` | Run oxlint |

## Theme

The switch in the navigation flips between two palettes and two background clips.
Light mode plays the daytime footage with dark text, dark mode plays the night
footage with the original navy and white palette. The choice is stored in
`localStorage`, and a script in the document head applies it before first paint so
the page never flashes the wrong palette.
