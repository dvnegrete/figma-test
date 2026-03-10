import { useState } from 'react'
import './Navbar.css'
import { IconSearch, IconChevronRight, Alert } from '../ui'
import type { AlertConfig } from '../ui'
import { ALERTS } from '../../data/alerts'

/* ─── Navbar-specific icon ───────────────────────────────────── */
const IconBell = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="#616161" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 01-3.46 0" />
  </svg>
)

export default function Navbar() {
  const [alert, setAlert] = useState<AlertConfig | null>(null)

  return (
    <>
      <header className="navbar">
        <div className="navbar__inner">

          {/* Breadcrumb */}
          <nav className="navbar__breadcrumb">
            <span className="navbar__crumb-inactive">Application</span>
            <span className="navbar__crumb-sep">
              <IconChevronRight size={12} strokeWidth={1.5} />
            </span>
            <span className="navbar__crumb-active">My Offers</span>
          </nav>

          {/* Right actions */}
          <div className="navbar__actions">
            <button
              className="navbar__icon-btn"
              aria-label="Search"
              onClick={() => setAlert(ALERTS.dev)}
            >
              <IconSearch size={20} color="#677385" />
            </button>

            <div className="navbar__bell-wrap">
              <button
                className="navbar__icon-btn"
                aria-label="Notifications"
                onClick={() => setAlert(ALERTS.dev)}
              >
                <IconBell />
              </button>
              <span className="navbar__bell-dot" />
            </div>

            <div className="navbar__user">
              <div className="navbar__avatar">
                <img
                  src={`${import.meta.env.BASE_URL}images/avatar.jpg`}
                  alt="Dean M"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                />
              </div>
              <span className="navbar__username">Damián V.N.</span>
            </div>
          </div>

        </div>
      </header>

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
