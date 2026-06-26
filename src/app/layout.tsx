import type { Metadata, Viewport } from 'next'
import './globals.css'

import { shabnam } from '@/lib/fonts'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import '@/lib/fontawesome' 
/**
 * متادیتای سراسری سایت | Site-wide metadata
 * Next.js از اینجا برای SEO، عنوان تب مرورگر و کارت‌های
 * اشتراک‌گذاری (Open Graph) استفاده می‌کنه.
 */
export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'), // TODO: دامنه‌ی واقعی خودت
  title: {
    default: 'نگار شاه حسینی | فرانت‌اند دولوپر و علاقه‌مند به کسب‌وکار',
    template: '%s | نگار شاه حسینی', // مثلا صفحه‌ها می‌شن: «درباره من | نگار شاه حسینی»
  },
  description:
    'پورتفولیوی شخصی نگار شاه حسینی؛ دانش‌آموخته‌ی مدیریت بازرگانی و توسعه‌دهنده‌ی فرانت‌اند با تمرکز روی ای‌کامرس و محصولات دیجیتال.',
  keywords: ['فرانت‌اند', 'Next.js', 'React', 'مدیریت بازرگانی', 'ای‌کامرس', 'پورتفولیو'],
  authors: [{ name: 'نگار شاه حسینی' }],
  creator: 'نگار شاه حسینی',
  openGraph: {
    type: 'website',
    locale: 'fa_IR',
    title: ' | فرانت‌اند دولوپر',
    description: 'ترکیبی از نگاه کسب‌وکاری و مهارت فنیِ فرانت‌اند.',
    siteName: 'پورتفولیو نگار شاه حسینی',
  },
  robots: { index: true, follow: true },
}

/**
 * تنظیمات viewport و themeColor
 * Next.js 15 توصیه می‌کنه themeColor توی export جدای viewport باشه،
 * نه داخل metadata. این رنگ نوار آدرس موبایل رو با تم هماهنگ می‌کنه.
 */
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#020617' }, // slate-950
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // lang="fa" + dir="rtl"  → کل سایت فارسی و راست‌چین
    // suppressHydrationWarning لازمه چون next-themes کلاسِ `dark` رو
    // قبل از hydration روی <html> ست می‌کنه؛ بدون این، React warning می‌ده.
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body
        className={`
          ${shabnam.variable} font-sans antialiased
          bg-white text-slate-800
          dark:bg-slate-950 dark:text-slate-200
          selection:bg-emerald-500/20
        `}
      >
        {/* «پرش به محتوا» برای دسترس‌پذیری و کاربرانِ کیبورد (a11y)
            تا وقتی فوکوس نشده مخفیه، با Tab ظاهر می‌شه. */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:right-4 focus:top-4 focus:z-50
                     focus:rounded-lg focus:bg-emerald-600 focus:px-4 focus:py-2 focus:text-white"
        >
          پرش به محتوای اصلی
        </a>

        {/* ThemeProvider یک کلاینت‌کامپوننته که next-themes رو wrap می‌کنه */}
        <ThemeProvider>
          {/* چیدمان ستونی تا فوتر همیشه ته صفحه بچسبه (sticky footer) */}
          <div className="flex min-h-dvh flex-col">
            <Navbar />

            <main id="main" className="flex-1">
              {children}
            </main>

            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}