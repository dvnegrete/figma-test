import './Sidebar.css'
import { IconChevronDown, IconChevronUp } from '../ui'

/* ─── Sidebar-specific icons (nav identity) ─────────────────── */
const IconHome = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9,22 9,12 15,12 15,22" />
  </svg>
)

const IconUser = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

const IconStar = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
  </svg>
)

const IconTag = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
)

const IconChartBar = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
)

const IconSettings = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
  </svg>
)

/* ─── Accindi logo mark (brand-specific, not a generic icon) ── */
const LogoIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect width="28" height="28" rx="8" fill="white" fillOpacity="0.15" />
    <path
      d="M14 5.5L21.5 8.8V14C21.5 18.1 18.3 21.2 14 22.5C9.7 21.2 6.5 18.1 6.5 14V8.8L14 5.5Z"
      fill="white"
    />
  </svg>
)

/* ─── Component ─────────────────────────────────────────────── */
export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__content">

        <div className="sidebar__nav">
          {/* Logo */}
          <div className="sidebar__header">
            <div className="sidebar__logo">
              <LogoIcon />
              <span className="sidebar__logo-text">Accindi</span>
            </div>
          </div>

          <div className="sidebar__items">
            {/* Group 1 — Dashboard + Profile */}
            <div className="sidebar__group">
              <button className="sidebar__item">
                <span className="sidebar__item-left">
                  <IconHome />
                  <span>Dashboard</span>
                </span>
                <span className="sidebar__chevron"><IconChevronDown size={16} /></span>
              </button>
              <button className="sidebar__item">
                <span className="sidebar__item-left">
                  <IconUser />
                  <span>Profile</span>
                </span>
              </button>
            </div>

            <div className="sidebar__divider" />

            {/* Group 2 — Rewards Management (expanded) */}
            <div className="sidebar__rewards-section">
              <div className="sidebar__rewards-header">
                <button className="sidebar__item">
                  <span className="sidebar__item-left">
                    <IconStar />
                    <span>Rewards Management</span>
                  </span>
                  <span className="sidebar__chevron"><IconChevronUp size={16} /></span>
                </button>
              </div>

              {/* Active: Offers */}
              <div className="sidebar__active-wrapper">
                <button className="sidebar__item">
                  <span className="sidebar__item-left">
                    <IconTag />
                    <span>Offers</span>
                  </span>
                </button>
              </div>

              {/* Transactions */}
              <button className="sidebar__item sidebar__item--sub">
                <span className="sidebar__item-left">
                  <IconChartBar />
                  <span>Transactions</span>
                </span>
              </button>
            </div>

            <div className="sidebar__divider" />

            {/* Group 3 — Settings */}
            <div className="sidebar__group">
              <button className="sidebar__item">
                <span className="sidebar__item-left">
                  <IconSettings />
                  <span>Settings</span>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="sidebar__footer" />
      </div>
    </aside>
  )
}
