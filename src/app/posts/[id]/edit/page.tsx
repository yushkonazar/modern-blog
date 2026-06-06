import type { Metadata } from "next";
import { auth } from "@clerk/nextjs/server";
import { storage } from "@/lib/storage";
import { notFound } from "next/navigation";
import EditPostForm from "@/components/EditPostForm";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { userId } = await auth();

  const post = await storage.getById(id);

  if (!post || (post.authorId !== undefined && post.authorId !== userId)) notFound();

  return (
    <main className="mx-auto max-w-2xl py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Редагувати публікацію</h1>
      <EditPostForm post={post} />
    </main>
  );
}
