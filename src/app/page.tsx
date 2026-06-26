import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Experience } from '@/components/sections/Experience'
import { Contact } from '@/components/sections/Contact'

/**
 * صفحه‌ی اصلی | Home page
 * فقط سکشن‌ها رو به ترتیبِ روایتِ صفحه می‌چینه:
 * معرفی → درباره → مهارت‌ها → پروژه‌ها → تجربه → تماس.
 *
 * هر سکشن id خودش رو داره (مثل #about) تا لینک‌های Navbar
 * مستقیم بهش اسکرول کنن.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  )
}