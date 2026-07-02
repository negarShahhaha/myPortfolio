
import { createNavigation } from 'next-intl/navigation'
import { routing } from './routing'

// این‌ها نسخه‌های «زبان‌آگاه» از Link و router هستن.
// خودشون می‌دونن الان کدوم زبانی و آدرس رو درست می‌سازن.
export const { Link, useRouter, usePathname } = createNavigation(routing)