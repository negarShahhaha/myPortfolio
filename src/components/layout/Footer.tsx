'use client'

import { useTranslations } from 'next-intl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

import { Container } from '@/components/ui/Container'

const SOCIALS: { href: string; label: string; icon: IconDefinition }[] = [
  { href: 'https://github.com/negarShahhaha', label: 'GitHub', icon: faGithub },
  { href: 'https://www.linkedin.com/in/negar-shahhosini-803541417', label: 'LinkedIn', icon: faLinkedinIn },
  { href: 'mailto:you@example.com', label: 'Email', icon: faEnvelope },
]

export function Footer() {
  const t = useTranslations('footer')
  const tc = useTranslations('common') // برای اسم
  const year = new Date().getFullYear()

  return (
    <footer className="mt-24 border-t border-slate-200 bg-slate-50/60 dark:border-slate-800 dark:bg-slate-900/40">
      <Container>
        <div className="relative z-10 flex flex-col items-center gap-6 py-10 sm:flex-row sm:justify-between">
          {/* چون RTL/LTR داریم، از text-start استفاده می‌کنیم که خودکار درست بشینه */}
          <div className="text-center sm:text-start">
            <p className="text-lg font-bold text-slate-900 dark:text-white">{tc('fullName')}</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{t('role')}</p>
          </div>

          <div className="relative z-10 flex items-center gap-2">
            {SOCIALS.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 transition-colors
                           hover:bg-slate-100 hover:text-emerald-600
                           dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-emerald-400"
              >
                <FontAwesomeIcon icon={icon} className="text-[20px]" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-slate-200 py-6 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
          {t('builtWith')} — © {year} {tc('fullName')}. {t('rights')}
        </div>
      </Container>
    </footer>
  )
}