import { Transition } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import InvitationModal from "./InvitationModal";
import us from "../us5.jpg";
import invitationIcon from "../invitation-icon.svg";
import rsvp from "../rsvp.svg";

export default function InvitationLayout() {
  const [showInvitation, setShowInvitation] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowInvitation(true);
  //   }, 750);
  // }, []);

  return (
    <div className="relative z-50">
      <div className="h-96 w-full md:h-[37rem]">
        <img
          className="h-full w-full transform object-cover object-[50%_59%]"
          src={us}
        />
      </div>
      <div className="absolute top-0 flex w-full flex-row justify-between">
        <button
          className="m-2 text-xl font-bold italic text-white duration-300 hover:scale-125 md:px-3 md:text-2xl"
          onClick={() => setShowInvitation(true)}
        >
          {/* <div className="relative h-10 w-10 duration-300 hover:scale-125 md:h-14 md:w-14">
            <img className="h-full w-full " src={invitationIcon} />
          </div> */}
          <div className="rounded-xl border border-white p-2 drop-shadow-xl">
            <p>Покана</p>
          </div>
        </button>

        {/* <div className="relative m-2 h-20 w-12 cursor-pointer duration-300 hover:scale-125 md:w-20">
          <img className="h-full w-full " src={rsvp} />
        </div> */}

        <button className="text-1xl m-5 flex p-2 text-white duration-300 hover:scale-125 md:p-3 md:text-2xl">
          <p className="italic">Потвърди</p>

          <span className="relative flex h-3 w-3">
            <span className="absolute bottom-0 inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
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
