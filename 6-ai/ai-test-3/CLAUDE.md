# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Vite dev server with HMR
- `npm run build` — production build to `dist/`
- `npm run preview` — preview production build locally
- `npm run lint` — run ESLint across the project

## Architecture

React 19 + Vite 7 app scaffolded from the official `create-vite` React template. Uses JSX (not TypeScript).

- **Entry point:** `index.html` loads `src/main.jsx`, which renders `<App />` inside `<StrictMode>`
- **Bundler:** Vite with `@vitejs/plugin-react` (Babel-based Fast Refresh)
- **ESLint:** flat config (`eslint.config.js`) with `react-hooks` and `react-refresh` plugins; unused vars starting with uppercase or `_` are allowed

## Conventions

- ES modules throughout (`"type": "module"` in package.json)
- CSS files co-located with components (`App.css`, `index.css`)
- Static assets in `public/`; importable assets in `src/assets/`
