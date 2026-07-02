// هر پروژه دو نسخه متن داره: فارسی (fa) و انگلیسی (en).
// تگ‌ها و لینک‌ها چون فنی‌ان، مشترک می‌مونن.
export type Project = {
  title: { fa: string; en: string }
  description: { fa: string; en: string }
  tags: string[]
  github?: string
  demo?: string
}

export const PROJECTS: Project[] = [
  {
    title: {
      fa: 'فروشگاه آنلاین مینیمال',
      en: 'Minimal Online Store',
    },
    description: {
      fa: 'قالب فروشگاهی سبک و سریع با سبد خرید سمت کلاینت؛ تمرکز روی تجربه‌ی خرید روان و نرخ تبدیل بالا.',
      en: 'A light, fast store template with a client-side cart; focused on a smooth shopping experience and high conversion.',
    },
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'E-commerce'],
    github: 'https://github.com/your-username/mini-shop',
    demo: 'https://mini-shop-demo.vercel.app',
  },
  {
    title: {
      fa: 'داشبورد تحلیل فروش',
      en: 'Sales Analytics Dashboard',
    },
    description: {
      fa: 'داشبورد نمایش KPIهای فروش با نمودارهای تعاملی؛ همون‌جایی که نگاه کسب‌وکاری و فرانت‌اند به هم می‌رسن.',
      en: 'A dashboard showing sales KPIs with interactive charts; where business thinking meets front-end.',
    },
    tags: ['React', 'Charts', 'Dashboard', 'Data Viz'],
    github: 'https://github.com/your-username/sales-dashboard',
    demo: 'https://sales-dashboard-demo.vercel.app',
  },
  {
    title: {
      fa: 'لندینگ محصول دیجیتال',
      en: 'Digital Product Landing',
    },
    description: {
      fa: 'صفحه‌ی فرود واکنش‌گرا برای یک محصول SaaS با تمرکز روی کپی‌رایتینگ و دکمه‌های دعوت‌به‌اقدام مؤثر.',
      en: 'A responsive landing page for a SaaS product, focused on copywriting and effective call-to-action buttons.',
    },
    tags: ['Next.js', 'Tailwind', 'Landing', 'SEO'],
    github: 'https://github.com/your-username/saas-landing',
    demo: 'https://saas-landing-demo.vercel.app',
  },
]