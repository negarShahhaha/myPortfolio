'use client'

import { useTranslations, useLocale } from 'next-intl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PROJECTS } from '@/data/projects'

export function Projects() {
  const t = useTranslations('projects')
  const locale = useLocale() as 'fa' | 'en' // زبان فعلی: fa یا en

  return (
    <section id="projects" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={t('eyebrow')}
          title={t('title')}
          description={t('description')}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.title.en}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/40 dark:hover:border-emerald-500/40"
            >
              {/* بنر گرادینت با حرف اول عنوان */}
              <div className="relative flex h-36 items-center justify-center bg-gradient-to-br from-emerald-500 to-emerald-700">
                <span className="text-3xl font-bold text-white/90">
                  {project.title[locale].charAt(0)}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                {/* عنوان و توضیح از روی زبان فعلی انتخاب می‌شن */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {project.title[locale]}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {project.description[locale]}
                </p>

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

                <div className="mt-5 flex items-center gap-4 border-t border-slate-100 pt-4 dark:border-slate-800">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                      {t('github')}
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
                      {t('demo')}
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