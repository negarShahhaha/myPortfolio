'use client'

import { useTranslations, useLocale } from 'next-intl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons'

import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { TIMELINE } from '@/data/experience'

export function Experience() {
  const t = useTranslations('experience')
  const locale = useLocale() as 'fa' | 'en' // زبان فعلی

  return (
    <section id="experience" className="bg-slate-50/70 py-20 sm:py-28 dark:bg-slate-900/30">
      <Container>
        <SectionHeading
          eyebrow={t('eyebrow')}
          title={t('title')}
          description={t('description')}
        />

        {/* خط زمانی عمودی — جهتش خودکار با dir صفحه هماهنگ می‌شه */}
        <div className="relative mt-12 space-y-8 border-e-2 border-slate-200 pe-6 dark:border-slate-800">
          {TIMELINE.map((item, index) => (
            <div key={index} className="relative">
              {/* نقطه‌ی روی خط زمانی */}
              <span className="absolute -end-[31px] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-[10px] text-white ring-4 ring-slate-50 dark:ring-slate-950">
                <FontAwesomeIcon icon={item.type === 'work' ? faBriefcase : faGraduationCap} />
              </span>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/40">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {item.title[locale]}
                  </h3>
                  <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                    {item.period[locale]}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
                  {item.org[locale]}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {item.description[locale]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}