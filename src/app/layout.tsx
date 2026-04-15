import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { PenTool } from "lucide-react";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <body className={`${inter.className} bg-[#f8fafc] text-slate-900`}>
        <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
          <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
            <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                <PenTool size={22} />
              </div>
              <span className="text-xl font-black tracking-tighter uppercase">Modern<span className="text-blue-600">Blog</span></span>
            </Link>
            <div className="flex gap-6 text-sm font-medium text-slate-600">
              <Link href="/" className="hover:text-blue-600 transition-colors">Головна</Link>
              <span className="cursor-not-allowed opacity-50">Про нас</span>
            </div>
          </div>
        </nav>

        {children}

        <footer className="mt-20 border-t border-slate-200 py-10 text-center text-sm text-slate-400">
          © 2026 Modern Blog Capstone. Побудовано з Next.js та ❤️
        </footer>
      </body>
    </html>
  );
}