export type Article = {
  id: number
  title: string
  status: "Draft" | "Published" | "Archived"
  author: string
  date: string
}

export const dummyArticles: Article[] = [
  {
    id: 1,
    title: "Understanding React Hooks",
    status: "Published",
    author: "Nisha Poonia",
    date: "2025-05-17"
  },
  {
    id: 2,
    title: "Tailwind Tips & Tricks",
    status: "Draft",
    author: "Nisha Poonia",
    date: "2025-05-14"
  },
  {
    id: 3,
    title: "TypeScript Basics",
    status: "Archived",
    author: "Nisha Poonia",
    date: "2025-05-10"
  }
]
