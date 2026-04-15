import { storage } from "@/lib/storage";
import { notFound } from "next/navigation";
import EditPostForm from "@/components/EditPostForm";

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await storage.getById(id);

  if (!post) notFound();

  return (
    <main className="mx-auto max-w-2xl py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Редагувати публікацію</h1>
      <EditPostForm post={post} />
    </main>
  );
}