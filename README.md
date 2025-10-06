## Dashboard P4 (Vite + React + TypeScript + Tailwind)

A responsive dashboard starter built with React 18, Vite, TypeScript, Tailwind CSS, shadcn/ui (Radix UI), React Router, and Recharts.

### Features
- **Modern stack**: Vite, React 18, TypeScript
- **UI kit**: Tailwind CSS, shadcn/ui, Radix primitives
- **Routing**: React Router v6
- **Charts**: Recharts
- **State/data**: React Query
- **Animations**: Framer Motion, tailwindcss-animate
- **DX**: Aliases with `@` to `src`, strict ESLint config

### Quick start
Prerequisites: Node 18+ and npm.

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:8080)
npm run dev

# Type-check is implicit via tsconfig; run linter
npm run lint

# Production build
npm run build

# Preview production build locally
npm run preview
```

If you prefer Bun or pnpm:
- Bun: `bun install` then `bun run dev`
- pnpm: `pnpm install` then `pnpm dev`

### Scripts
- **dev**: `vite`
- **build**: `vite build`
- **build:dev**: `vite build --mode development`
- **preview**: `vite preview`
- **lint**: `eslint .`

The dev server is configured to run on port `8080` (see `vite.config.ts`).

### Tech stack
- React 18, TypeScript, Vite 5
- Tailwind CSS 3, `tailwindcss-animate`
- shadcn/ui components (Radix UI): accordion, dialog, dropdown, select, tabs, tooltip, etc.
- React Router 6
- React Query 5
- Recharts, Framer Motion

### Project structure
```text
.
├─ index.html
├─ src/
│  ├─ main.tsx
│  ├─ App.tsx
│  ├─ index.css
│  ├─ pages/
│  │  ├─ Dashboard.tsx
│  │  ├─ Analytics.tsx
│  │  ├─ Products.tsx
│  │  ├─ Orders.tsx
│  │  ├─ Customers.tsx
│  │  └─ Settings.tsx
│  ├─ components/
│  │  ├─ layout/ (navbar, sidebar, layout shell)
│  │  ├─ dashboard/ (e.g., StatsCard)
│  │  └─ ui/ (shadcn/ui primitives)
│  ├─ hooks/
│  ├─ lib/
│  └─ vite-env.d.ts
├─ public/
├─ tailwind.config.ts
├─ vite.config.ts
├─ tsconfig.json
└─ package.json
```

### Routing and pages
Common pages under `src/pages`:
- `Dashboard.tsx` (main overview)
- `Analytics.tsx`
- `Products.tsx`
- `Orders.tsx`
- `Customers.tsx`
- `Settings.tsx`

The not-found view is available as `NotFound.tsx`.

### UI components
Reusable UI primitives live in `src/components/ui` (shadcn/ui). Layout scaffolding is under `src/components/layout` with `DashboardLayout`, `DashboardNavbar`, and `DashboardSidebar`.

### Tailwind setup
Tailwind is configured in `tailwind.config.ts` with class-based dark mode and additional CSS variables for theme tokens (including sidebar colors). Make sure `index.css` includes Tailwind directives and CSS variables defined by shadcn/ui.

### Aliases
`vite.config.ts` defines an alias:

```ts
// vite.config.ts
resolve: {
  alias: { '@': path.resolve(__dirname, './src') }
}
```

Use it like:
```ts
import { StatsCard } from '@/components/dashboard/StatsCard';
```

### Development tips
- Components follow headless Radix patterns; compose primitives from `src/components/ui` for consistency.
- Prefer `clsx` and `tailwind-merge` to build className strings safely.
- For async data, use React Query (`@tanstack/react-query`).
- Keep routes and layout cleanly separated; layout files should avoid data fetching.

### Build and deploy
`npm run build` outputs a static production build to `dist/`. You can deploy the `dist/` folder to any static host (Netlify, Vercel static, GitHub Pages, Nginx, etc.).

Local preview of the production bundle:
```bash
npm run preview
```

### Linting
Run ESLint:
```bash
npm run lint
```

### Troubleshooting
- If the dev server isn’t reachable, confirm nothing else is bound to port 8080 or adjust the port in `vite.config.ts`.
- If Tailwind classes don’t apply, confirm files are included under `content` in `tailwind.config.ts` and that `index.css` imports Tailwind.
- For missing icons/components, ensure `lucide-react` and shadcn/ui components are installed and paths resolve via `@` alias.

### License
MIT — use it freely in personal or commercial projects.


