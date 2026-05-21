import { getQuests } from "../Services/questsService";
import { cn } from "../utils/cn";
import { useQuery } from "@tanstack/react-query";

export default function BachelorView() {
  const { status, data } = useQuery({
    queryKey: ["getQuests"],
    queryFn: getQuests,
    refetchInterval: 9999,
  });

  // if (new Date().getTime() < new Date("2026-06-11T11:11:11.111Z").getTime()) {
  //   return (
  //     <main className="flex h-full items-center justify-center bg-gradient-to-tr from-[rgb(193,181,215)] to-[rgb(149,125,197)]">
  //       <h1 className="font-wedding text-4xl text-white">Има време</h1>
  //     </main>
  //   );
  // }

  return (
    <main className="flex h-screen flex-col items-center bg-gradient-to-tr from-[rgb(193,181,215)] to-[rgb(149,125,197)] p-4  font-wedding text-gray-900">
      <p className="mb-4 text-xl font-bold">
        Ама ти верно ли ми сканира тениската?
      </p>
      {status === "error" && (
        <div className="text-red-600">Ебало си е мамата</div>
      )}
      {status === "success" &&
        data.map((quest) => (
          <div
            key={quest.id}
            className={cn(
              "mb-4 flex w-full max-w-5xl rounded-lg bg-white p-4 shadow-md",
              {
                "bg-white/50 line-through": quest.completed,
              },
            )}
          >
            <p
              className={cn("flex-1 text-gray-600", {
                "opacity-50": quest.completed,
              })}
            >
              {quest.description}
            </p>

            {quest.completed && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-badge-check-icon lucide-badge-check text-green-600"
              >
                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            )}
          </div>
        ))}
    </main>
  );
}
