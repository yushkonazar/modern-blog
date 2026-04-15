"use client";

import { useActionState } from "react";
import { Send, AlertCircle, CheckCircle2 } from "lucide-react";
import { createPostAction, FormState } from "@/actions/postActions";

const initialState: FormState = {
  message: null,
  errors: {},
  inputs: { title: "", content: "" }
};

export default function CreatePostForm() {
  const [state, formAction, isPending] = useActionState(createPostAction, initialState);

  return (
    <section className="bg-white p-6 rounded-xl border shadow-sm mb-12">
      <h2 className="text-xl font-bold mb-4 text-slate-800 text-center">Створити запис</h2>
      
      <form action={formAction} className="flex flex-col gap-4">
        {state.success && (
          <div className="flex items-center gap-2 p-3 bg-green-50 text-green-700 rounded-lg border border-green-200 animate-in fade-in">
            <CheckCircle2 size={18} /> {state.message}
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Заголовок</label>
          <input
            name="title"
            type="text"
            defaultValue={state.inputs?.title}
            className={`w-full px-4 py-2 border rounded-lg outline-none transition-all ${
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
          <label className="block text-sm font-medium text-slate-700 mb-1">Контент</label>
          <textarea
            name="content"
            rows={4}
            defaultValue={state.inputs?.content}
            className={`w-full px-4 py-2 border rounded-lg outline-none transition-all resize-none ${
              state.errors?.content ? "border-red-500 bg-red-50" : "focus:ring-2 focus:ring-blue-500"
            }`}
          />
          {state.errors?.content && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle size={12} /> {state.errors.content[0]}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="flex items-center justify-center gap-2 bg-blue-600 disabled:bg-blue-300 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition-all active:scale-95"
        >
          {isPending ? "Публікуємо..." : <><Send size={18} /> Опублікувати</>}
        </button>
      </form>
    </section>
  );
}