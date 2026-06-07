import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { ClerkProvider } from "@clerk/nextjs";
import NavAuthWrapper from "@/components/NavAuthWrapper";

export const metadata: Metadata = {
  metadataBase: new URL("https://modern-blog-5k8a.onrender.com"),
  title: "Modern Blog — Next.js 15 + TypeScript",
  description: "Full-stack blog built with Next.js 15, TypeScript, Server Actions and Tailwind.",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Modern Blog",
    description: "Full-stack blog: Next.js 15, TypeScript, Server Actions.",
    url: "https://modern-blog-5k8a.onrender.com/",
    images: [{ url: "", width: 1200, height: 630 }],
    type: "website",
  },
};

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="uk">
        <body className={`${inter.className} bg-[#f8fafc] text-slate-900`}>
          <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
            <div className="flex h-16 items-center justify-between px-6">
              <Link href="/" className="flex items-center transition-opacity hover:opacity-80">
                <Image src="/icon.svg" alt="Modern Blog logo" width={40} height={40} />
                <span className="text-xl font-black tracking-tighter uppercase">Modern<span className="text-blue-600">Blog</span></span>
              </Link>

              <NavAuthWrapper />
            </div>
          </nav>

          {children}

          <footer className="mt-20 border-t border-slate-200 py-10 text-center text-sm text-slate-400">
            © 2026 Modern Blog. Built by <a href="https://github.com/yushkonazar">Nazar Yushko</a> with Next.js and ❤️
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}