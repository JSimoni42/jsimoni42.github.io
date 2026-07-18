# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

John Simoni's personal website (jsimoni42.github.io), a single-page React app with a retro
terminal/ASCII-art aesthetic, deployed to GitHub Pages.

## Commands

- `npm start` — run the Parcel dev server (entry point is `src/index.html`)
- `npm run build` — production build via Parcel, output to `dist/`
- `npm run typecheck` — run `tsc` (no-emit type check; scoped to `src/index.tsx` per `tsconfig.json`, which pulls in the whole app through imports)
- `npm run format` — `prettier --write` over all `.ts`/`.tsx` files (2-space, no semicolons, `arrowParens: avoid` — see `.prettierrc`)
- `npm run deploy` — build then publish `dist/` to the `master` branch via `gh-pages` (this is what actually ships the live site — do not run without being asked)

There is no test suite and no lint script configured in this repo.

### Branches

`site-dev` is the branch containing the site's source code — base branches and PRs off `site-dev`,
not `master`. `master` holds the built `dist/` output published by `npm run deploy` (via
`gh-pages`) and should never be a PR target for source changes.

**Exception**: `master` also hosts `.github/workflows/deploy.yml`, a manually-triggered
(`workflow_dispatch`) GitHub Actions alternative to `npm run deploy` that builds `site-dev` and
pushes `dist/` to `master` from CI. This file intentionally lives only on `master` (it was
deliberately removed from `site-dev` — see git history), so it's the one legitimate case where a
PR should target `master` directly. Its publish step wipes the `master` worktree before copying
in `dist/` — that wipe must always exclude `.github` (e.g. via the `':!.github'` pathspec
already in the file), or the workflow deletes its own definition on every run, as happened once
already (see commit `a075547`). Don't "simplify" that exclusion away.

### Résumé content fetch

`scripts/fetch-resume.js` runs as a `prebuild`/`prestart`/`pretypecheck` npm lifecycle hook. It
fetches the rendered résumé HTML from the `JSimoni42/resume` repo's latest GitHub release
(`.../resume/releases/latest/download/resume.html`, auto-published by that repo's CI on every
push to its `main`), extracts the `#content` fragment, and writes it to the gitignored
`src/generated/resume.ts` (consumed by `pages/resume.tsx`). If the fetch fails and a previously
generated file already exists, it's left in place with a warning instead of failing the build —
but a completely fresh checkout with no network access will fail to build/typecheck until the
fetch succeeds at least once.

### Node version

Use the version pinned in `.nvmrc` (currently 24.18.0, latest LTS), via `nvm use`. The
`canvas` package used to be a dependency here but was removed — it was unused in `src/` and
its native addon failed to compile against current Node/V8 versions.

## Architecture

**Routing & entry**: `src/index.tsx` creates the root and a `react-router-dom` browser router
with two routes: `/` (`pages/index.tsx`), with an `errorElement` (`pages/error.tsx`), and
`/resume` (`pages/resume.tsx`). `src/index.html` is the Parcel entry HTML; it also loads Google
Fonts (Roboto Mono / Courier Prime) referenced by global styles.

**Global styling**: `components/page-wrapper.tsx` injects a `styled-components` global style
(black background, monospace fonts, `<pre>` font-size that shrinks on mobile) and should wrap
every page. `constants/siteConstants.ts` exports `MobileBreakpoint` (450px), which both the
global style's media query and `ResponsiveBreakpoint` use — keep them in sync if changed.

**Desktop/mobile split**: Pages don't use CSS media queries to switch layouts; instead
`components/ResponsiveBreakpoint.tsx` measures `window.outerWidth` at mount and renders either
a `desktopView` or `mobileView` element outright. The index page's two variants live in
`components/index/Desktop.tsx` and `components/index/Mobile.tsx` and are structured quite
differently (desktop shows a Konva mountain animation inside an ASCII computer frame; mobile
shows an ASCII record player that plays background audio).

**ASCII-art content as data**: Large ASCII banners (name header, computer frame, record player)
live as template-literal strings in `constants/siteConstants.ts` (`Index`, `Computer`,
`RecordPlayer`) and are rendered verbatim inside `<pre>` tags by the corresponding components
(`AsciiComputer.tsx`, `RecordPlayer.tsx`). When editing these strings, preserve exact spacing —
it's the art. Sources for the borrowed ASCII art are credited in `CREDITS.md` at the repo root.

**Typewriter effect**: `CursorRow.tsx` types out a single string on an interval and reports
completion via `onComplete`; `CursorRowGroup.tsx` sequences an array of strings through
multiple `CursorRow`s, advancing to the next only once the previous finishes. Desktop index
page persists a "finish typing immediately" preference to `localStorage`
(`shouldFinishTyping`) triggered by double-clicking the bio text.

**Canvas animation**: `MountainBiking.tsx` draws directly with `Konva` (not React-Konva) inside
a plain `<div>` ref callback — no React reconciliation for the drawing itself, just an
imperative `Stage`/`Layer` built once on mount.

**Media rotation**: `AutoplayVideos.tsx` and the mobile page's audio player both cycle through
a fixed list of URLs (`VideoURLs`, `AudioUrls` in `siteConstants.ts`), advancing to the next
index on the media element's `ended` event.

**Résumé page**: `pages/resume.tsx` doesn't hardcode résumé content — it renders the
build-time-fetched HTML fragment (see "Résumé content fetch" above) via
`dangerouslySetInnerHTML`, then re-skins the fetched markup's stable ids/classes
(`#content`, `#personal-section`, `#experience-section`, `.job-header`) with styled-components
CSS matching this site's theme. The `JSimoni42/resume` repo remains the single source of truth
for the content; don't copy résumé text into this repo.

## Known dead code

`components/layout/layout.tsx` and `components/image.tsx` are leftovers from a prior
Gatsby-based version of the site (they import `gatsby`/`gatsby-image` and a nonexistent
`siteMetadata` export) and are not imported anywhere in the current router-based app.
`components/page-frame.tsx` (`PageFrame`) is also currently unused. Don't assume these are
wired in without checking; don't extend them without confirming they're meant to be revived.
