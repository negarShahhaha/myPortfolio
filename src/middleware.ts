
import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

// middleware که آدرس‌ها رو بر اساس زبان مدیریت می‌کنه
export default createMiddleware(routing)

export const config = {
  // روی همه‌ی مسیرها اجرا شو، جز فایل‌های استاتیک و API
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}