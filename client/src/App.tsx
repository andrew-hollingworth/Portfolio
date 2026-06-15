import { Routes, Route, Navigate } from 'react-router-dom'
import { useColorScheme } from './hooks/useColorScheme'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import About from './pages/About'
import Work from './pages/Work'
import Contact from './pages/Contact'

export default function App() {
  const { isDark, toggle } = useColorScheme()
  return (
    <div className="min-h-dvh flex flex-col bg-surface text-text-primary">
      <NavBar onToggleTheme={toggle} isDark={isDark} />
      <main className="flex-1">
        <Routes>
          <Route path="/"        element={<Navigate to="/about" replace />} />
          <Route path="/about"   element={<About />} />
          <Route path="/work"    element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*"        element={<Navigate to="/about" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
