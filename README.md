##🚀 AI-Powered Blogging Dashboard

A small **Next .js 14 (App Router)** demo that lets you manage article keywords, generate content, and chat with support—all in one responsive dashboard.

Live demo → [https://my-dahboard.vercel.app](https://mydashboard.vercel.app)

---

### ✨ Features

| Area                      | What it does                                                                                                        |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **Sidebar**               | Collapsible sections with nested links (Articles, Auto-Blog, Integrations…).                                        |
| **Generated Articles**    | Paginated table with inline filters, bulk‐select check-boxes, sortable headers, “View” actions, and publish status. |
| **Create Article**        | Form to enter title, keyword traffic, body, and “Publish Now” toggle.                                               |
| **Live Chat Button**      | Floating action button that opens a mini chat window.                                                               |
| **Account Header**        | Fixed top-left card with account switcher.                                                                          |
| **TypeScript & Tailwind** | Fully typed components and utility-first styling.                                                                   |

---

### 🖥️ Local setup

```bash
git clone https://github.com/<you>/ai-blog-dashboard.git
cd ai-blog-dashboard
cp .env.example .env.local    # fill if you add APIs later
npm install
npm run dev                   # http://localhost:3000
```

### 📂 Project structure (high-level)

```
app/
│  layout.tsx           # root layout
│  page.tsx             # main dashboard
│
├─ dashboard/
│   ├─ generated-articles/
│   │    ├─ page.tsx    # table view
│   │─ create-article/
│   │     ├─ page.tsx
│   └─ …other routes…
│
├─ components/ui/
│   ├─ Sidebar.tsx
│   ├─ DashboardTable.tsx
│   ├─ AccountHeader.tsx
│   └─ LiveChatButton.tsx
└─ lib/
    utils.ts
```

---

### 🛠️ Tech stack

* **Next.js 14** – App Router, React Server Components
* **TypeScript** – strict mode
* **Tailwind CSS** – utility styling
* **Lucide-react** – icons
* **Vercel** – zero-config deployment (free tier)

---

### 🏗️ Build & deploy

```bash
# build locally
npm run build
npm start

# deploy (Vercel CLI)
vercel --prod
```

Vercel automatically builds on every push to `main` and gives preview URLs for other branches.

---

### 🔐 Security & secrets

* `.env*` files are **git-ignored**.
* Add environment variables in **Vercel → Settings → Environment Variables** or **GitHub → Settings → Secrets**.
* Branch protection and Dependabot alerts are enabled on the repo.

---

### 🙌 Contributing

1. Fork and create a feature branch.
2. Run `npm run lint` before pushing.
3. Open a PR with a clear title and description.

---

### 📜 License

MIT © 2025 Nisha Poonia
