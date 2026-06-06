import { useState } from "react";
import { getQuests } from "../Services/questsService";
import { cn } from "../utils/cn";
import { useQuery } from "@tanstack/react-query";
import arrow from "../assets/arrow.svg";
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
    <main className="flex min-h-screen flex-col items-center bg-[rgb(20,20,20)] px-4 py-8">
      <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
        {/* ── Header ── */}
        <div className="flex animate-fade-in items-start justify-between pt-2">
          <div>
            <div className="mb-1 flex items-center gap-2">
              <div className="h-1 w-6 rounded-full bg-purple-600" />
              <span className="text-xs font-bold uppercase tracking-widest text-purple-500">
                ергенско
              </span>
            </div>
            <p className="text-3xl font-extrabold leading-tight text-purple-600">
              АБЕ ТИ
            </p>
            <p className="text-3xl font-extrabold leading-tight text-white">
              ВЕРНО ЛИ
            </p>
            <p className="text-3xl font-extrabold leading-tight text-white">
              МИ СКАНИРА
            </p>
            <p className="text-3xl font-extrabold leading-tight text-purple-600">
              ТЕНИСКАТА?
            </p>
          </div>
          <span className="animate-emoji-sway pt-8 text-8xl">🤯</span>
        </div>

        {/* ── Subtitle + arrow inline ── */}
        <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <p className="text-xl font-extrabold text-white">
            Това е <span className="text-purple-400">ергенското</span> на
          </p>
          <div className="flex items-center gap-3">
            <p className="text-5xl  font-extrabold text-purple-600">ПЕШО</p>
            <img
              src={arrow}
              alt="стрелка"
              className="h-10 w-10 animate-arrow-wobble pt-6"
            />
          </div>
        </div>

        {/* ── Photo (right) + catchphrase (left) ── */}
        <div
          className="flex animate-slide-up items-start gap-4"
          style={{ animationDelay: "0.45s" }}
        >
          {/* Text on the LEFT */}
          <div className="flex-1 pt-1">
            <p className="text-lg font-extrabold leading-snug text-white">
              Можеш ли да <span className="text-purple-400">повярваш</span>, че{" "}
              <span className="text-purple-400">тоз</span> ще се жени?!
            </p>
            <p className="mt-3 text-base font-semibold leading-snug text-white/80">
              ... Ами и ние не можем, ама ето..
            </p>
          </div>

          {/* Photo on the RIGHT — tilted right */}
          <div className="flex h-44 w-36 shrink-0 rotate-3 items-center justify-center overflow-hidden rounded-xl border-4 border-purple-600 bg-[rgb(35,15,55)] shadow-lg shadow-purple-900/50">
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

        {/* ── Allergy line — header style, no card ── */}
        <div className="animate-slide-up" style={{ animationDelay: "0.6s" }}>
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
          style={{ animationDelay: "0.7s" }}
        >
          <div className="h-px flex-1 bg-purple-600/40" />
          <div className="h-2 w-2 rounded-full bg-purple-600" />
          <div className="h-px flex-1 bg-purple-600/40" />
        </div>

        {/* ── Intro to quest list ── */}
        <div className="animate-slide-up" style={{ animationDelay: "0.75s" }}>
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
          <div className="flex flex-col gap-3 pb-12">
            {sorted.map((quest, i) => (
              <div
                key={quest.id}
                className={cn(
                  "flex w-full animate-slide-up items-center gap-3 rounded-xl p-4 shadow-md",
                  quest.completed
                    ? "border border-white/10 bg-white/5"
                    : "border-l-4 border-purple-500 bg-white",
                )}
                style={{ animationDelay: `${0.85 + i * 0.07}s` }}
              >
                <div
                  className={cn("h-2.5 w-2.5 shrink-0 rounded-full", {
                    "bg-purple-500": !quest.completed,
                    "bg-green-500": quest.completed,
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

