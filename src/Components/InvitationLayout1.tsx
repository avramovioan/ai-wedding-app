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
    <div className="relative z-50 overflow-x-hidden">
      <div className="h-96 w-full md:h-[37rem]">
        <img className="h-full w-full object-cover object-[50%_60%]" src={us} />
      </div>
      <div className="absolute -top-[5rem] -left-[3rem] h-32 w-32 rounded-full bg-gradient-to-tr from-[rgb(72,116,101)] to-[#1d2e28] md:-top-[18rem] md:-left-[12rem] md:h-96 md:w-96 ">
        <div className="relative h-full w-full ">
          <button
            className="absolute bottom-[1rem] right-[0rem] text-lg italic text-white md:text-2xl"
            onClick={() => setShowInvitation(true)}
          >
            Покана
          </button>
        </div>
      </div>
      <div className="absolute -top-[5rem] -right-[3rem] h-32 w-32 rounded-full bg-gradient-to-tr from-[rgb(72,116,101)] to-[#1d2e28] md:-top-[18rem] md:-right-[12rem] md:h-96 md:w-96">
        <div className="relative h-full w-full">
          <button
            className="absolute left-[1.2rem] bottom-[1rem] text-lg italic text-white md:text-2xl"
            onClick={() => setShowInvitation(true)}
          >
            Потвърди
          </button>
        </div>
      </div>
      <div className="absolute -top-[5rem] -right-[3rem] h-28 w-28 animate-ping rounded-full bg-gradient-to-tr from-[rgb(72,116,101)] to-[#1d2e28] md:-top-[18rem] md:-left-[12rem] md:h-96 md:w-96 "></div>

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
