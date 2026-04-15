"use server";

import { revalidatePath } from "next/cache";
import { storage } from "@/lib/storage";
import { PostSchema } from "@/models/Post";
import { v4 as uuidv4 } from "uuid";

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
const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const validated = PostSchema.safeParse({ title, content });

  if (!validated.success) {
    return {
      success: false,
      errors: validated.error.flatten().fieldErrors,
      inputs: { title, content },
      message: "Виправте помилки у формі"
    };
  }

  const allPosts = await storage.getAll();
  allPosts.push({
    ...validated.data,
    id: uuidv4(),
    createdAt: new Date().toLocaleString("uk-UA"),
  });
  
  await storage.saveAll(allPosts);

  revalidatePath("/");

  return { success: true, message: "Пост опубліковано!", inputs: {} };
}

export async function deletePostAction(id: string) {
    const allPosts = await storage.getAll();

    const filteredPosts = allPosts.filter((post) => post.id !== id);

    await storage.saveAll(filteredPosts);

    revalidatePath("/");
}

export async function updatePostAction(id: string, prevState: FormState, formData: FormData): Promise<FormState> {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  const validated = PostSchema.safeParse({ title, content });

  if (!validated.success) {
    return {
      success: false,
      errors: validated.error.flatten().fieldErrors,
      inputs: { title, content }
    };
  }

  await storage.update(id, validated.data);
  
  revalidatePath("/");
  revalidatePath(`/posts/${id}`); 

  return { success: true, message: "Зміни збережено!" };
}