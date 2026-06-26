import { config } from '@fortawesome/fontawesome-svg-core'

/**
 * تنظیمات سراسری Font Awesome برای Next.js (App Router / Turbopack)
 *
 * به‌جای import کردن styles.css از node_modules (که Turbopack باهاش مشکل داره)،
 * autoAddCss رو روشن نگه می‌داریم تا خود Font Awesome استایلش رو تزریق کنه،
 * و جلوی پرشِ اولیه‌ی آیکون‌ها (FOUC) رو با یک <style> دستی توی layout می‌گیریم.
 */
config.autoAddCss = false