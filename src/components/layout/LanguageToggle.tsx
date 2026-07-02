
'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'

/**
 * دکمه‌ی تعویض زبان (فارسی ↔ انگلیسی)
 * کاربر رو به همون صفحه‌ی فعلی، با زبان دیگه می‌بره.
 */
export function LanguageToggle() {
  const locale = useLocale()          // زبان فعلی: fa یا en
  const pathname = usePathname()      // مسیر فعلی (بدون بخش زبان)
  const router = useRouter()

  // زبان مقصد = برعکس زبان فعلی
  const nextLocale = locale === 'fa' ? 'en' : 'fa'

  function switchLanguage() {
    // برو به همین مسیر، ولی با زبان دیگه
    router.replace(pathname, { locale: nextLocale })
  }

  return (
    <button
      type="button"
      onClick={switchLanguage}
      aria-label="تغییر زبان"
      className="inline-flex h-9 items-center justify-center rounded-lg border border-slate-200 px-3
                 text-sm font-bold text-slate-600 transition-colors
                 hover:bg-slate-100 hover:text-emerald-600
                 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-emerald-400"
    >
      {/* متنِ دکمه = زبانی که بهش سوئیچ می‌کنی */}
      {locale === 'fa' ? 'EN' : 'FA'}
    </button>
  )
}