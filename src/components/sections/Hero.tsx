import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* نور سبزِ محو پشت محتوا برای کمی عمق (کاملاً تزئینی) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-500/20" />
      </div>

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          {/* برچسب وضعیت با نقطه‌ی سبز */}
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            آماده‌ی همکاری و پروژه‌های جدید
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            سلام، من <span className="text-emerald-600 dark:text-emerald-400">نگار شاه حسینی</span> هستم
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600 sm:text-xl dark:text-slate-300">
            دانش‌آموخته‌ی مدیریت بازرگانی و توسعه‌دهنده‌ی فرانت‌اند؛ جایی که نگاهِ
            کسب‌وکاری و کدِ تمیز به هم می‌رسن — به‌خصوص توی ای‌کامرس و محصولات دیجیتال.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="#projects">
              <FontAwesomeIcon icon={faArrowDown} className="text-[14px]" />
              دیدن پروژه‌ها
            </Button>
            <Button href="#contact" variant="secondary">
              <FontAwesomeIcon icon={faPaperPlane} className="text-[14px]" />
              تماس با من
            </Button>
          </div>

          {/* لینک‌های اجتماعی سریع */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="گیت‌هاب"
              className="text-slate-400 transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
            >
              <FontAwesomeIcon icon={faGithub} className="text-2xl" />
            </a>
            <a
              href="https://linkedin.com/in/your-username"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="لینکدین"
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