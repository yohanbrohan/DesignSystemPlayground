import { Card, Badge } from 'design-system-playground';

export function WithContent() {
  return (
    <div style={{ padding: '24px', maxWidth: '360px' }}>
      <Card>
        <Badge variant="muted" style={{ marginBottom: '12px' }}>Article</Badge>
        <h5 style={{ marginBottom: '8px' }}>Card with content</h5>
        <p style={{ fontSize: '0.875rem' }}>A basic card using surface background and a subtle border. Adapts automatically when you switch themes.</p>
      </Card>
    </div>
  );
}

export function AccentBadge() {
  return (
    <div style={{ padding: '24px', maxWidth: '360px' }}>
      <Card>
        <Badge variant="accent" style={{ marginBottom: '12px' }}>New</Badge>
        <h5 style={{ marginBottom: '8px' }}>Design tokens</h5>
        <p style={{ fontSize: '0.875rem' }}>Cards inherit CSS custom properties so they adapt automatically to any token override.</p>
      </Card>
    </div>
  );
}

export function Unpadded() {
  return (
    <div style={{ padding: '24px', maxWidth: '360px' }}>
      <Card padded={false}>
        <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--color-border)' }}>
          <Badge variant="default">Header</Badge>
        </div>
        <div style={{ padding: '16px 20px' }}>
          <p style={{ fontSize: '0.875rem' }}>Unpadded card with manual inner layout.</p>
        </div>
      </Card>
    </div>
  );
}
