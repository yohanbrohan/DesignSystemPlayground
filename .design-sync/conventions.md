# Design System Playground — conventions

## Setup

No provider or wrapper required. Import components directly from `design-system-playground` and use them. The design system is **dark-first**: `--color-bg` is `#14151a` by default. To render in light mode, set `data-theme="light"` on a parent element.

```tsx
// Minimal wrapper — no ThemeProvider needed
<div>
  <Button variant="primary">Publish</Button>
</div>
```

## Styling idiom: BEM CSS classes

This is a **BEM class system** — do not use Tailwind utilities, inline theme tokens, or custom CSS to restyle components. Components render their own classes internally; you compose via props.

**Component classes (all verified in the bundle):**

| Component | Base class | Modifier classes |
|-----------|------------|-----------------|
| `Button` | `.button` | `--primary` `--secondary` `--ghost` (variant) · `--sm` `--md` `--lg` (size) |
| `Badge` | `.badge` | `--default` `--accent` `--muted` (variant) |
| `Card` | `.card` | `--padded` (added when `padded={true}`, which is the default) |

Use `className` or `style` for layout only (spacing, flex, grid). Never re-declare `.button` or `.badge` styles.

## Token vocabulary

Semantic tokens via CSS custom properties — use `var(--token)` in any custom layout glue:

```
Colors:    --color-bg, --color-bg-subtle, --color-surface, --color-border,
           --color-border-subtle, --color-text-primary, --color-text-secondary,
           --color-text-muted, --color-accent, --color-accent-subtle
Fonts:     --font-sans, --font-serif, --font-mono
Text size: --text-xs (12px) → --text-5xl (60px)
Spacing:   --space-1 (4px) → --space-24 (96px)
Radius:    --radius-sm (2px), --radius-md (4px), --radius-lg (8px), --radius-full
Shadows:   --shadow-sm, --shadow-md, --shadow-lg
```

## Where the truth lives

- **`styles.css`** (and its `_ds_bundle.css` import): all token definitions + component CSS
- **`components/general/<Name>/<Name>.prompt.md`**: per-component API reference

## Idiomatic snippet

```tsx
import { Button, Badge, Card } from 'design-system-playground';

function ArticleCard() {
  return (
    <Card>
      <Badge variant="accent" style={{ marginBottom: 'var(--space-3)' }}>New</Badge>
      <h5 style={{ marginBottom: 'var(--space-2)' }}>Getting started</h5>
      <p style={{ fontSize: 'var(--text-sm)', marginBottom: 'var(--space-4)' }}>
        A short introduction to the design system and its token vocabulary.
      </p>
      <Button variant="primary" size="sm">Read more</Button>
    </Card>
  );
}
```
