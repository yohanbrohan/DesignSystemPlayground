import { clsx } from 'clsx'

type BadgeVariant = 'default' | 'accent' | 'muted'

interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  className?: string
  style?: React.CSSProperties
}

export function Badge({ children, variant = 'default', className, style }: BadgeProps) {
  return (
    <span className={clsx('badge', `badge--${variant}`, className)} style={style}>
      {children}
    </span>
  )
}
