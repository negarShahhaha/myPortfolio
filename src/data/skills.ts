import {
  faCode,
  faChartLine,
  faScrewdriverWrench,
  faUsersGear,
} from '@fortawesome/free-solid-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

// حالا به‌جای عنوان ثابت، یه titleKey داریم که به فایل ترجمه اشاره می‌کنه
export type SkillCategory = {
  titleKey: 'frontend' | 'business' | 'tools' | 'soft'
  icon: IconDefinition
  skills: { fa: string; en: string }[] // 👈 هر مهارت دو نسخه
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    titleKey: 'frontend',
    icon: faCode,
    skills: [
      { fa: 'React', en: 'React' },
      { fa: 'Next.js', en: 'Next.js' },
      { fa: 'TypeScript', en: 'TypeScript' },
      { fa: 'Tailwind CSS', en: 'Tailwind CSS' },
      { fa: 'HTML & CSS', en: 'HTML & CSS' },
      { fa: 'Git', en: 'Git' },
    ],
  },
  {
    titleKey: 'business',
    icon: faChartLine,
    skills: [
      { fa: 'تحلیل بازار', en: 'Market Analysis' },
      { fa: 'استراتژی محصول', en: 'Product Strategy' },
      { fa: 'دیجیتال مارکتینگ', en: 'Digital Marketing' },
      { fa: 'تحلیل داده', en: 'Data Analysis' },
      { fa: 'مدل کسب‌وکار', en: 'Business Model' },
    ],
  },
  {
    titleKey: 'tools',
    icon: faScrewdriverWrench,
    skills: [
      { fa: 'Figma', en: 'Figma' },
      { fa: 'VS Code', en: 'VS Code' },
      { fa: 'Vercel', en: 'Vercel' },
      { fa: 'Notion', en: 'Notion' },
      { fa: 'Google Analytics', en: 'Google Analytics' },
    ],
  },
  {
    titleKey: 'soft',
    icon: faUsersGear,
    skills: [
      { fa: 'کار تیمی', en: 'Teamwork' },
      { fa: 'حل مسئله', en: 'Problem Solving' },
      { fa: 'ارتباط مؤثر', en: 'Communication' },
      { fa: 'مدیریت زمان', en: 'Time Management' },
      { fa: 'یادگیری سریع', en: 'Fast Learning' },
    ],
  },
]