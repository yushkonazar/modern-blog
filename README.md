> [Читати українською](README.uk.md)

# 🖋️ Modern Blog 2026 (Capstone Project)

A modern Full-Stack blogging platform built with **Next.js 15**.
This project is a deep modernization of the Capstone assignment from "The Complete Web Development Bootcamp" course, adapted to professional development standards of 2026.

## 🛠 Tech Stack
- **Framework:** [Next.js 15](https://nextjs.org/) (App Router, Server Actions)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict mode)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) + [Lucide Icons](https://lucide.dev/)
- **Validation:** [Zod](https://zod.dev/) (Runtime schema validation)
- **Architecture:** MVC (Model-View-Controller)
- **Data Storage:** Local JSON Persistence (File system)

## 🚀 Features
- [x] **Create:** Create posts via modern Server Actions with instant UI updates.
- [x] **Read:** Dynamic rendering of the post feed and individual post pages.
- [x] **Update:** Full editing of existing posts with form pre-population.
- [x] **Delete:** Delete posts with real-time UI refresh.
- [x] **UX/UI:** Responsive design, Glassmorphism effects, pending states and inline error validation.

---

## ⚠️ Current Status (MVP)
The project is at the **Minimum Viable Product** stage. Several architectural trade-offs were made for learning and demonstration purposes:

1. **Ephemeral data:** Posts are stored in `posts.json`, so on Vercel deployments data is temporary. After a serverless function restart or a new deploy, the post list resets to its initial state.
2. **No authentication:** Edit and delete operations are open to all users at this stage (demo mode).
3. **Technical debt:** File-based storage was chosen over a real database to focus on learning Server Actions and MVC within the course scope.

## 🗺 Roadmap
- [ ] **Data Persistence:** Migrate from JSON file to **PostgreSQL** or **MongoDB** using **Prisma ORM**.
- [ ] **Authentication:** Implement **NextAuth.js** to protect authored posts.
- [ ] **Media Storage:** Add post cover image uploads via **Cloudinary**.
- [ ] **Dark Mode:** Full dark theme support.

---

## 📦 Getting Started

1. `git clone https://github.com/yushkonazar/modern-blog.git`
2. `npm install`
3. `npm run dev`
4. Open http://localhost:3000
