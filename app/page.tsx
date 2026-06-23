"use client";

import dynamic from "next/dynamic";

const KarteClient = dynamic(() => import("./KarteClient"), { ssr: false });

export default function Home() {
  return (
    <main className="relative h-screen w-full">
      {/* Schneeflocken */}
      <div className="pointer-events-none absolute inset-0 z-[500] overflow-hidden">
        <style>{`@keyframes fall { to { transform: translateY(110vh) } }`}</style>
        {Array.from({ length: 20 }).map((_, k) => (
          <span
            key={k}
            className="absolute -top-6 text-white"
            style={{
              left: `${(k * 47) % 100}%`,
              animation: `fall ${7 + (k % 5)}s linear ${k * 0.4}s infinite`,
              fontSize: 18,
            }}
          >
            ❄
          </span>
        ))}
      </div>

      {/* Titel-Badge */}
      <div className="absolute left-1/2 top-4 z-[600] -translate-x-1/2 rounded-full bg-brand px-6 py-2 font-bold text-white shadow-lg text-lg">
        ❄️ E&amp;P-Skigebiete
      </div>

      <KarteClient />
    </main>
  );
}
