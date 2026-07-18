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

### Node version

Use the version pinned in `.nvmrc` (currently 24.18.0, latest LTS), via `nvm use`. The
`canvas` package used to be a dependency here but was removed — it was unused in `src/` and
its native addon failed to compile against current Node/V8 versions.

## Architecture

**Routing & entry**: `src/index.tsx` creates the root and a `react-router-dom` browser router
with one route, `/` (`pages/index.tsx`), and an `errorElement` (`pages/error.tsx`) for it.
`src/index.html` is the Parcel entry HTML; it also loads Google Fonts (Roboto Mono / Courier
Prime) referenced by global styles.

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

## Known dead code

`components/layout/layout.tsx` and `components/image.tsx` are leftovers from a prior
Gatsby-based version of the site (they import `gatsby`/`gatsby-image` and a nonexistent
`siteMetadata` export) and are not imported anywhere in the current router-based app.
`components/page-frame.tsx` (`PageFrame`) is also currently unused. Don't assume these are
wired in without checking; don't extend them without confirming they're meant to be revived.
