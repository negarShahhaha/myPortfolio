
import type { Project } from '@/types'

/**
 * پروژه‌های شاخص — فعلاً placeholder.
 * لینک‌های github/demo رو با موارد واقعی خودت عوض کن.
 */
export const PROJECTS: Project[] = [
  {
    title: 'فروشگاه آنلاین مینیمال',
    description:
      'قالب فروشگاهی سبک و سریع با سبد خرید سمت کلاینت؛ تمرکز روی تجربه‌ی خرید روان و نرخ تبدیل بالا.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'E-commerce'],
    github: 'https://github.com/your-username/mini-shop',
    demo: 'https://mini-shop-demo.vercel.app',
  },
  {
    title: 'داشبورد تحلیل فروش',
    description:
      'داشبورد نمایش KPIهای فروش با نمودارهای تعاملی؛ همون‌جایی که نگاه کسب‌وکاری و فرانت‌اند به هم می‌رسن.',
    tags: ['React', 'Charts', 'Dashboard', 'Data Viz'],
    github: 'https://github.com/your-username/sales-dashboard',
    demo: 'https://sales-dashboard-demo.vercel.app',
  },
  {
    title: 'لندینگ محصول دیجیتال',
    description:
      'صفحه‌ی فرود واکنش‌گرا برای یک محصول SaaS با تمرکز روی کپی‌رایتینگ و دکمه‌های دعوت‌به‌اقدام مؤثر.',
    tags: ['Next.js', 'Tailwind', 'Landing', 'SEO'],
    github: 'https://github.com/your-username/saas-landing',
    demo: 'https://saas-landing-demo.vercel.app',
  },
]