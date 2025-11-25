# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Images and Mock Data (Developer Notes)

If images from `scraped_properties.json` are not showing in the app, ensure you do the following:

1. Copy `downloaded_images/` from the repository root into `public/downloaded_images` so the dev server serves them at `/downloaded_images/`.
	- Run: `npm run copy-images` to copy all images to `public/downloaded_images`.
2. (Optional) Regenerate `mockData.js` from `scraped_properties.json` to fix image paths:
	- Run: `npm run generate-mock-data` (this runs `convert-data.cjs` which replaces `./downloaded_images/` with `/downloaded_images/`).
3. Start the dev server: `npm run dev`.

If images still don't appear, the app normalizes image paths at runtime to convert `./downloaded_images/...` to `/downloaded_images/...`.

