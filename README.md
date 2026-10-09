# Personal Expenses Platform

Initial architecture for a React + Vite + TypeScript personal-expenses frontend.

## Routes

- `/dashboard`
- `/expenses`
- `/expenses/add`
- `/analytics`
- `/categories`
- `/settings`

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## GitHub Pages

The included GitHub Actions workflow sets `VITE_BASE_PATH` automatically to the repository name and deploys the static `dist` output to GitHub Pages.

The app uses client-side routing with `BrowserRouter`. GitHub Pages project-site deployment requires the repository base path, which the workflow supplies at build time.

For local builds, `VITE_BASE_PATH=/` is used by default. For a project-site build outside the workflow, set it to `/<repository-name>/`.
