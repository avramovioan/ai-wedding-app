import React from "react";
import us from "../random-bg.avif";

export default function Photo() {
  return (
    <div className="h-2/5 w-full bg-gradient-to-tr from-green-700 to-purple-700 ">
      <img className="h-full w-full object-cover mix-blend-overlay " src={us} />
    </div>
  );
}
