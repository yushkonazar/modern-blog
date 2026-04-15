// src/app/posts/[id]/page.tsx
import { storage } from "@/lib/storage";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";

interface PostPageProps {
  params: Promise<{ id: string }>;
}

export default async function PostDetailPage({ params }: PostPageProps) {
  const { id } = await params;
  const post = await storage.getById(id);

  if (!post) {
    notFound();
  }

  return (
    <main className="max-w-2xl mx-auto py-16 px-4">
      <Link 
        href="/" 
        className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-8 group"
      >
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        Назад до списку
      </Link>

      <article>
        <h1 className="text-4xl font-black text-slate-900 mb-6 leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-6 text-sm text-slate-500 mb-10 pb-6 border-b">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            {post.createdAt}
          </div>
          <div className="flex items-center gap-1">
            <User size={14} />
            {post.author || "Анонім"}
          </div>
        </div>

        <div className="text-lg text-slate-700 leading-relaxed whitespace-pre-wrap">
          {post.content}
        </div>
      </article>
    </main>
  );
}