
import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

// این تابع تصمیم می‌گیره برای هر درخواست، کدوم فایل ترجمه لود شه
export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale

  // اگه زبان نامعتبر بود، برگرد به پیش‌فرض
  if (!locale || !routing.locales.includes(locale as 'fa' | 'en')) {
    locale = routing.defaultLocale
  }

  return {
    locale,
    // فایل ترجمه‌ی مربوط به همون زبان رو لود کن (از پوشه‌ی messages)
    messages: (await import(`../../messages/${locale}.json`)).default,
  }
})