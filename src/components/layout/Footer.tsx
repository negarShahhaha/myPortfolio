import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

import { Container } from '@/components/ui/Container'



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

              <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="https://github.com/negarShahhaha"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="گیت‌هاب"
              className="text-slate-400 transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
            >
              <FontAwesomeIcon icon={faGithub} className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/negar-shahhosini-803541417"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="لینکدین"
              className="text-slate-400 transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl" />
            </a>

                <a
              href="mailto:negarshahitsme@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ایمیل"
              className="text-slate-400 transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
            >
              <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
            </a>
          </div>
        </div>

        <div className="border-t border-slate-200 py-6 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
          ساخته‌شده با Next.js و علاقه — © {year} نگار شاه حسینی. تمام حقوق محفوظ است.
        </div>
      </Container>
    </footer>
  )
}