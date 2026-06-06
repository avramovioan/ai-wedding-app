import { useState } from "react";
import { getQuests } from "../Services/questsService";
import { cn } from "../utils/cn";
import { useQuery } from "@tanstack/react-query";
import pesho from "../assets/pesho.jpg";

export default function BachelorView() {
  const [imgError, setImgError] = useState(false);

  const { status, data } = useQuery({
    queryKey: ["getQuests"],
    queryFn: getQuests,
    refetchInterval: 9999,
  });

  const sorted =
    status === "success"
      ? [...data].sort((a, b) => Number(a.completed) - Number(b.completed))
      : [];

  // if (new Date().getTime() < new Date("2026-06-11T11:11:11.111Z").getTime()) {
  //   return (
  //     <main className="flex h-full items-center justify-center bg-gradient-to-tr from-[rgb(193,181,215)] to-[rgb(149,125,197)]">
  //       <h1 className="font-wedding text-4xl text-white">Има време</h1>
  //     </main>
  //   );
  // }

  return (
    <main className="flex min-h-screen flex-col items-center bg-[rgb(20,20,20)] px-4 py-8 pb-16">
      <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
        {/* ── Header — centered, full width ── */}
        <div className="animate-fade-in pt-2 text-center">
          <p className="text-4xl font-extrabold leading-tight text-purple-600">
            АБЕ ТИ
          </p>
          <p className="text-4xl font-extrabold leading-tight text-white">
            ВЕРНО ЛИ
          </p>
          <p className="text-4xl font-extrabold leading-tight text-white">
            МИ СКАНИРА
          </p>
          <p className="text-4xl font-extrabold leading-tight text-purple-600">
            ТЕНИСКАТА?
          </p>
        </div>

        {/* ── Photo (right) + subtitle + catchphrase (left) ── */}
        <div
          className="flex animate-slide-up items-start gap-4"
          style={{ animationDelay: "0.2s" }}
        >
          {/* Left column */}
          <div className="flex flex-1 flex-col gap-3 pt-1">
            {/* Subtitle */}
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-white">
                това е ергенското на
              </p>
              <p className="text-2xl font-extrabold text-purple-600">ПЕШО</p>
            </div>

            {/* Catchphrase */}
            <div>
              <p className="text-base font-extrabold leading-snug text-white">
                Можеш ли да <span className="text-purple-400">повярваш</span>,
                че <span className="text-purple-400">тоз</span> ще се жени?!
              </p>
              <p className="mt-2 text-sm font-semibold leading-snug text-white/80">
                ... Ами и ние не можем, ама ето..
              </p>
            </div>
          </div>

          {/* Photo on the RIGHT — tilted right, pushed down */}
          <div className="mt-6 flex h-44 w-36 shrink-0 rotate-3 items-center justify-center overflow-hidden rounded-xl border-4 border-purple-600 bg-[rgb(35,15,55)] shadow-[0_0_18px_4px_rgba(147,51,234,0.4)]">
            {!imgError ? (
              <img
                src={pesho}
                alt="Пешо"
                className="h-full w-full object-cover"
                onError={() => setImgError(true)}
              />
            ) : (
              <span className="select-none text-6xl">🤵</span>
            )}
          </div>
        </div>

        {/* ── Allergy line ── */}
        <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <p className="text-xl font-extrabold leading-snug text-white">
            Човекът има{" "}
            <span className="text-purple-400">алергия към алкохола</span> и{" "}
            <span className="text-purple-400">свободата</span> му беше
            едничкото, което му оставаше...
          </p>
        </div>

        {/* ── Divider ── */}
        <div
          className="flex animate-fade-in items-center gap-3"
          style={{ animationDelay: "0.55s" }}
        >
          <div className="h-px flex-1 bg-purple-600/40" />
          <div className="h-2 w-2 rounded-full bg-purple-600" />
          <div className="h-px flex-1 bg-purple-600/40" />
        </div>

        {/* ── Intro to quest list ── */}
        <div className="animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <p className="text-xl font-extrabold leading-snug text-white">
            Тази вечер му е за <span className="text-purple-400">последно</span>
            .. 🌙
          </p>
          <p className="mt-2 text-base font-semibold leading-snug text-white/80">
            Не го гледай, че прилича на{" "}
            <span className="text-purple-400">плишиво дърво</span>, ако си
            достатъчно смела заповядай да го:
          </p>
        </div>

        {/* ── Quest list ── */}
        {status === "error" && (
          <div className="font-bold text-red-500">Ебало си е мамата</div>
        )}

        {status === "success" && (
          <div className="flex flex-col gap-3 pb-4">
            {sorted.map((quest, i) => (
              <div
                key={quest.id}
                className={cn(
                  "flex w-full animate-slide-up items-center gap-2 rounded-lg px-3 py-2.5 shadow-sm",
                  quest.completed
                    ? "border border-white/10 bg-white/5"
                    : "border-l-4 border-purple-500 bg-white",
                )}
                style={{ animationDelay: `${0.7 + i * 0.07}s` }}
              >
                <div
                  className={cn("h-2 w-2 shrink-0 rounded-full", {
                    "bg-purple-900": quest.completed,
                    "animate-pulse bg-green-500 shadow-[0_0_8px_3px_rgba(34,197,94,0.8)]":
                      !quest.completed,
                  })}
                />
                <p
                  className={cn("flex-1 text-sm font-medium leading-snug", {
                    "text-gray-800": !quest.completed,
                    "text-white/30 line-through": quest.completed,
                  })}
                >
                  {quest.description}
                </p>
                {quest.completed && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0 text-green-500"
                  >
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

