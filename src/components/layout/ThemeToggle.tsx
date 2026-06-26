'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

/**
 * دکمه‌ی سوییچ بین حالت روشن و تاریک.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // بدنه‌ی بلوکی تا چیزی return نشه (وگرنه React اون رو cleanup فرض می‌کنه).
  // فقط بعد از mount روی کلاینت تم درست مشخصه؛ پس تا اون موقع چیزی رندر نمی‌کنیم.
  React.useEffect(() => {
    setMounted(true)
  }, [])

  // placeholder هم‌اندازه تا قبل از mount چیدمان نلرزه و hydration warning نگیریم.
  if (!mounted) {
    return <div className="h-9 w-9" aria-hidden />
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'روشن کردن حالت روز' : 'فعال‌کردن حالت شب'}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border
                 border-slate-200 text-slate-600 transition-colors
                 hover:bg-slate-100 hover:text-emerald-600
                 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-emerald-400"
    >
      <FontAwesomeIcon icon={isDark ? faSun : faMoon} className="text-[18px]" />
    </button>
  )
}