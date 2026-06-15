import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { SHOW_WORK_NAV } from '../config'

interface NavBarProps {
  onToggleTheme: () => void
  isDark: boolean
}

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-1 rounded transition-colors font-heading text-sm font-medium ${
    isActive ? 'text-secondary font-semibold underline underline-offset-4' : 'text-white/80 hover:text-secondary'
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
            className="font-heading font-medium text-lg text-white hover:text-secondary transition-colors"
          >
            Andrew Hollingworth
          </NavLink>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-2">
            {SHOW_WORK_NAV && (
              <NavLink to="/work" className={navLinkClass}>My Work</NavLink>
            )}
            <NavLink to="/about" className={navLinkClass}>About Me</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Get in Touch</NavLink>
          </nav>

          {/* Mobile: hamburger */}
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
            className="flex md:hidden p-1.5 rounded hover:text-secondary transition-colors"
          >
            <Icon icon={menuOpen ? 'ph:x' : 'ph:list'} width={22} />
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <nav className="md:hidden flex flex-col items-end px-4 pb-3 gap-1 bg-primary">
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

      {/* Dark mode toggle FAB */}
      <button
        onClick={onToggleTheme}
        aria-label="Toggle dark mode"
        className="fixed bottom-8 right-4 z-50 bg-btn-bg text-btn-text p-3 rounded-full shadow-lg hover:text-secondary dark:hover:text-btn-text dark:hover:bg-secondary transition-colors"
      >
        <Icon icon={isDark ? 'ph:sun' : 'ph:moon'} width={20} />
      </button>

      {/* Scroll to top FAB */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fixed bottom-32 right-4 z-50 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary-dark transition-colors"
        >
          <Icon icon="ph:arrow-up" width={20} />
        </button>
      )}
    </>
  )
}
