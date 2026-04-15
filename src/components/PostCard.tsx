import Link from "next/link";
import { Trash2, Clock, ArrowRight, Pencil } from "lucide-react";
import { deletePostAction } from "@/actions/postActions";
import { Post } from "@/models/Post";

export default function PostCard({ post }: { post: Post }) {
    const deleteWithId = deletePostAction.bind(null, post.id!);

    return (
        <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10">
            <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-blue-600">
                            <span className="rounded-full bg-blue-50 px-2 py-0.5">Нове</span>
                            <span className="text-slate-400">• {post.createdAt?.split(',')[0]}</span>
                        </div>
                        <Link href={`/posts/${post.id}`}>
                            <h3 className="text-2xl font-bold leading-tight text-slate-800 group-hover:text-blue-600 transition-colors">
                                {post.title}
                            </h3>
                        </Link>
                    </div>

                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-blue-600">
                    <Link href={`/posts/${post.id}/edit`} className="p-2 text-slate-300 hover:text-blue-500">
                        <Pencil size={18} />
                    </Link>

                    <form action={deleteWithId}>
                        <button className="rounded-full p-2 text-slate-300 transition-colors hover:bg-red-50 hover:text-red-500">
                            <Trash2 size={18} />
                        </button>
                    </form>
                    </div>
                </div>

                <p className="line-clamp-2 text-slate-600 leading-relaxed">
                    {post.content}
                </p>

                <div className="flex items-center justify-between border-t border-slate-50 pt-4">
                    <div className="flex items-center gap-4 text-xs text-slate-400 font-medium">
                        <div className="flex items-center gap-1.5">
                            <Clock size={14} /> 3 хв читання
                        </div>
                    </div>
                    <Link href={`/posts/${post.id}`} className="flex items-center gap-1 text-sm font-bold text-blue-600">
                        Читати <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </div>
    );
}