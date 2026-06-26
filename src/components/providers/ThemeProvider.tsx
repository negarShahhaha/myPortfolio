
'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

// به‌جای import کردن تایپ از مسیر داخلی next-themes (که بین نسخه‌ها فرق می‌کنه)،
// تایپ props رو مستقیم از خود کامپوننت می‌گیریم؛ این‌طوری به‌روزرسانی نسخه نمی‌شکنه.
type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>

/**
 * تأمین‌کننده‌ی تم سراسری | Global theme provider
 * این رو توی layout دور کل اپ می‌پیچیم.
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"            // کلاس `dark` رو روی <html> ست می‌کنه (هماهنگ با Tailwind)
      defaultTheme="system"        // پیش‌فرض = تنظیمات سیستم کاربر
      enableSystem                 // اجازه‌ی پیروی خودکار از تم سیستم
      disableTransitionOnChange    // جلوگیری از پرشِ ناگهانی انیمیشن‌ها موقع سوییچ تم
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}