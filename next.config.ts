// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // اجازه‌ی دسترسی به منابع dev از این هاست (چون از روی IP شبکه بازش می‌کنی)
  allowedDevOrigins: ['10.77.201.72'],
}

export default nextConfig