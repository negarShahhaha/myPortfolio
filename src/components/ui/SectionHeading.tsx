
import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow?: string // برچسب کوچک سبز بالای عنوان
  title: string
  description?: string
  align?: 'right' | 'center'
  className?: string
}

/**
 * سرتیتر یکدست برای همه‌ی سکشن‌ها — تا ظاهر سایت منسجم بمونه.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'right',
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && (
        <span className="mb-3 inline-block text-sm font-semibold text-emerald-600 dark:text-emerald-400">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">{description}</p>
      )}
    </div>
  )
}