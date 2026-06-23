"use client";

import dynamic from "next/dynamic";

const KarteClient = dynamic(() => import("./KarteClient"), { ssr: false });

export default function Home() {
  return (
    <main className="h-screen w-full">
      <KarteClient />
    </main>
  );
}
