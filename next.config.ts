import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

// پلاگین next-intl رو به فایل request.ts وصل می‌کنیم
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

const nextConfig: NextConfig = {
  allowedDevOrigins: ['10.77.201.72'],
}

// کانفیگ رو با پلاگین wrap می‌کنیم
export default withNextIntl(nextConfig)