
'use client'

import * as React from 'react'
import { motion } from 'framer-motion'

type RevealProps = {
  children: React.ReactNode
  delay?: number // تأخیر شروع (برای ظاهر شدن پلکانیِ چند آیتم)
  className?: string
}

/**
 * Reveal — محتوای داخلش رو موقع رسیدن به viewport نرم ظاهر می‌کنه.
 * یه‌بار اجرا می‌شه (once) تا موقع اسکرول بالا/پایین مدام تکرار نشه.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      // حالت اولیه: کمی پایین‌تر و محو
      initial={{ opacity: 0, y: 24 }}
      // حالت نهایی وقتی وارد دید شد: سرجاش و واضح
      whileInView={{ opacity: 1, y: 0 }}
      // once: فقط بار اول. margin: کمی زودتر از رسیدن کامل، تریگر شه.
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}