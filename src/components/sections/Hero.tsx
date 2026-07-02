'use client' // چون از هوک useTranslations استفاده می‌کنیم

import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faPaperPlane, faDownload } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export function Hero() {
  const t = useTranslations('hero') // بخش hero از فایل ترجمه

  return (
    <section id="hero" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* نور سبزِ محو پشت عکس پروفایل (تزئینی) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-32 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl dark:bg-emerald-500/30" />
      </div>

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          {/* عکس پروفایل */}
          <Image
            src="/images/profile.jpg"
            alt={t('name')}
            width={256}
            height={256}
            priority
            className="mx-auto mb-6 h-40 w-40 rounded-full object-cover ring-4 ring-emerald-500/20"
          />

          {/* برچسب وضعیت با نقطه‌ی سبز */}
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            {t('badge')}
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            {t('greeting')}{' '}
            <span className="text-emerald-600 dark:text-emerald-400">{t('name')}</span> {t('suffix')}
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600 sm:text-xl dark:text-slate-300">
            {t('description')}
          </p>

          {/* دو دکمه‌ی اصلی */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="#projects" variant="secondary">
              <FontAwesomeIcon icon={faArrowDown} className="text-[14px]" />
              {t('viewProjects')}
            </Button>
            <Button href="#contact" variant="secondary">
              <FontAwesomeIcon icon={faPaperPlane} className="text-[14px]" />
              {t('contactMe')}
            </Button>
          </div>

          {/* دکمه‌ی دانلود رزومه، یه ردیف پایین‌تر */}
          <div className="mt-4 flex justify-center">
            <Button href="/resume.pdf" download variant="secondary">
              <FontAwesomeIcon icon={faDownload} className="text-[14px]" />
              {t('downloadResume')}
            </Button>
          </div>

          {/* لینک‌های اجتماعی سریع */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="https://github.com/negarShahhaha"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-400 transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
            >
              <FontAwesomeIcon icon={faGithub} className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/negar-shahhosini-803541417"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}