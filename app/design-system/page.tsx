import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

export default function DesignSystemPage() {
  return (
    <main style={{ maxWidth: '860px', margin: '0 auto', padding: 'var(--space-16) var(--space-8)' }}>

      {/* Header */}
      <section style={{ marginBottom: 'var(--space-16)' }}>
        <Badge variant="accent" style={{ marginBottom: 'var(--space-4)' }}>Design System</Badge>
        <h1 style={{ marginBottom: 'var(--space-4)' }}>Playground</h1>
        <p style={{ fontSize: 'var(--text-lg)', maxWidth: '540px' }}>
          A living kitchen sink for tokens, components, and patterns.
          Use this as a reference when generating UI with Claude Design.
        </p>
      </section>

      <hr />

      {/* Color Tokens */}
      <section style={{ marginBottom: 'var(--space-16)', marginTop: 'var(--space-12)' }}>
        <h3 style={{ marginBottom: 'var(--space-8)' }}>Colors</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 'var(--space-4)' }}>
          {[
            { name: 'bg', var: '--color-bg' },
            { name: 'bg-subtle', var: '--color-bg-subtle' },
            { name: 'surface', var: '--color-surface' },
            { name: 'border', var: '--color-border' },
            { name: 'text-primary', var: '--color-text-primary' },
            { name: 'text-secondary', var: '--color-text-secondary' },
            { name: 'text-muted', var: '--color-text-muted' },
            { name: 'accent', var: '--color-accent' },
            { name: 'accent-subtle', var: '--color-accent-subtle' },
          ].map((token) => (
            <div key={token.name}>
              <div style={{
                height: '48px',
                background: `var(${token.var})`,
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                marginBottom: 'var(--space-2)'
              }} />
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>
                {token.var}
              </p>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)' }}>
                {token.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      <hr />

      {/* Typography */}
      <section style={{ marginBottom: 'var(--space-16)', marginTop: 'var(--space-12)' }}>
        <h3 style={{ marginBottom: 'var(--space-8)' }}>Typography</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
          {[
            { label: 'text-5xl / serif', size: 'var(--text-5xl)', font: 'var(--font-serif)', sample: 'The quick brown fox' },
            { label: 'text-4xl / serif', size: 'var(--text-4xl)', font: 'var(--font-serif)', sample: 'The quick brown fox' },
            { label: 'text-3xl / serif', size: 'var(--text-3xl)', font: 'var(--font-serif)', sample: 'The quick brown fox' },
            { label: 'text-2xl / sans', size: 'var(--text-2xl)', font: 'var(--font-sans)', sample: 'The quick brown fox' },
            { label: 'text-xl / sans', size: 'var(--text-xl)', font: 'var(--font-sans)', sample: 'The quick brown fox jumps' },
            { label: 'text-base / sans', size: 'var(--text-base)', font: 'var(--font-sans)', sample: 'The quick brown fox jumps over the lazy dog' },
            { label: 'text-sm / sans', size: 'var(--text-sm)', font: 'var(--font-sans)', sample: 'The quick brown fox jumps over the lazy dog' },
            { label: 'text-xs / mono', size: 'var(--text-xs)', font: 'var(--font-mono)', sample: '--color-text-primary: #f5f4f2' },
          ].map((t) => (
            <div key={t.label} style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-6)' }}>
              <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)', width: '180px', flexShrink: 0 }}>
                {t.label}
              </span>
              <span style={{ fontSize: t.size, fontFamily: t.font, lineHeight: 'var(--leading-tight)' }}>
                {t.sample}
              </span>
            </div>
          ))}
        </div>
      </section>

      <hr />

      {/* Buttons */}
      <section style={{ marginBottom: 'var(--space-16)', marginTop: 'var(--space-12)' }}>
        <h3 style={{ marginBottom: 'var(--space-8)' }}>Buttons</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
          <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center', flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg">Primary Large</Button>
            <Button variant="primary" size="md">Primary Medium</Button>
            <Button variant="primary" size="sm">Primary Small</Button>
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center', flexWrap: 'wrap' }}>
            <Button variant="secondary" size="lg">Secondary Large</Button>
            <Button variant="secondary" size="md">Secondary Medium</Button>
            <Button variant="secondary" size="sm">Secondary Small</Button>
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center', flexWrap: 'wrap' }}>
            <Button variant="ghost" size="lg">Ghost Large</Button>
            <Button variant="ghost" size="md">Ghost Medium</Button>
            <Button variant="ghost" size="sm">Ghost Small</Button>
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center', flexWrap: 'wrap' }}>
            <Button variant="primary" disabled>Disabled</Button>
            <Button variant="secondary" disabled>Disabled</Button>
          </div>
        </div>
      </section>

      <hr />

      {/* Badges */}
      <section style={{ marginBottom: 'var(--space-16)', marginTop: 'var(--space-12)' }}>
        <h3 style={{ marginBottom: 'var(--space-8)' }}>Badges</h3>
        <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', alignItems: 'center' }}>
          <Badge variant="default">Default</Badge>
          <Badge variant="accent">Accent</Badge>
          <Badge variant="muted">Muted</Badge>
        </div>
      </section>

      <hr />

      {/* Cards */}
      <section style={{ marginBottom: 'var(--space-16)', marginTop: 'var(--space-12)' }}>
        <h3 style={{ marginBottom: 'var(--space-8)' }}>Cards</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)' }}>
          <Card>
            <Badge variant="muted" style={{ marginBottom: 'var(--space-3)' }}>Article</Badge>
            <h5 style={{ marginBottom: 'var(--space-2)' }}>Card with content</h5>
            <p style={{ fontSize: 'var(--text-sm)' }}>
              A basic card component using surface background and subtle border.
            </p>
          </Card>
          <Card>
            <Badge variant="accent" style={{ marginBottom: 'var(--space-3)' }}>New</Badge>
            <h5 style={{ marginBottom: 'var(--space-2)' }}>Another card</h5>
            <p style={{ fontSize: 'var(--text-sm)' }}>
              Cards inherit tokens so they adapt automatically when you switch themes.
            </p>
          </Card>
        </div>
      </section>

      <hr />

      {/* Spacing */}
      <section style={{ marginBottom: 'var(--space-16)', marginTop: 'var(--space-12)' }}>
        <h3 style={{ marginBottom: 'var(--space-8)' }}>Spacing Scale</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          {[1,2,3,4,5,6,8,10,12,16,20,24].map((n) => (
            <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
              <span style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)', width: '80px' }}>
                --space-{n}
              </span>
              <div style={{
                height: '8px',
                width: `var(--space-${n})`,
                background: 'var(--color-accent)',
                borderRadius: 'var(--radius-full)'
              }} />
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}
