import { useState, useRef, useEffect } from 'react'
import './Dropdown.css'
import { IconChevronDown, IconChevronUp } from '../icons'

const IconCheck = () => (
  <svg width="11" height="8" viewBox="0 0 11 8" fill="none"
    stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="1,4 4,7 10,1" />
  </svg>
)

interface DropdownProps {
  label: string
  title: string
  options: string[]
  selected: string[]
  onChange: (selected: string[]) => void
  className?: string
}

export default function Dropdown({
  label,
  title,
  options,
  selected,
  onChange,
  className = '',
}: DropdownProps) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [])

  const isAllSelected = selected.length === 0

  const triggerLabel =
    isAllSelected         ? label
    : selected.length === 1 ? selected[0]
    : `${selected.length} selected`

  const handleAll = () => onChange([])

  const handleOption = (opt: string) => {
    if (selected.includes(opt)) {
      onChange(selected.filter((s) => s !== opt))
    } else {
      onChange([...selected, opt])
    }
  }

  return (
    <div ref={containerRef} className={`dropdown ${className}`}>

      {/* ── Single trigger button — entire area is clickable ── */}
      <button
        className="dropdown__trigger"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={`Open ${title}`}
      >
        <span className="dropdown__label">{triggerLabel}</span>
        <span className="dropdown__chevron">
          {open ? <IconChevronUp size={12} /> : <IconChevronDown size={12} />}
        </span>
      </button>

      {/* ── Floating panel ── */}
      {open && (
        <div className="dropdown__panel" role="listbox" aria-multiselectable="true">
          <div className="dropdown__panel-header">
            <span className="dropdown__panel-title">{title}</span>
          </div>

          <div className="dropdown__options">
            <button
              className="dropdown__item"
              role="option"
              aria-selected={isAllSelected}
              onClick={handleAll}
            >
              <span className={`dropdown__checkbox ${isAllSelected ? 'dropdown__checkbox--checked' : ''}`}>
                {isAllSelected && <IconCheck />}
              </span>
              <span className="dropdown__item-label">All</span>
            </button>

            {options.map((opt) => {
              const checked = selected.includes(opt)
              return (
                <button
                  key={opt}
                  className="dropdown__item"
                  role="option"
                  aria-selected={checked}
                  onClick={() => handleOption(opt)}
                >
                  <span className={`dropdown__checkbox ${checked ? 'dropdown__checkbox--checked' : ''}`}>
                    {checked && <IconCheck />}
                  </span>
                  <span className="dropdown__item-label">{opt}</span>
                </button>
              )
            })}
          </div>
        </div>
      )}

    </div>
  )
}
