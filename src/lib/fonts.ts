
import localFont from 'next/font/local'

/**
 * فونت شبنم به‌صورت محلی (self-hosted)
 * Local Shabnam font.
 *
 * next/font/local فونت رو موقع build بهینه می‌کنه و یک CSS variable
 * به اسم --font-shabnam می‌سازه. این متغیر رو توی tailwind.config
 * به‌عنوان `font-sans` معرفی می‌کنیم تا کل سایت پیش‌فرض شبنم بشه.
 *
 * فایل‌های .woff2 رو از مخزن رسمی شبنم دانلود کن و توی public/fonts بذار.
 */
export const shabnam = localFont({
  src: [
    { path: '../../public/fonts/Shabnam/Shabnam-Light.woff2', weight: '300', style: 'normal' },
    { path: '../../public/fonts/Shabnam/Shabnam.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/Shabnam/Shabnam-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../../public/fonts/Shabnam/Shabnam-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-shabnam',
  display: 'swap', // تا قبل از لود فونت، متن با fallback نشون داده بشه (بدون پرش چیدمان)
})