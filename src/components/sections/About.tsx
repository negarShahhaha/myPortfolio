'use client' // چون از useTranslations استفاده می‌کنیم

import { useTranslations } from 'next-intl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faCode, faLightbulb } from '@fortawesome/free-solid-svg-icons'

import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function About() {
  const t = useTranslations('about') // بخش about از فایل ترجمه

  // سه نقطه‌ی قوت — متن‌ها از ترجمه، آیکون‌ها ثابت
  const HIGHLIGHTS = [
    { icon: faGraduationCap, title: t('card1Title'), text: t('card1Text') },
    { icon: faCode, title: t('card2Title'), text: t('card2Text') },
    { icon: faLightbulb, title: t('card3Title'), text: t('card3Text') },
  ]

  return (
    <section id="about" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={t('eyebrow')}
          title={t('title')}
          description={t('description')}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-emerald-300 dark:border-slate-800 dark:bg-slate-900/40 dark:hover:border-emerald-500/40"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                <FontAwesomeIcon icon={item.icon} className="text-lg" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}