'use client'

import * as React from 'react'
import { useTranslations } from 'next-intl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faCircleCheck, faSpinner } from '@fortawesome/free-solid-svg-icons'

import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'

// 👇 این رو با فرم‌آی‌دی واقعی خودت از Formspree عوض کن
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xpzabcde'

type FormState = { name: string; email: string; message: string }
type Errors = Partial<Record<keyof FormState, string>>
type Status = 'idle' | 'submitting' | 'success' | 'error'

const inputClass =
  'w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-900 dark:text-white'

export function Contact() {
  const t = useTranslations('contact') // بخش contact از فایل ترجمه

  const [form, setForm] = React.useState<FormState>({ name: '', email: '', message: '' })
  const [errors, setErrors] = React.useState<Errors>({})
  const [status, setStatus] = React.useState<Status>('idle')

  const isSubmitting = status === 'submitting'

  // اعتبارسنجی — متن خطاها از ترجمه میاد
  function validate(): boolean {
    const next: Errors = {}
    if (!form.name.trim()) next.name = t('errName')
    if (!form.email.trim()) next.email = t('errEmailRequired')
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = t('errEmailInvalid')
    if (!form.message.trim()) next.message = t('errMessage')
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return

    setStatus('submitting')

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
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
          eyebrow={t('eyebrow')}
          title={t('title')}
          description={t('description')}
        />

        <div className="mx-auto mt-12 max-w-xl">
          {status === 'success' ? (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center dark:border-emerald-500/30 dark:bg-emerald-500/10">
              <FontAwesomeIcon icon={faCircleCheck} className="text-3xl text-emerald-600 dark:text-emerald-400" />
              <p className="mt-3 font-bold text-slate-900 dark:text-white">{t('successTitle')}</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{t('successText')}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* نام */}
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  {t('nameLabel')}
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={t('namePlaceholder')}
                  disabled={isSubmitting}
                  className={inputClass}
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </div>

              {/* ایمیل */}
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  {t('emailLabel')}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  dir="ltr"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  disabled={isSubmitting}
                  className={`${inputClass} text-left`}
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>

              {/* پیام */}
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  {t('messageLabel')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t('messagePlaceholder')}
                  disabled={isSubmitting}
                  className={`${inputClass} resize-none`}
                />
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
              </div>

              {/* خطای کلی ارسال */}
              {status === 'error' && (
                <p className="text-sm text-red-500">{t('errorText')}</p>
              )}

              {/* دکمه: موقع ارسال قفل می‌شه و اسپینر نشون می‌ده */}
              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? (
                  <>
                    <FontAwesomeIcon icon={faSpinner} className="animate-spin text-[14px]" />
                    {t('sending')}
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faPaperPlane} className="text-[14px]" />
                    {t('send')}
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