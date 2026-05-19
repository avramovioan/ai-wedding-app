import { useAsync } from "@m1st1ck/useasync";
import { getQuests } from "../Services/questsService";
import { useEffect } from "react";

export default function BachelorView() {
  const [, getQuestsStatus, getQuestsResponse] = useAsync(getQuests, {
    runOnMountArgs: [],
  });

  return (
    <div className="flex h-screen flex-col items-center bg-gradient-to-tr from-[rgb(193,181,215)] to-[rgb(149,125,197)] font-serif text-gray-900">
      <p className="mb-4 text-xl font-bold">
        Ама ти верно ли ми сканира тениската?
      </p>
      {getQuestsStatus.loaded &&
        getQuestsResponse?.map((quest) => (
          <div
            key={quest.id}
            className="mb-4 w-full rounded-lg bg-white p-4 shadow-md"
          >
            <p className="text-gray-600">{quest.description}</p>
          </div>
        ))}
    </div>
  );
}
