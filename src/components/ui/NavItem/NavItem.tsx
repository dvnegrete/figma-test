import { useState } from 'react'
import type { ReactNode } from 'react'
import './NavItem.css'
import Alert from '../Alert/Alert'
import type { AlertConfig } from '../../../types'
import { ALERTS } from '../../../data/alerts'

interface NavItemProps {
  icon: ReactNode
  label: string
  /** Right-side slot: chevron, badge, etc. */
  trailing?: ReactNode
  /** If omitted, clicking shows the dev alert */
  onClick?: () => void
  className?: string
}

export default function NavItem({ icon, label, trailing, onClick, className = '' }: NavItemProps) {
  const [alert, setAlert] = useState<AlertConfig | null>(null)

  const handleClick = onClick ?? (() => setAlert(ALERTS.dev))

  return (
    <>
      <button className={`nav-item ${className}`} onClick={handleClick}>
        <span className="nav-item__left">
          {icon}
          <span>{label}</span>
        </span>
        {trailing && <span className="nav-item__trailing">{trailing}</span>}
      </button>

      {alert && (
        <Alert
          type={alert.type}
          title={alert.title}
          message={alert.message}
          onClose={() => setAlert(null)}
        />
      )}
    </>
  )
}
