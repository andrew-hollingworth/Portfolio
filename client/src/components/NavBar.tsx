import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { SHOW_WORK_NAV } from '../config'

interface NavBarProps {
  onToggleTheme: () => void
  isDark: boolean
}

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-1 rounded transition-colors font-body text-sm font-medium ${
    isActive
      ? 'text-primary font-semibold'
      : 'text-text-secondary hover:text-text-primary'
  }`

export default function NavBar({ onToggleTheme, isDark }: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className="sticky top-0 z-50 bg-primary text-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <NavLink
            to="/about"
            className="font-heading font-semibold text-lg text-white hover:opacity-80 transition-opacity"
          >
            Andrew Hollingworth
          </NavLink>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-2">
            {SHOW_WORK_NAV && (
              <NavLink to="/work" className={({ isActive }) =>
                `px-3 py-1 rounded transition-colors font-body text-sm font-medium ${
                  isActive ? 'text-white font-semibold underline underline-offset-4' : 'text-white/80 hover:text-white'
                }`
              }>
                My Work
              </NavLink>
            )}
            <NavLink to="/about" className={({ isActive }) =>
              `px-3 py-1 rounded transition-colors font-body text-sm font-medium ${
                isActive ? 'text-white font-semibold underline underline-offset-4' : 'text-white/80 hover:text-white'
              }`
            }>
              About Me
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) =>
              `px-3 py-1 rounded transition-colors font-body text-sm font-medium ${
                isActive ? 'text-white font-semibold underline underline-offset-4' : 'text-white/80 hover:text-white'
              }`
            }>
              Get in Touch
            </NavLink>
            <button
              onClick={onToggleTheme}
              aria-label="Toggle dark mode"
              className="ml-2 p-1.5 rounded hover:bg-white/20 transition-colors"
            >
              <Icon icon={isDark ? 'ph:sun' : 'ph:moon'} width={20} />
            </button>
          </nav>

          {/* Mobile: theme toggle + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onToggleTheme}
              aria-label="Toggle dark mode"
              className="p-1.5 rounded hover:bg-white/20 transition-colors"
            >
              <Icon icon={isDark ? 'ph:sun' : 'ph:moon'} width={20} />
            </button>
            <button
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
              className="p-1.5 rounded hover:bg-white/20 transition-colors"
            >
              <Icon icon={menuOpen ? 'ph:x' : 'ph:list'} width={22} />
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <nav className="md:hidden flex flex-col px-4 pb-3 gap-1 bg-primary">
            {SHOW_WORK_NAV && (
              <NavLink
                to="/work"
                onClick={() => setMenuOpen(false)}
                className={navLinkClass}
              >
                My Work
              </NavLink>
            )}
            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className={navLinkClass}
            >
              About Me
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className={navLinkClass}
            >
              Get in Touch
            </NavLink>
          </nav>
        )}
      </header>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fixed bottom-20 right-4 z-50 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary-dark transition-colors"
        >
          <Icon icon="ph:arrow-up" width={20} />
        </button>
      )}
    </>
  )
}
