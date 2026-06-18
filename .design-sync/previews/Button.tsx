import { Button } from 'design-system-playground';

export function Variants() {
  return (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '24px' }}>
      <Button variant="primary" size="md">Publish</Button>
      <Button variant="secondary" size="md">Cancel</Button>
      <Button variant="ghost" size="md">Learn more</Button>
    </div>
  );
}

export function Sizes() {
  return (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '24px' }}>
      <Button variant="primary" size="lg">Get started</Button>
      <Button variant="primary" size="md">Get started</Button>
      <Button variant="primary" size="sm">Get started</Button>
    </div>
  );
}

export function Disabled() {
  return (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '24px' }}>
      <Button variant="primary" disabled>Publish</Button>
      <Button variant="secondary" disabled>Cancel</Button>
    </div>
  );
}
