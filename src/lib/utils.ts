
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * ترکیب امن کلاس‌های Tailwind
 * clsx کلاس‌های شرطی رو می‌چینه، twMerge تضادها رو حذف می‌کنه.
 * مثال: cn('px-2', condition && 'px-4') => 'px-4'
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}