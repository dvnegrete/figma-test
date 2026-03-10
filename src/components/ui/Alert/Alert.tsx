import { createPortal } from 'react-dom'
import './Alert.css'
import type { AlertType } from '../../../types'

/* ─── Icon variants ─────────────────────────────────────────── */
const IconCheckCircle = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="#039855" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
    <polyline points="22,4 12,14.01 9,11.01" />
  </svg>
)

const IconAlertCircle = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="#d92d20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
)

const IconInfoCircle = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="8.01" />
    <line x1="12" y1="12" x2="12" y2="16" />
  </svg>
)

const IconX = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

/* ─── Props ─────────────────────────────────────────────────── */
export interface AlertProps {
  type: AlertType
  title: string
  message: string
  onClose: () => void
}

/* ─── Component ─────────────────────────────────────────────── */
function AlertDialog({ type, title, message, onClose }: AlertProps) {
  return (
    <div
      className="alert-overlay"
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="alert" role="alertdialog" aria-modal="true" aria-labelledby="alert-title">

        {/* Close */}
        <button className="alert__close" onClick={onClose} aria-label="Close">
          <IconX />
        </button>

        {/* Icon */}
        <div className={`alert__icon-wrap alert__icon-wrap--${type}`}>
          {type === 'success' && <IconCheckCircle />}
          {type === 'error'   && <IconAlertCircle />}
          {type === 'dev'     && <IconInfoCircle />}
        </div>

        {/* Text */}
        <div className="alert__text">
          <p id="alert-title" className="alert__title">{title}</p>
          <p className="alert__message">{message}</p>
        </div>

      </div>
    </div>
  )
}

/* Renders into document.body via portal to escape stacking contexts */
export default function Alert(props: AlertProps) {
  return createPortal(<AlertDialog {...props} />, document.body)
}
