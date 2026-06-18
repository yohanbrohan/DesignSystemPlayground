import Link from 'next/link'

export default function Home() {
  return (
    <main style={{ maxWidth: '640px', margin: '0 auto', padding: 'var(--space-24) var(--space-8)' }}>
      <h1 style={{ marginBottom: 'var(--space-4)' }}>Design System Playground</h1>
      <p style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-8)' }}>
        A minimal, token-based design system for learning and iterating with Claude Design.
      </p>
      <Link href="/design-system" style={{
        display: 'inline-flex',
        padding: 'var(--space-3) var(--space-6)',
        background: 'var(--color-accent)',
        color: 'var(--color-text-inverse)',
        borderRadius: 'var(--radius-sm)',
        fontSize: 'var(--text-sm)',
        fontWeight: 500,
        letterSpacing: 'var(--tracking-wide)',
        textTransform: 'uppercase'
      }}>
        View Kitchen Sink →
      </Link>
    </main>
  )
}
