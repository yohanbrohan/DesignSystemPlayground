import { clsx } from 'clsx'

interface CardProps {
  children: React.ReactNode
  className?: string
  padded?: boolean
}

export function Card({ children, className, padded = true }: CardProps) {
  return (
    <div className={clsx('card', padded && 'card--padded', className)}>
      {children}
    </div>
  )
}
