export default function EditLoading() {
  return (
    <main className="mx-auto max-w-2xl py-12 px-4 animate-pulse">
      <div className="h-9 w-64 bg-slate-200 rounded mb-8" />
      <div className="space-y-4 bg-white p-6 rounded-2xl border">
        <div className="h-4 w-20 bg-slate-200 rounded" />
        <div className="h-10 bg-slate-100 rounded-lg" />
        <div className="h-4 w-20 bg-slate-200 rounded mt-2" />
        <div className="h-40 bg-slate-100 rounded-lg" />
        <div className="flex gap-4 mt-2">
          <div className="h-10 flex-1 bg-slate-200 rounded-lg" />
          <div className="h-10 w-24 bg-slate-100 rounded-lg" />
        </div>
      </div>
    </main>
  );
}
