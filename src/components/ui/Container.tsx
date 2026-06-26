
import { cn } from '@/lib/utils'

type ContainerProps = {
  children: React.ReactNode
  className?: string
}

/**
 * نگه‌دارنده‌ی مرکزی محتوا با حداکثر عرض و padding واکنش‌گرا.
 * یه جا تعریف می‌کنیم تا اگه بعداً خواستیم عرض رو عوض کنیم، فقط همین‌جا تغییر بدیم.
 */
export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn('mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  )
}