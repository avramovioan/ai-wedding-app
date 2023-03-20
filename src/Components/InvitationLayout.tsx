import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import InvitationModal from "./InvitationModal";
import Photo from "./Photo";
import us from "../random-bg.avif";

export default function InvitationLayout() {
  const [showInvitation, setShowInvitation] = useState(true);

  return (
    <div className="relative">
      <div className="h-64 w-full bg-gradient-to-tr from-green-700 to-purple-700 ">
        <img
          className="h-full w-full object-cover mix-blend-overlay"
          src={us}
        />
      </div>
      <div className="absolute top-0 flex w-full flex-row justify-between">
        <button className="text-1xl m-2 flex p-2 text-white md:p-3 md:text-2xl">
          <p>RSVP</p>
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
          </span>
        </button>

        <button
          className="m-2 p-2 text-sm font-bold text-white md:p-3 md:text-2xl"
          onClick={() => setShowInvitation(true)}
        >
          Покажи поканата
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
