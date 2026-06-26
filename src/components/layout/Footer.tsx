import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

import { Container } from '@/components/ui/Container'

// لینک‌های اجتماعی — مقادیر را با اکانت‌های واقعی خودت عوض کن.
const SOCIALS: { href: string; label: string; icon: IconDefinition }[] = [
  { href: 'https://github.com/your-username', label: 'گیت‌هاب', icon: faGithub },
  { href: 'https://linkedin.com/in/your-username', label: 'لینکدین', icon: faLinkedinIn },
  { href: 'mailto:you@example.com', label: 'ایمیل', icon: faEnvelope },
]

export function Footer() {
  // سال جاری به‌صورت خودکار؛ دیگه دستی عوضش نمی‌کنی.
  const year = new Date().getFullYear()

  return (
    <footer className="mt-24 border-t border-slate-200 bg-slate-50/60 dark:border-slate-800 dark:bg-slate-900/40">
      <Container>
        <div className="flex flex-col items-center gap-6 py-10 sm:flex-row sm:justify-between">
          <div className="text-center sm:text-right">
            <p className="text-lg font-bold text-slate-900 dark:text-white">نگار شاه حسینی</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              فرانت‌اند دولوپر · علاقه‌مند به کسب‌وکار و محصولات دیجیتال
            </p>
          </div>

          <div className="flex items-center gap-2">
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
          ساخته‌شده با Next.js و علاقه — © {year} نگار شاه حسینی. تمام حقوق محفوظ است.
        </div>
      </Container>
    </footer>
  )
}