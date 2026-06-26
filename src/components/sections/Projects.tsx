import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PROJECTS } from '@/data/projects'

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="پروژه‌ها"
          title="کارهایی که ساخته‌ام"
          description="چند نمونه از پروژه‌هایی که روشون کار کردم. هر کدوم یک قدم برای یادگیری و بهتر شدن بود."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/40 dark:hover:border-emerald-500/40"
            >
              {/* به‌جای تصویرِ احتمالاً ناموجود، یه بنرِ گرادینت می‌ذارم تا
                  پروژه از روز اول تمیز دیده بشه. بعداً می‌تونی next/image بذاری. */}
              <div className="relative flex h-36 items-center justify-center bg-gradient-to-br from-emerald-500 to-emerald-700">
                <span className="text-3xl font-bold text-white/90">{project.title.charAt(0)}</span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>

                {/* تگ‌های تکنولوژی */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* لینک‌ها — فقط اونایی که وجود دارن نمایش داده می‌شن */}
                <div className="mt-5 flex items-center gap-4 border-t border-slate-100 pt-4 dark:border-slate-800">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                      گیت‌هاب
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
                    >
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" />
                      نسخه‌ی زنده
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}