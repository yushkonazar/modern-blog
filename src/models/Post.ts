import { z } from "zod";

export const PostSchema = z.object({
  id:       z.string().uuid().optional(),
  authorId: z.string().optional(),
  title: z
    .string()
    .trim()
    .min(3, "Заголовок занадто короткий")
    .max(100, "Заголовок занадто довгий"),
  content: z
    .string()
    .trim()
    .min(10, "Контент має бути мінімум 10 символів")
    .max(10_000, "Контент не може перевищувати 10 000 символів"),
  author:    z.string().trim().max(50).default("Анонім"),
  createdAt: z.string().optional(),
});

export type Post = z.infer<typeof PostSchema>;