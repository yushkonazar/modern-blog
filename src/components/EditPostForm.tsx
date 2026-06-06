"use client";

import { useActionState } from "react";
import { updatePostAction } from "@/actions/postActions";
import { Post } from "@/models/Post";
import Link from "next/link";
import { AlertCircle } from "lucide-react";

export default function EditPostForm({ post }: { post: Post }) {
  const updateActionWithId = updatePostAction.bind(null, post.id!);
  const [state, formAction, isPending] = useActionState(updateActionWithId, { success: false });

  return (
    <form action={formAction} className="space-y-4 bg-white p-6 rounded-2xl border">
      {!state.success && state.message && (
        <div className="flex items-center gap-2 p-3 bg-red-50 text-red-700 rounded-lg border border-red-200">
          <AlertCircle size={16} /> {state.message}
        </div>
      )}

      <div>
        <label className="block text-sm font-semibold mb-1">Заголовок</label>
        <input
          name="title"
          defaultValue={post.title}
          className={`w-full p-2 border rounded-lg outline-none transition-all ${
            state.errors?.title ? "border-red-500 bg-red-50" : "focus:ring-2 focus:ring-blue-500"
          }`}
        />
        {state.errors?.title && (
          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle size={12} /> {state.errors.title[0]}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-semibold mb-1">Контент</label>
        <textarea
          name="content"
          defaultValue={post.content}
          rows={6}
          className={`w-full p-2 border rounded-lg outline-none transition-all ${
            state.errors?.content ? "border-red-500 bg-red-50" : "focus:ring-2 focus:ring-blue-500"
          }`}
        />
        {state.errors?.content && (
          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle size={12} /> {state.errors.content[0]}
          </p>
        )}
      </div>

      <div className="flex gap-4">
        <button
          disabled={isPending}
          className="flex-1 bg-blue-600 disabled:bg-blue-300 text-white py-2 rounded-lg font-bold hover:bg-blue-700 transition-all"
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
