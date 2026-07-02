
import { defineRouting } from 'next-intl/routing'

// تنظیمات مسیریابی زبان‌ها
export const routing = defineRouting({
  // زبان‌هایی که پشتیبانی می‌کنیم
  locales: ['fa', 'en'],

  // زبان پیش‌فرض (وقتی کاربر مستقیم به / میاد)
  defaultLocale: 'fa',
})