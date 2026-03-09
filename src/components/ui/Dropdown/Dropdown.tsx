import './Dropdown.css'
import { IconChevronDown } from '../icons'

interface DropdownProps {
  label: string
  onOpen?: () => void
  className?: string
}

export default function Dropdown({ label, onOpen, className = '' }: DropdownProps) {
  return (
    <div className={`dropdown ${className}`}>
      <span className="dropdown__label">{label}</span>
      <button className="dropdown__btn" aria-label={`Open ${label}`} onClick={onOpen}>
        <IconChevronDown size={12} />
      </button>
    </div>
  )
}
