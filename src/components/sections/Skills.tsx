import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SKILL_CATEGORIES } from '@/data/skills'

export function Skills() {
  return (
    // پس‌زمینه‌ی کمی متفاوت تا این سکشن از بقیه جدا دیده بشه
    <section id="skills" className="bg-slate-50/70 py-20 sm:py-28 dark:bg-slate-900/30">
      <Container>
        <SectionHeading
          eyebrow="مهارت‌ها"
          title="چیزهایی که باهاشون کار می‌کنم"
          description="ترکیبی از مهارت‌های فنی و کسب‌وکاری — همین تنوع کمک می‌کنه محصول رو کامل‌تر ببینم."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/40"
            >
              {/* هدر دسته: آیکون + عنوان */}
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                  <FontAwesomeIcon icon={category.icon} />
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{category.title}</h3>
              </div>

              {/* چیپ‌های مهارت */}
              <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}