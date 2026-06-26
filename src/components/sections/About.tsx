import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faCode, faLightbulb } from '@fortawesome/free-solid-svg-icons'

import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

// سه نقطه‌ی قوت که داستان «کسب‌وکار + کد» رو روایت می‌کنن.
const HIGHLIGHTS = [
  {
    icon: faGraduationCap,
    title: 'پیش‌زمینه‌ی کسب‌وکار',
    text: 'مدیریت بازرگانی خوندم؛ یاد گرفتم محصول رو از زاویه‌ی بازار، کاربر و سودآوری ببینم.',
  },
  {
    icon: faCode,
    title: 'مهارت فنی',
    text: 'با React و Next.js رابط‌هایی می‌سازم که هم سریع و تمیزن، هم قابل‌اتکا.',
  },
  {
    icon: faLightbulb,
    title: 'نقطه‌ی تمایز',
    text: 'وقتی توسعه‌دهنده زبانِ کسب‌وکار رو هم بلد باشه، تصمیم‌های فنی هوشمندانه‌تر می‌شن.',
  },
]

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="درباره من"
          title="بین دنیای کسب‌وکار و کد"
          description="مسیرم از مدیریت بازرگانی شروع شد، ولی علاقه‌ام به ساختنِ چیزها من رو به دنیای فرانت‌اند کشوند. حالا این دو رو کنار هم نگه می‌دارم: محصول رو می‌فهمم و بلدم بسازمش."
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