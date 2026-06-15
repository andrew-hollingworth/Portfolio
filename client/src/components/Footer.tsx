import { Icon } from '@iconify/react'
import { RESUME_URL } from '../config'

const links = [
  {
    href: 'https://github.com/andrew-hollingworth',
    icon: 'mdi:github',
    label: 'GitHub',
  },
  {
    href: RESUME_URL,
    icon: 'mdi:file-account',
    label: 'Resume',
  },
  {
    href: 'https://www.linkedin.com/in/andrew-hollingworth/',
    icon: 'mdi:linkedin',
    label: 'LinkedIn',
  },
  {
    href: 'https://soundcloud.com/user-864435869/sets/have-yourself-a-chili-dog-for-christmas',
    icon: 'simple-icons:soundcloud',
    label: 'SoundCloud',
  },
]

export default function Footer() {
  return (
    <footer className="bg-surface text-text-primary py-6 mt-8">
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-3 sm:gap-4">
          {links.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="hover:text-secondary transition-colors"
            >
              <Icon icon={icon} width={28} className="sm:w-8" />
            </a>
          ))}
        </div>
        <p className="text-xs text-text-secondary font-body">
          © Andrew Hollingworth {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
