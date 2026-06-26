'use client'

import * as React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

import { Container } from '@/components/ui/Container'
import { ThemeToggle } from './ThemeToggle'
import { cn } from '@/lib/utils'

// لینک‌های ناوبری یک‌جا تعریف شدن تا اضافه/کم کردنشون راحت باشه.
const NAV_LINKS = [
  { href: '#about', label: 'درباره من' },
  { href: '#skills', label: 'مهارت‌ها' },
  { href: '#projects', label: 'پروژه‌ها' },
  { href: '#experience', label: 'تجربه و تحصیلات' },
  { href: '#contact', label: 'تماس' },
] as const

export function Navbar() {
  const [open, setOpen] = React.useState(false)        // وضعیت منوی موبایل
  const [scrolled, setScrolled] = React.useState(false) // آیا کاربر اسکرول کرده؟

  // وقتی کمی اسکرول شد، هدر سایه و پس‌زمینه‌ی بلور بگیره.
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll() // یک‌بار اولش هم چک کن
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full transition-all duration-300',
        scrolled
          ? 'border-b border-slate-200/70 bg-white/80 backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-950/80'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between gap-4">
          {/* لوگو / اسم */}
          <Link href="#" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-sm font-bold text-white">
             L
            </span>
            <span className="text-base font-bold tracking-tight text-slate-900 dark:text-white">
             نگار شاه حسینی
            </span>
          </Link>

          {/* لینک‌های دسکتاپ */}
          <ul className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors
                             hover:bg-slate-100 hover:text-emerald-600
                             dark:text-slate-300 dark:hover:bg-slate-800/60 dark:hover:text-emerald-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* تاگل تم + همبرگر (موبایل) */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              aria-label={open ? 'بستن منو' : 'باز کردن منو'}
              aria-expanded={open}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200
                         text-slate-600 transition-colors hover:bg-slate-100 md:hidden
                         dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              <FontAwesomeIcon icon={open ? faXmark : faBars} className="text-[20px]" />
            </button>
          </div>
        </nav>
      </Container>

      {/* پنل منوی موبایل */}
      {open && (
        <div className="border-b border-slate-200 bg-white/95 backdrop-blur-md md:hidden dark:border-slate-800 dark:bg-slate-950/95">
          <Container>
            <ul className="flex flex-col gap-1 py-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors
                               hover:bg-emerald-50 hover:text-emerald-700
                               dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-emerald-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      )}
    </header>
  )
}