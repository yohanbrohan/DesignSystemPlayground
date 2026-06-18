import { Badge } from 'design-system-playground';

export function Variants() {
  return (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '24px' }}>
      <Badge variant="default">General</Badge>
      <Badge variant="accent">New</Badge>
      <Badge variant="muted">Draft</Badge>
    </div>
  );
}

export function InContext() {
  return (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', padding: '24px' }}>
      <Badge variant="accent">Design System</Badge>
      <Badge variant="muted">Article</Badge>
      <Badge variant="default">v1.0</Badge>
    </div>
  );
}
