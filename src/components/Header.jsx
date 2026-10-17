import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LOGO_URL } from '../constants/brand'

const NAV_ITEMS = [
  { label: 'Our Mission', to: '/#mission', hash: 'mission' },
  { label: 'Upcoming Clinics', to: '/#clinics', hash: 'clinics' },
  //{ label: 'Latest News', to: '/news', route: 'news' },
  { label: 'Latest News', to: '/', route: 'news' },
  { label: 'Volunteer', to: '/#volunteer', hash: 'volunteer' },
  { label: 'Contact', to: '/#contact', hash: 'contact' },
]

function navClassName(isActive) {
  const base =
    'font-label-md text-label-md transition-colors'
  if (isActive) {
    return `${base} text-pulse-navy font-bold border-b-2 border-secondary pb-1`
  }
  return `${base} text-on-background hover:text-primary`
}

export default function Header({ showLogo = true, variant = 'full' }) {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const isNewsSection =
    location.pathname.startsWith('/news') || location.pathname === '/news'

  const closeMobileMenu = () => setMobileOpen(false)

  useEffect(() => {
    const header = document.querySelector('[data-site-header]')
    if (!header) return undefined

    const onScroll = () => {
      if (window.scrollY > 20) {
        header.classList.add('shadow-sm')
      } else {
        header.classList.remove('shadow-sm')
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (item) => {
    if (item.route === 'news') return isNewsSection
    if (location.pathname !== '/') return false
    if (item.hash && location.hash === `#${item.hash}`) return true
    return item.hash === 'mission' && !location.hash
  }

  return (
    <header
      className="bg-background/80 backdrop-blur-md full-width top-0 sticky z-50"
      data-site-header
    >
      <nav className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-6">
        <Link to="/" className="flex items-center gap-3" onClick={closeMobileMenu}>
          {showLogo && (
            <img
              alt="Project Pulse Logo"
              className="h-10 w-10 object-contain"
              src={LOGO_URL}
            />
          )}
          <span className="font-headline-md text-headline-md font-bold text-on-background">
            Project Pulse
          </span>
        </Link>

        <ul className="hidden md:flex gap-8 items-center">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <Link to={item.to} className={navClassName(isActive(item))}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden p-2 text-on-background"
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </nav>

      {variant === 'full' && mobileOpen && (
        <div className="md:hidden bg-background border-t border-surface-container-high p-6 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={navClassName(isActive(item))}
              onClick={closeMobileMenu}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
