import type { Metadata, Viewport } from 'next'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'

import '@/lib/fontawesome'
import '../globals.css'

import { shabnam } from '@/lib/fonts'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://myportfolio-2xn.pages.dev'),
  title: {
    default: 'نگار شاه حسینی | فرانت‌اند دولوپر',
    template: '%s | نگار شاه حسینی',
  },
  description:
    'پورتفولیوی شخصی نگار شاه حسینی؛ دانش‌آموخته‌ی مدیریت بازرگانی و توسعه‌دهنده‌ی فرانت‌اند.',
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#020617' },
  ],
}

// این تابع باعث می‌شه Next هر دو زبان رو از قبل بسازه (fa و en)
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  // زبان فعلی رو از آدرس می‌گیریم
  const { locale } = await params

  // اگه زبان نامعتبر بود → 404
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  // جهت صفحه: فارسی راست‌چین، بقیه چپ‌چین
  const dir = locale === 'fa' ? 'rtl' : 'ltr'

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body
        className={`${shabnam.variable} font-sans antialiased bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-200 selection:bg-emerald-500/20`}
      >
        <NextIntlClientProvider>
          <ThemeProvider>
            <div className="flex min-h-dvh flex-col">
              <Navbar />
              <main id="main" className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}