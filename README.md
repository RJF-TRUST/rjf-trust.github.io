# jacky.fan.nz

Source for [jacky.fan.nz](https://jacky.fan.nz), a personal website built with React, MUI and Vite and hosted on GitHub Pages.

## Requirements

- Node.js 24 LTS, the version CI uses.
- Yarn 1, run through Corepack (`corepack yarn ...`), so no global Yarn install is needed. Corepack ships with Node 24. Node 25 and later no longer bundle it; on those versions install it with `npm install --global corepack`.

## Develop

```bash
corepack yarn install --frozen-lockfile
corepack yarn start
```

`start` runs the Vite dev server at <http://localhost:5173> with hot reload.

Where things live:

| Path | What it holds |
| --- | --- |
| `src/info/Info.jsx` | Site content: name, bio, skills, hobbies, social and contact links |
| `src/components/home/` | Home page |
| `src/components/about/` | About page and the terminal-style window |
| `src/components/contact/` | Contact page |
| `src/global.scss` | Global styles (font, resets) |
| `src/img/` | Images |

Icons come from [`@mui/icons-material`](https://mui.com/material-ui/material-icons/).

## Test

There is no automated test suite; `corepack yarn test` only prints a message. Before opening a pull request:

1. Build the production bundle. It must finish without errors.

   ```bash
   corepack yarn build
   ```

   The build writes `dist/` and copies `index.html` to `404.html`, which is how GitHub Pages serves `/about` and `/contact`.

2. Serve the build and check it in a browser.

   ```bash
   corepack yarn preview
   ```

   Open <http://localhost:4173> and check `/`, `/about` and `/contact`:

   - at desktop width and at a phone width (for example 390 px in the browser's device mode);
   - in light and dark mode (the moon button in the navigation bar);
   - the social icons on the home page and the three dots on each terminal window are visible;
   - the navigation links work, and dark mode stays on after a page reload;
   - the browser console shows no errors.

   On the live site `/about` and `/contact` return HTTP status 404 even though the page loads. That is the `404.html` fallback; `vite preview` returns 200 for them.

3. If you changed dependencies, use Yarn (not npm) so `yarn.lock` stays in sync, and run:

   ```bash
   corepack yarn audit
   ```

## Deploy

`.github/workflows/deploy-pages.yaml` builds every pull request to `main`. A push to `main`, or a manual run of the workflow from `main`, builds and deploys to GitHub Pages. The custom domain comes from `CNAME`.

## Public repository

This repository is public. Do not commit secrets, tokens, `.env` files, private hostnames or IP addresses, or personal details beyond what the site already publishes. The build needs no secrets or environment variables.
