'use client'



import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faCircleCheck, faSpinner } from '@fortawesome/free-solid-svg-icons'

import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'



// 👇 این رو با فرم‌آی‌دی واقعی خودت از Formspree عوض کن
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xpqgrjpd'

type FormState = { name: string; email: string; message: string }
type Errors = Partial<Record<keyof FormState, string>>
// وضعیت ارسال: بیکار، در حال ارسال، موفق، خطا
type Status = 'idle' | 'submitting' | 'success' | 'error'

const inputClass =
  'w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white'

export function Contact() {
  const [form, setForm] = React.useState<FormState>({ name: '', email: '', message: '' })
  const [errors, setErrors] = React.useState<Errors>({})
  const [status, setStatus] = React.useState<Status>('idle')

  // اعتبارسنجی ساده‌ی سمت کلاینت
  function validate(): boolean {
    const next: Errors = {}
    if (!form.name.trim()) next.name = 'لطفاً نامت رو وارد کن.'
    if (!form.email.trim()) next.email = 'ایمیل لازمه.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'فرمت ایمیل درست نیست.'
    if (!form.message.trim()) next.message = 'یه پیام کوتاه بنویس 🙂'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return

    setStatus('submitting') // دکمه قفل می‌شه و اسپینر نشون داده می‌شه

    try {
      // پیام رو به Formspree می‌فرستیم؛ اون برامون ایمیلش می‌کنه.
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' }) // فرم رو خالی کن
      } else {
        setStatus('error')
      }
    } catch {
      // مثلاً وقتی اینترنت قطعه
      setStatus('error')
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  return (
    <section id="contact" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="تماس"
          title="بیا با هم صحبت کنیم"
          description="برای همکاری، پروژه یا حتی یه سلام ساده، خوشحال می‌شم پیامت رو بشنوم."
        />

        <div className="mx-auto mt-12 max-w-xl">
          {status === 'success' ? (
            // پیام موفقیت بعد از ارسال
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center dark:border-emerald-500/30 dark:bg-emerald-500/10">
              <FontAwesomeIcon icon={faCircleCheck} className="text-3xl text-emerald-600 dark:text-emerald-400" />
              <p className="mt-3 font-bold text-slate-900 dark:text-white">پیامت با موفقیت ارسال شد!</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                ممنون که پیام دادی، در اولین فرصت جوابت رو می‌دم.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* نام */}
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  نام
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="نام شما"
                  disabled={status === 'submitting'}
                  className={inputClass}
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </div>

              {/* ایمیل */}
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  ایمیل
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  dir="ltr"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  disabled={status === 'submitting'}
                  className={`${inputClass} text-left`}
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>

              {/* پیام */}
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  پیام
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="چی توی ذهنته؟"
                  disabled={status === 'submitting'}
                  className={`${inputClass} resize-none`}
                />
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
              </div>

              {/* خطای کلی ارسال */}
              {status === 'error' && (
                <p className="text-sm text-red-500">
                  یه مشکلی پیش اومد. لطفاً دوباره امتحان کن یا مستقیم ایمیل بزن.
                </p>
              )}

              <Button type="submit" disabled={status === 'submitting'} className="w-full">
                {status === 'submitting' ? (
                  <>
                    {/* آیکون چرخان موقع ارسال */}
                    <FontAwesomeIcon icon={faSpinner} className="animate-spin text-[14px]" />
                    در حال ارسال…
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faPaperPlane} className="text-[14px]" />
                    ارسال پیام
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </Container>
    </section>
  )
}