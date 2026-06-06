export default function PostLoading() {
  return (
    <main className="max-w-2xl mx-auto py-16 px-4 animate-pulse">
      <div className="h-5 w-28 bg-slate-200 rounded mb-8" />

      <div className="space-y-4 mb-6">
        <div className="h-10 bg-slate-200 rounded w-3/4" />
        <div className="h-10 bg-slate-200 rounded w-1/2" />
      </div>

      <div className="flex gap-6 mb-10 pb-6 border-b border-slate-200">
        <div className="h-4 w-32 bg-slate-200 rounded" />
        <div className="h-4 w-24 bg-slate-200 rounded" />
      </div>

      <div className="space-y-3">
        <div className="h-4 bg-slate-200 rounded w-full" />
        <div className="h-4 bg-slate-200 rounded w-full" />
        <div className="h-4 bg-slate-200 rounded w-5/6" />
        <div className="h-4 bg-slate-200 rounded w-full" />
        <div className="h-4 bg-slate-200 rounded w-4/5" />
      </div>
    </main>
  );
}
