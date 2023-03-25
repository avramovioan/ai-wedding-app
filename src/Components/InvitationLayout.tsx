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
          className="h-full w-full transform object-cover object-[50%-60%]"
          src={us}
        />
      </div>
      <div className="absolute top-0 flex w-full flex-row justify-between">
        <button
          className="h-full text-xl font-bold italic text-white md:text-2xl"
          onClick={() => setShowInvitation(true)}
        >
          <div className="rotate-180">
            {/* <svg
              height="100"
              width="100"
              className="duration-2 absolute animate-ping cursor-pointer opacity-75"
              onClick={() => setShowInvitation(true)}
            >
              <circle cx="100" cy="100" r="100" fill="#487465"></circle>
            </svg> */}
            <svg height="100" width="100">
              <defs>
                <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop
                    offset="0%"
                    stopColor="rgb(72,116,101)"
                    stopOpacity="1"
                  />
                  <stop offset="100%" stopColor="#1d2e28" stopOpacity="1" />
                </linearGradient>
              </defs>
              <circle cx="100" cy="100" r="100" fill="url(#grad3)"></circle>
            </svg>
          </div>
          <div className="absolute top-[25px] left-0 rotate-[-45deg]">
            <p>Покана</p>
          </div>
        </button>

        {/* <div className="relative m-2 h-20 w-12 cursor-pointer duration-300 hover:scale-125 md:w-20">
          <img className="h-full w-full " src={rsvp} />
        </div> */}

        <button
          className="h-full text-xl font-bold italic text-white md:text-2xl"
          onClick={() => setShowInvitation(true)}
        >
          <div className="-rotate-90">
            {/* <svg
              height="100"
              width="100"
              className="duration-2 absolute animate-ping cursor-pointer opacity-75"
              onClick={() => setShowInvitation(true)}
            >
              <circle cx="100" cy="100" r="100" fill="#487465"></circle>
            </svg> */}
            <svg height="100" width="100">
              <defs>
                <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop
                    offset="0%"
                    stopColor="rgb(72,116,101)"
                    stopOpacity="1"
                  />
                  <stop offset="100%" stopColor="#1d2e28" stopOpacity="1" />
                </linearGradient>
              </defs>
              <circle cx="100" cy="100" r="100" fill="url(#grad3)"></circle>
            </svg>
          </div>
          <div className="absolute top-[35px] right-[-10px] rotate-[45deg]">
            <p>Потвърди</p>
          </div>
        </button>

        {/* <button className="m-5 flex rounded-lg border border-white p-2 text-xl font-bold text-white duration-300 hover:scale-125 md:p-3 md:text-2xl">
          <p className="italic">Потвърди</p>

          <span className="relative flex h-3 w-3">
            <span className="absolute bottom-0 inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
          </span>
        </button> */}
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
