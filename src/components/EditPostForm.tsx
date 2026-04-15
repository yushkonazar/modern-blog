// src/components/EditPostForm.tsx
"use client";

import { useActionState } from "react";
import { updatePostAction } from "@/actions/postActions";
import { Post } from "@/models/Post";
import Link from "next/link";

export default function EditPostForm({ post }: { post: Post }) {
  const updateActionWithId = updatePostAction.bind(null, post.id!);
  const [state, formAction, isPending] = useActionState(updateActionWithId, { success: false });

  return (
    <form action={formAction} className="space-y-4 bg-white p-6 rounded-2xl border">
      {state.success && <p className="text-green-600 font-medium">✅ {state.message}</p>}
      
      <div>
        <label className="block text-sm font-semibold mb-1">Заголовок</label>
        <input
          name="title"
          defaultValue={post.title}
          className="w-full p-2 border rounded-lg"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-1">Контент</label>
        <textarea
          name="content"
          defaultValue={post.content}
          rows={6}
          className="w-full p-2 border rounded-lg"
        />
      </div>

      <div className="flex gap-4">
        <button
          disabled={isPending}
          className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-700 transition-all"
        >
          {isPending ? "Зберігаємо..." : "Зберегти зміни"}
        </button>
        <Link href="/" className="flex items-center justify-center px-4 border rounded-lg hover:bg-gray-50">
          Скасувати
        </Link>
      </div>
    </form>
  );
}