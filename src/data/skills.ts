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
  skills: string[]
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    titleKey: 'frontend',
    icon: faCode,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML & CSS', 'Git'],
  },
  {
    titleKey: 'business',
    icon: faChartLine,
    // اسم مهارت‌ها رو هم می‌تونی بعداً دوزبانه کنی؛ فعلاً فارسی می‌مونن
    skills: ['تحلیل بازار', 'استراتژی محصول', 'دیجیتال مارکتینگ', 'تحلیل داده', 'مدل کسب‌وکار'],
  },
  {
    titleKey: 'tools',
    icon: faScrewdriverWrench,
    skills: ['Figma', 'VS Code', 'Vercel', 'Notion', 'Google Analytics'],
  },
  {
    titleKey: 'soft',
    icon: faUsersGear,
    skills: ['کار تیمی', 'حل مسئله', 'ارتباط مؤثر', 'مدیریت زمان', 'یادگیری سریع'],
  },
]