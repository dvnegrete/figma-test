import type { ReactNode } from 'react'
import './NavItem.css'

interface NavItemProps {
  icon: ReactNode
  label: string
  /** Right-side slot: chevron, badge, etc. */
  trailing?: ReactNode
  onClick?: () => void
  className?: string
}

export default function NavItem({ icon, label, trailing, onClick, className = '' }: NavItemProps) {
  return (
    <button className={`nav-item ${className}`} onClick={onClick}>
      <span className="nav-item__left">
        {icon}
        <span>{label}</span>
      </span>
      {trailing && <span className="nav-item__trailing">{trailing}</span>}
    </button>
  )
}
