# Design Sync Notes

## Setup decisions

- **No dist/ output**: This is a Next.js app, not a publishable library. The converter uses synth-entry mode, scanning `components/ui/` directly. `cfg.entry` is set to `./dist/index.js` (non-existent) as a trick to make PKG_DIR resolve to the repo root instead of `node_modules/design-system-playground` (which npm won't self-install).
- **Custom CSS entry**: `app/globals.css` has `@import "tailwindcss"` which esbuild can't resolve outside Next.js. Created `styles/design-system.css` — a self-contained CSS entry with tokens and component styles inlined, no Tailwind import. Keep this in sync with `globals.css` when component CSS changes.
- **Button cardMode column**: Button's `Sizes` and `Variants` stories were wider than the grid card width. Applied `overrides.Button.cardMode = "column"`.

## Known render warns

- `[FONT_MISSING] "JetBrains Mono", "Fira Code"` — these appear in `--font-mono` fallback stack but have no `@font-face`. The final fallback is `Courier New, monospace` (system). Accepted substitute — mono font is only used for code samples, not component content. No action needed unless the brand requires exact mono rendering.

## Re-sync command

```sh
# Copy fresh scripts first (picks up any converter updates):
SKILL_DIR="/private/tmp/claude-501/bundled-skills/2.1.178/75e8989cc63eaba73037a77adf0e3830/design-sync"
cp -r "$SKILL_DIR/package-build.mjs" "$SKILL_DIR/package-validate.mjs" "$SKILL_DIR/package-capture.mjs" "$SKILL_DIR/resync.mjs" "$SKILL_DIR/lib" "$SKILL_DIR/storybook" .ds-sync/

# Fetch remote anchor:
mkdir -p .design-sync/.cache
# (download _ds_sync.json from project b957473e-1d51-4866-8e7f-03b0f66de47e into .design-sync/.cache/remote-sync.json)

# Run driver:
node .ds-sync/resync.mjs --config .design-sync/config.json --node-modules ./node_modules --out ./ds-bundle --remote .design-sync/.cache/remote-sync.json
```

## Re-sync risks

- `styles/design-system.css` is a manually maintained copy of the component CSS from `globals.css` — if someone adds/changes a CSS class in `globals.css`, this file needs a matching update or preview renders will drift from the app's actual styles. Check if they diverge before upload.
- `components/ui/index.ts` re-exports all components — if a new component is added but not re-exported there, the synth-entry won't discover it.
- Node/npm version: built with Node 25.7.0 / npm 11.10.1. The converter uses ESM imports — anything before Node 18 will fail.
- The `.ds-sync/` scripts are bundled at sync time — on re-sync, always re-copy from the skill dir (the cp -r line above) to pick up fixes.
