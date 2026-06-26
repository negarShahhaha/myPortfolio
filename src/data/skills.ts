
import {
  faCode,
  faChartLine,
  faScrewdriverWrench,
  faUsersGear,
} from '@fortawesome/free-solid-svg-icons'
import type { SkillCategory } from '@/types'

/**
 * مهارت‌ها در چهار دسته — فنی، کسب‌وکار، ابزار و مهارت‌های نرم.
 * هرکدوم رو که خواستی کم/زیاد کن؛ کامپوننت Skills خودش روشون map می‌زنه.
 */
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'فرانت‌اند',
    icon: faCode,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML & CSS', 'Git'],
  },
  {
    title: 'کسب‌وکار و محصول',
    icon: faChartLine,
    skills: ['تحلیل بازار', 'استراتژی محصول', 'دیجیتال مارکتینگ', 'تحلیل داده', 'مدل کسب‌وکار'],
  },
  {
    title: 'ابزارها',
    icon: faScrewdriverWrench,
    skills: ['Figma', 'VS Code', 'Vercel', 'Notion', 'Google Analytics'],
  },
  {
    title: 'مهارت‌های نرم',
    icon: faUsersGear,
    skills: ['کار تیمی', 'حل مسئله', 'ارتباط مؤثر', 'مدیریت زمان', 'یادگیری سریع'],
  },
]