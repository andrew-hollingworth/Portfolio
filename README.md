# Andrew Hollingworth — Portfolio

Personal portfolio site. Live at: <!-- TODO: add URL once deployed to Netlify -->

## Tech Stack

- [Vite](https://vite.dev/) + [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [React Router v6](https://reactrouter.com/)
- [Iconify](https://iconify.design/) for icons

## Local Development

```bash
cd client
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build

```bash
npm run build      # TypeScript check + production build → client/dist/
npm run preview    # Serve the production build locally
```

## Customization

| What to change | Where |
|---|---|
| Colors (light + dark) | CSS variables in [`client/src/index.css`](client/src/index.css) — `:root` and `.dark` blocks |
| Fonts | Google Fonts `<link>` in [`client/index.html`](client/index.html) **and** font variables in `src/index.css` — change both together |
| Resume PDF | Replace [`client/public/AndrewHollingworthResume2024.pdf`](client/public/AndrewHollingworthResume2024.pdf) and update `RESUME_URL` in `src/config.ts` to match the new filename |
| Add a project | Add an entry to the `projects` array in [`client/src/data/projects.ts`](client/src/data/projects.ts) |
| Show/hide My Work nav link | Set `SHOW_WORK_NAV` in [`client/src/config.ts`](client/src/config.ts) |
| Contact email | Set `CONTACT_EMAIL` in [`client/src/config.ts`](client/src/config.ts) |

## Deployment (Netlify)

The site deploys automatically on every push to `main`.

**To redeploy after making changes:**

```bash
git add <changed files>
git commit -m "your message"
git push origin main
```

Netlify detects the push and runs the build automatically.

**One-time Netlify setup** (already done once the site is connected):
- Build settings: Base `client`, Command `npm run build`, Publish `client/dist`
- Custom domain + HTTPS: managed in the Netlify dashboard
- SPA routing is handled by `client/public/_redirects`
