import { z } from "zod";

export const PostSchema = z.object({
   id: z.string().uuid().optional(),
   title: z
    .string()
    .min(3, "Заголовок занадто короткий")
    .max(100, "Заголовок занадто довгий"),
   content: z
    .string()
    .min(10, "Контент має бути мінімум 10 символів"),
   author: z.string().default("Анонім"),
   createdAt: z.string().optional(), 
});

export type Post = z.infer<typeof PostSchema>;