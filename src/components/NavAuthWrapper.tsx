"use client";

import dynamic from "next/dynamic";

const NavAuth = dynamic(() => import("@/components/NavAuth"), {
  ssr: false,
  loading: () => <div className="w-20 h-8" />,
});

export default function NavAuthWrapper() {
  return <NavAuth />;
}
