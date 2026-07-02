<div align="center">

# 🌿 پورتفولیوی شخصی نگار شاه حسینی

پورتفولیوی شخصی و دوزبانه (فارسی/انگلیسی)، ساخته‌شده با Next.js — جایی که نگاهِ کسب‌وکاری و فرانت‌اند به هم می‌رسن.

[**🔗 مشاهده‌ی نسخه‌ی زنده**](https://myportfolio-2xn.pages.dev)

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)

</div>

---

## ✨ درباره‌ی پروژه

این یک پورتفولیوی شخصیِ مدرن، مینیمال و کاملاً واکنش‌گراست که با تمرکز روی تمیزی کد و تجربه‌ی کاربری ساخته شده. سایت به‌صورت کامل **دوزبانه** (فارسی راست‌چین و انگلیسی چپ‌چین) و دارای **حالت روز و شب** است.

## 🚀 امکانات

- 🌍 **دوزبانه (i18n):** فارسی و انگلیسی با `next-intl`؛ جهت صفحه (RTL/LTR) خودکار عوض می‌شود
- 🌗 **حالت تاریک و روشن:** با `next-themes` و ذخیره‌ی انتخاب کاربر
- 📱 **کاملاً واکنش‌گرا:** طراحی موبایل‌محور، از گوشی تا دسکتاپ
- 🎨 **طراحی مینیمال:** پالت رنگ Emerald / Slate و فونت فارسی شبنم
- 📨 **فرم تماس کاربردی:** ارسال مستقیم پیام با Formspree، همراه با حالت loading و اعتبارسنجی
- ⚡ **بهینه و سریع:** بهره‌گیری از قابلیت‌های Next.js 15 (App Router)

## 🛠️ تکنولوژی‌ها

| دسته | ابزار |
|------|-------|
| فریم‌ورک | Next.js 15 (App Router) |
| زبان | TypeScript |
| استایل | Tailwind CSS |
| چندزبانه | next-intl |
| تم | next-themes |
| آیکون | Font Awesome |
| فرم | Formspree |
| میزبانی | Cloudflare Pages |

## 📂 ساختار پروژه

```
src/
├── app/
│   └── [locale]/          # صفحه‌ها بر اساس زبان (fa / en)
│       ├── layout.tsx
│       └── page.tsx
├── components/
│   ├── layout/            # Navbar، Footer، ThemeToggle، LanguageToggle
│   ├── sections/          # Hero، About، Skills، Projects، Experience، Contact
│   ├── ui/                # اجزای قابل‌استفاده‌ی مجدد (Button، Container، ...)
│   └── providers/         # ThemeProvider
├── data/                  # داده‌ی پروژه‌ها، مهارت‌ها و تجربه‌ها
├── i18n/                  # تنظیمات چندزبانه
└── lib/                   # فونت، آیکون‌ها و توابع کمکی
messages/                  # فایل‌های ترجمه (fa.json / en.json)
```

## ⚙️ راه‌اندازی محلی

```bash
# ۱. کلون کردن مخزن
git clone https://github.com/negarShahhaha/myPortfolio.git
cd myPortfolio

# ۲. نصب وابستگی‌ها
npm install

# ۳. اجرای سرور توسعه
npm run dev
```

سپس مرورگر را روی [http://localhost:3000](http://localhost:3000) باز کنید.

> **نکته:** برای فعال‌شدن فرم تماس، مقدار `FORMSPREE_ENDPOINT` را در `Contact.tsx` با شناسه‌ی فرم خودتان از [Formspree](https://formspree.io) جایگزین کنید.

## 📬 ارتباط با من

- 🌐 وب‌سایت: [نسخه‌ی زنده](https://myportfolio-2xn.pages.dev)
- 💼 لینکدین: [Negar Shahhosseini](https://www.linkedin.com/in/negar-shahhosini-803541417)
- 🐙 گیت‌هاب: [@negarShahhaha](https://github.com/negarShahhaha)

## 📄 لایسنس

این پروژه تحت لایسنس [MIT](LICENSE) منتشر شده است.

---

<div align="center">

ساخته‌شده با 💚 و Next.js

</div>
