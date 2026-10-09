import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

const navigation = [
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Expenses', to: '/expenses' },
  { label: 'Add Expense', to: '/expenses/add' },
  { label: 'Analytics', to: '/analytics' },
  { label: 'Categories', to: '/categories' },
  { label: 'Settings', to: '/settings' },
]

export function AppShell() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!menuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  return (
    <div className="app-shell">
      <header className="top-bar">
        <button
          type="button"
          className={`menu-button${menuOpen ? ' menu-button--open' : ''}`}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className="app-mark" aria-label="Personal Expenses">
          Personal Expenses
        </div>
      </header>

      <div className={`navigation-layer${menuOpen ? ' navigation-layer--open' : ''}`}>
        <button
          type="button"
          className="navigation-backdrop"
          aria-label="Close navigation menu"
          tabIndex={menuOpen ? 0 : -1}
          onClick={() => setMenuOpen(false)}
        />

        <aside
          id="primary-navigation"
          className={`sidebar${menuOpen ? ' sidebar--open' : ''}`}
          aria-label="Primary navigation"
        >
          <nav>
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to !== '/expenses'}
                className={({ isActive }) =>
                  `nav-link${isActive ? ' nav-link--active' : ''}`
                }
                onClick={() => setMenuOpen(false)}
              >
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </aside>
      </div>

      <main className="page-content">
        <div className="content-area">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
