"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth, currentUser } from "@clerk/nextjs/server";
import { storage } from "@/lib/storage";
import { PostSchema } from "@/models/Post";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";

const uuidSchema = z.string().uuid();

export type FormState = {
  errors?: {
    title?: string[];
    content?: string[];
  };
  message?: string | null;
  success?: boolean;
  inputs?: {
    title?: string;
    content?: string;
  };
};

export async function createPostAction(prevState: FormState, formData: FormData): Promise<FormState> {
  const { userId } = await auth();
  if (!userId) return { success: false, message: "Необхідно увійти в систему" };

  const title = (formData.get("title") as string | null)?.trim() ?? "";
  const content = (formData.get("content") as string | null)?.trim() ?? "";

  const validated = PostSchema.safeParse({ title, content });

  if (!validated.success) {
    return {
      success: false,
      errors: validated.error.flatten().fieldErrors,
      inputs: { title, content },
      message: "Виправте помилки у формі"
    };
  }

  const user = await currentUser();
  const authorName =
    user?.fullName ?? user?.firstName ?? user?.username ?? "Анонім";

  const allPosts = await storage.getAll();
  allPosts.push({
    ...validated.data,
    id: uuidv4(),
    authorId: userId,
    author: authorName,
    createdAt: new Date().toISOString(),
  });

  await storage.saveAll(allPosts);
  revalidatePath("/");

  return { success: true, message: "Пост опубліковано!", inputs: {} };
}

export async function deletePostAction(id: string) {
  const { userId } = await auth();
  if (!userId) return;

  if (!uuidSchema.safeParse(id).success) return;

  const allPosts = await storage.getAll();
  const post = allPosts.find((p) => p.id === id);

  if (!post || (post.authorId !== undefined && post.authorId !== userId)) return;

  const filteredPosts = allPosts.filter((p) => p.id !== id);
  await storage.saveAll(filteredPosts);
  revalidatePath("/");
}

export async function updatePostAction(id: string, prevState: FormState, formData: FormData): Promise<FormState> {
  const { userId } = await auth();
  if (!userId) return { success: false, message: "Необхідно увійти в систему" };

  if (!uuidSchema.safeParse(id).success) {
    return { success: false, message: "Невірний ідентифікатор" };
  }

  const allPosts = await storage.getAll();
  const post = allPosts.find((p) => p.id === id);

  if (!post || (post.authorId !== undefined && post.authorId !== userId)) {
    return { success: false, message: "Немає прав для редагування цього посту" };
  }

  const title = (formData.get("title") as string | null)?.trim() ?? "";
  const content = (formData.get("content") as string | null)?.trim() ?? "";

  const validated = PostSchema.safeParse({ title, content });

  if (!validated.success) {
    return {
      success: false,
      errors: validated.error.flatten().fieldErrors,
      inputs: { title, content }
    };
  }

  await storage.update(id, { ...validated.data, authorId: post.authorId ?? userId });
  revalidatePath("/");
  revalidatePath(`/posts/${id}`);
  redirect("/");
}
