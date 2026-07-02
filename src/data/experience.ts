// هر آیتم دو نسخه متن داره: فارسی (fa) و انگلیسی (en).
export type TimelineItem = {
  type: 'work' | 'education'
  title: { fa: string; en: string }
  org: { fa: string; en: string }
  period: { fa: string; en: string }
  description: { fa: string; en: string }
}

export const TIMELINE: TimelineItem[] = [
  {
    type: 'work',
    title: {
      fa: 'توسعه‌دهنده‌ی فرانت‌اند (فریلنس)',
      en: 'Front-end Developer (Freelance)',
    },
    org: {
      fa: 'پروژه‌های شخصی و سفارشی',
      en: 'Personal & client projects',
    },
    period: {
      fa: '۱۴۰۲ — اکنون',
      en: '2023 — Present',
    },
    description: {
      fa: 'ساخت رابط‌های کاربری با React و Next.js؛ از لندینگ‌پیج تا داشبورد، با تمرکز روی کیفیت کد و تجربه‌ی کاربری.',
      en: 'Building UIs with React and Next.js — from landing pages to dashboards, focused on code quality and user experience.',
    },
  },
  {
    type: 'education',
    title: {
      fa: 'کارشناسی مدیریت بازرگانی',
      en: "Bachelor's in Business Management",
    },
    org: {
      fa: 'دانشگاه …',
      en: 'University of …',
    },
    period: {
      fa: '۱۳۹۹ — ۱۴۰۳',
      en: '2020 — 2024',
    },
    description: {
      fa: 'تمرکز روی بازاریابی، رفتار مصرف‌کننده و استراتژی؛ همین نگاه الان به تصمیم‌های محصولی‌ام جهت می‌ده.',
      en: 'Focused on marketing, consumer behavior, and strategy — the same lens that now guides my product decisions.',
    },
  },
  {
    type: 'education',
    title: {
      fa: 'دوره‌های تخصصی فرانت‌اند',
      en: 'Front-end Specialized Courses',
    },
    org: {
      fa: 'یادگیری خودآموز و آنلاین',
      en: 'Self-taught & online',
    },
    period: {
      fa: '۱۴۰۱ — ۱۴۰۲',
      en: '2022 — 2023',
    },
    description: {
      fa: 'یادگیری عمیق JavaScript، React و اکوسیستم مدرن وب از طریق ساخت پروژه‌های واقعی.',
      en: 'Deep learning of JavaScript, React, and the modern web ecosystem through building real projects.',
    },
  },
]