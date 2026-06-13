> [Читати українською](README.uk.md)

# 🖋️ Modern Blog 2026

A modern Full-Stack blogging platform built with **Next.js 15**.

## 🔗 Live Demo

[modern-blog-5k8a.onrender.com](https://modern-blog-5k8a.onrender.com/)

> Free hosting — the first request may take up to 30 seconds due to server spin-up after inactivity.

<img width="1896" height="863" alt="og" src="https://github.com/user-attachments/assets/114714f8-0fc8-49cc-a79d-6a9a48975824" />

## 🛠 Tech Stack
- **Framework:** [Next.js 15](https://nextjs.org/) (App Router, Server Actions)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict mode)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) + [Lucide Icons](https://lucide.dev/)
- **Validation:** [Zod](https://zod.dev/) (Runtime schema validation)
- **Authentication:** [Clerk](https://clerk.com/) (User management & access control)
- **Architecture:** MVC (Model-View-Controller)
- **Data Storage:** Local JSON Persistence (File system)

## 🚀 Features
- [x] **Create:** Create posts via modern Server Actions with instant UI updates.
- [x] **Read:** Dynamic rendering of the post feed and individual post pages.
- [x] **Update:** Full editing of existing posts with form pre-population.
- [x] **Delete:** Delete posts with real-time UI refresh.
- [x] **Authentication:** Protected CRUD operations via Clerk — sign-in required to create, edit or delete.
- [x] **UX/UI:** Responsive design, Glassmorphism effects, pending states and inline error validation.

---

## ⚠️ Current Status (MVP)
The project is at the **Minimum Viable Product** stage. Several architectural trade-offs were made for learning and demonstration purposes:

1. **Ephemeral data:** Posts are stored in `posts.json`, so on Render deployments data is temporary. After a new deploy, the post list resets to its initial state.
2. **Technical debt:** File-based storage was chosen over a real database to focus on learning Server Actions and MVC within the course scope.

## 🗺 Roadmap
- [ ] **Data Persistence:** Migrate from JSON file to **PostgreSQL** or **MongoDB** using **Prisma ORM**.
- [x] **Authentication:** Protected with **Clerk** — sign-in required to create, edit or delete posts.
- [ ] **Media Storage:** Add post cover image uploads via **Cloudinary**.
- [ ] **Dark Mode:** Full dark theme support.

---

## 📦 Getting Started

1. `git clone https://github.com/yushkonazar/modern-blog.git`
2. `npm install`
3. Create `.env.local` and add your Clerk keys:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_...
   CLERK_SECRET_KEY=sk_...
   ```
4. `npm run dev`
5. Open http://localhost:3000
