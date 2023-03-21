import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import InvitationModal from "./InvitationModal";
import us from "../us5.jpg";

export default function InvitationLayout() {
  const [showInvitation, setShowInvitation] = useState(true);

  return (
    <div className="relative">
      <div className="h-96 w-full md:h-[37rem]">
        <img
          className="h-full w-full transform object-cover object-[50%_59%]"
          src={us}
        />
      </div>
      <div className="absolute top-0 flex w-full flex-row justify-between">
        <button
          className="m-2 p-2 text-sm font-bold italic text-white md:p-3 md:text-2xl"
          onClick={() => setShowInvitation(true)}
        >
          Покажи поканата
        </button>

        <button className="text-1xl m-2 flex p-2 text-white md:p-3 md:text-2xl">
          <p className="italic">RSVP</p>
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
          </span>
        </button>
      </div>
      <Transition
        show={showInvitation}
        appear
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <InvitationModal
          onClose={() => {
            setShowInvitation(false);
          }}
        ></InvitationModal>
      </Transition>
    </div>
  );
}

//mix-blend-overlay
//bg-gradient-to-tr from-green-700 to-purple-700
