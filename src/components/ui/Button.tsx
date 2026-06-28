import Link from 'next/link'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary'

type ButtonProps = {
  children: React.ReactNode
  href?: string
  external?: boolean
  variant?: Variant
  type?: 'button' | 'submit'
  onClick?: () => void
  disabled?: boolean // 👈 جدید
  className?: string
  download?: boolean
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950'

const variants: Record<Variant, string> = {
  primary: 'bg-emerald-600 text-white shadow-sm hover:bg-emerald-700 hover:shadow-md',
  secondary:
    'border border-slate-300 text-slate-700 hover:border-emerald-500 hover:text-emerald-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-emerald-500 dark:hover:text-emerald-400',
}

export function Button({
  children,
  href,
  external,
  variant = 'primary',
  type = 'button',
  onClick,
 
  disabled = false, // 👈 جدید
  className,
 download = false
}: ButtonProps) {
  // وقتی disabled باشه، کم‌رنگ و غیرقابل‌کلیک می‌شه
  const classes = cn(
    base,
    variants[variant],
    disabled && 'cursor-not-allowed opacity-60 hover:bg-emerald-600 hover:shadow-sm',
    className,
  )

  // حالت لینک — disabled روی <a>/<Link> معنی نداره، پس نادیده‌اش می‌گیریم
if (href) {
    // اگه download باشه، از تگ <a> ساده استفاده می‌کنیم (next/link دانلود رو هندل نمی‌کنه)
    if (download) {
      return (
        <a href={href} download className={classes}>
          {children}
        </a>
      )
    }
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
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}