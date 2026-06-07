> [Read in English](README.md)

# 🖋️ Modern Blog 2026 (Capstone Project)

Сучасна Full-Stack платформа для ведення блогу, побудована на **Next.js 15**.
Цей проєкт є глибокою модернізацією Capstone-завдання з курсу "The Complete Web Development Bootcamp",
адаптованою під професійні стандарти розробки 2026 року.

## 🔗 Live Demo

<img width="1896" height="863" alt="og" src="https://github.com/user-attachments/assets/d4e2c587-8572-456e-8f3b-8ddb38d927c0" />

> Безкоштовний хостинг — перший запит може займати до 30 секунд через "засинання" сервера.

<img width="1897" height="856" alt="image" src="https://github.com/user-attachments/assets/8b24f457-0c3b-4fa7-980c-0e165d17f3c3" />

## 🛠 Технологічний стек
- **Framework:** [Next.js 15](https://nextjs.org/) (App Router, Server Actions)
- **Мова:** [TypeScript](https://www.typescriptlang.org/) (Сувора типізація)
- **Стилізація:** [Tailwind CSS v4](https://tailwindcss.com/) + [Lucide Icons](https://lucide.dev/)
- **Валідація:** [Zod](https://zod.dev/) (Валідація схем на рівні рантайму)
- **Автентифікація:** [Clerk](https://clerk.com/) (Управління користувачами та контроль доступу)
- **Архітектура:** MVC (Model-View-Controller)
- **Зберігання даних:** Local JSON Persistence (Локальна файлова система)

## 🚀 Функціональні можливості
- [x] **Create:** Створення постів через сучасні Server Actions із миттєвим оновленням UI.
- [x] **Read:** Динамічний рендеринг списку постів та окремих сторінок для читання.
- [x] **Update:** Повноцінне редагування існуючих записів із автозаповненням форм.
- [x] **Delete:** Видалення публікацій у реальному часі.
- [x] **Автентифікація:** Захист CRUD-операцій через Clerk — для створення, редагування та видалення потрібен вхід.
- [x] **UX/UI:** Адаптивний дизайн, Glassmorphism ефекти, обробка станів завантаження (Pending states) та валідація помилок "на льоту".

---

## ⚠️ Важливо: Поточний статус (MVP)
Проєкт перебуває у стадії **Minimum Viable Product**. Для цілей навчання та демонстрації логіки було прийнято кілька архітектурних компромісів:

1. **Ефемерність даних:** Оскільки дані зберігаються у файлі `posts.json`, при деплої на Render вони є тимчасовими. Після нового деплою список постів повертається до початкового стану.
2. **Технічний борг:** Використання файлової системи замість повноцінної БД було обрано для фокусу на вивченні Server Actions та MVC в межах навчального курсу.

## 🗺 Roadmap (Плани на майбутнє)
- [ ] **Data Persistence:** Міграція з JSON-файлу на **PostgreSQL** або **MongoDB** за допомогою **Prisma ORM**.
- [x] **Автентифікація:** Захист через **Clerk** — для створення, редагування та видалення постів потрібен вхід.
- [ ] **Media Storage:** Додавання можливості завантаження обкладинок для постів через **Cloudinary**.
- [ ] **Dark Mode:** Повноцінна підтримка темної теми.

---

## 📦 Як запустити проєкт локально
1. `git clone https://github.com/yushkonazar/modern-blog.git`
2. `npm install`
3. Створи `.env.local` і додай ключі Clerk:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_...
   CLERK_SECRET_KEY=sk_...
   ```
4. `npm run dev`
5. Відкрий http://localhost:3000
