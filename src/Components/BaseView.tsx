import React, { useState } from "react";
import Timer from "./Timer";

export default function BaseView() {
  const [showInvitation, setShowInvitation] = useState(false);
  return (
    <div className="flex min-h-screen w-full items-center justify-center overflow-auto bg-gradient-to-r from-[rgb(56,61,60)] via-[rgb(46,61,56)] to-[#1d2e28]  ">
      <div className="flex-col justify-center font-wedding text-2xl text-white md:text-3xl">
        <div className="m-5 flex justify-center p-4">
          <span>Вече измиаха</span>
        </div>
        <div className="m-5 p-4">
          <Timer weddingDate={new Date(2023, 7, 25, 17, 30)} />
        </div>
        <div className="m-5 flex justify-center p-4 font-wedding">
          <span>от нашата сватба!</span>
        </div>
      </div>
    </div>
  );
}
