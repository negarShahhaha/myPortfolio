
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

// تایپ‌های مشترک پروژه — یک‌جا تعریف می‌شن تا data و کامپوننت‌ها هماهنگ بمونن.

export type SkillCategory = {
  title: string
  icon: IconDefinition
  skills: string[]
}

export type Project = {
  title: string
  description: string
  tags: string[]
  github?: string // اختیاری — بعضی پروژه‌ها ممکنه ریپوی عمومی نداشته باشن
  demo?: string
}

export type TimelineItem = {
  type: 'work' | 'education' // برای انتخاب آیکون و رنگ مناسب
  title: string
  org: string
  period: string
  description: string
}