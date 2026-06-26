
import Link from 'next/link'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary'

type ButtonProps = {
  children: React.ReactNode
  href?: string
  external?: boolean // لینک خارجی (تب جدید) یا داخلی
  variant?: Variant
  type?: 'button' | 'submit'
  onClick?: () => void
  className?: string
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950'

const variants: Record<Variant, string> = {
  primary: 'bg-emerald-600 text-white shadow-sm hover:bg-emerald-700 hover:shadow-md',
  secondary:
    'border border-slate-300 text-slate-700 hover:border-emerald-500 hover:text-emerald-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-emerald-500 dark:hover:text-emerald-400',
}

/**
 * دکمه‌ی همه‌کاره: با href تبدیل به لینک می‌شه (داخلی یا خارجی)،
 * بدون href یک <button> معمولیه. این‌طوری همه‌جا یک ظاهر داریم.
 */
export function Button({
  children,
  href,
  external,
  variant = 'primary',
  type = 'button',
  onClick,
  className,
}: ButtonProps) {
  const classes = cn(base, variants[variant], className)

  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    ) : (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}