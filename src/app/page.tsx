import { auth } from "@clerk/nextjs/server";
import { storage } from "@/lib/storage";
import PostCard from "@/components/PostCard";
import CreatePostForm from "@/components/CreatePostForm";
import { PenTool } from "lucide-react";

export default async function HomePage() {
  const { userId } = await auth();
  const posts = await storage.getAll();
  const reversedPosts = [...posts].reverse(); // Копіюємо і розгортаємо

  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <header className="mb-16 space-y-4 text-center">
        <h1 className="text-5xl font-black tracking-tighter text-slate-900 sm:text-6xl">
          Думки, що <span className="text-blue-600 italic underline decoration-blue-200">надихають</span>
        </h1>
        <p className="mx-auto max-w-xl text-lg text-slate-500">
          Твій персональний простір для ідей. Створюй, читай та керуй своїм контентом у реальному часі.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        {/* Форма - Sidebar на десктопі */}
        <aside className="lg:col-span-1">
          <div className="sticky top-28">
            {userId ? (
              <CreatePostForm />
            ) : (
              <div className="bg-white p-6 rounded-xl border shadow-sm mb-12 text-center space-y-3">
                <p className="text-slate-600 text-sm">Увійдіть, щоб публікувати записи</p>
              </div>
            )}
          </div>
        </aside>

        {/* Список постів - Main content */}
        <section className="lg:col-span-2 space-y-8">
          <div className="flex items-baseline justify-between border-b border-slate-200 pb-4">
            <h2 className="text-xl font-bold text-slate-800">Стрічка новин</h2>
            <span className="text-sm font-medium text-slate-400">{posts.length} публікацій</span>
          </div>

          {posts.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-slate-200 py-20 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 text-slate-300">
                <PenTool size={32} />
              </div>
              <h3 className="text-lg font-bold text-slate-800">Тут поки порожньо</h3>
              <p className="text-slate-500">
                {userId ? "Будь першим, хто напише щось круте!" : "Записів ще немає"}
              </p>
            </div>
          ) : (
            reversedPosts.map((post) => (
              <PostCard key={post.id} post={post} currentUserId={userId ?? null} />
            ))
          )}
        </section>
      </div>
    </main>
  );
}