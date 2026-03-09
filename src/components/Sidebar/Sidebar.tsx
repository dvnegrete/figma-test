import { useState } from 'react'
import './Sidebar.css'
import {
  NavItem,
  IconChevronDown, IconChevronUp,
  IconHome, IconUser, IconStar, IconTag, IconChartBar, IconSettings,
} from '../ui'

/* ─── Accindi logo mark — brand-specific, stays here ────────── */
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
  /* Collapsed by default (chevron ↓ in Figma) */
  const [dashboardOpen, setDashboardOpen] = useState(false)
  /* Expanded by default (chevron ↑ in Figma) */
  const [rewardsOpen, setRewardsOpen] = useState(true)

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

            {/* ── Group 1: Dashboard (collapsible) ── */}
            <div className="sidebar__group">
              <NavItem
                icon={<IconHome />}
                label="Dashboard"
                trailing={dashboardOpen
                  ? <IconChevronUp size={16} />
                  : <IconChevronDown size={16} />}
                onClick={() => setDashboardOpen(v => !v)}
              />

              {/* Collapsible sub-items */}
              <div className={`sidebar__collapse ${dashboardOpen ? 'sidebar__collapse--open' : ''}`}>
                <div className="sidebar__collapse__inner">
                  <NavItem icon={<IconUser />} label="Profile" />
                </div>
              </div>
            </div>

            <div className="sidebar__divider" />

            {/* ── Group 2: Rewards Management (collapsible) ── */}
            <div className="sidebar__rewards-section">
              <div className="sidebar__rewards-header">
                <NavItem
                  icon={<IconStar />}
                  label="Rewards Management"
                  trailing={rewardsOpen
                    ? <IconChevronUp size={16} />
                    : <IconChevronDown size={16} />}
                  onClick={() => setRewardsOpen(v => !v)}
                />
              </div>

              {/* Collapsible sub-items */}
              <div className={`sidebar__collapse sidebar__collapse--rewards ${rewardsOpen ? 'sidebar__collapse--open' : ''}`}>
                <div className="sidebar__collapse__inner sidebar__rewards-items">
                  <div className="sidebar__active-wrapper">
                    <NavItem icon={<IconTag />} label="Offers" />
                  </div>
                  <NavItem
                    icon={<IconChartBar />}
                    label="Transactions"
                    className="sidebar__item--sub"
                  />
                </div>
              </div>
            </div>

            <div className="sidebar__divider" />

            {/* ── Group 3: Settings ── */}
            <div className="sidebar__group">
              <NavItem icon={<IconSettings />} label="Settings" />
            </div>

          </div>
        </div>

        <div className="sidebar__footer" />
      </div>
    </aside>
  )
}
