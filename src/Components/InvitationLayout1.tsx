import { Transition } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import InvitationModal from "./InvitationModal";
import us from "../us5.jpg";
import invitationIcon from "../invitation-icon.svg";
import rsvp from "../rsvp.svg";
import flower from "../flower.svg";

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
        <img className="h-full w-full object-cover object-[50%_60%]" src={us} />
      </div>
      <div className="absolute top-0 w-full overflow-hidden">
        <div className="relative h-24 w-full md:h-40">
          <div
            className="absolute -top-[15.5rem]  -left-[7.5rem] h-72 w-72 rounded-full 
                        bg-gradient-to-tr from-[rgb(72,116,101)] to-[#1d2e28] md:-top-[25rem] 
                        md:-left-[14rem] md:h-[30rem] md:w-[30rem] "
          >
            <div className="relative h-full w-full ">
              <button
                className="absolute bottom-[0.6rem] right-[6rem] text-lg italic text-white md:bottom-[1.8rem] md:right-[8.6rem] md:text-3xl"
                onClick={() => setShowInvitation(true)}
              >
                Покана
              </button>
            </div>
          </div>
          <div
            className={`absolute -top-[15.5rem] -right-[7.5rem] z-20 h-72 w-72 rounded-full bg-gradient-to-tl from-[rgb(72,116,101)] to-[#1d2e28] md:-top-[25rem] 
            md:-right-[14rem] md:h-[30rem] md:w-[30rem]`}
          >
            <div className="relative h-full w-full ">
              <button
                className="absolute bottom-[0.6rem] left-[5.3rem] text-lg italic text-white md:bottom-[1.8rem] md:left-[7.5rem] md:text-3xl"
                onClick={() => setShowInvitation(true)}
              >
                Потвърди
              </button>
              <div>
                <img
                  src={flower}
                  className="absolute -bottom-[0.5rem] left-[8.6rem] h-4 w-4  md:-bottom-[0.5rem] md:left-[14rem] md:h-6 md:w-6"
                />
                <img
                  src={flower}
                  className="absolute bottom-[1.5rem] left-[4rem] h-4 w-4 md:bottom-[3.6rem] md:left-[4rem] md:h-6 md:w-6"
                />
                <img
                  src={flower}
                  className="absolute bottom-0 left-[6rem] h-4 w-4 md:bottom-0 md:left-[10rem] md:h-6 md:w-6"
                />
                <img
                  src={flower}
                  className="absolute bottom-[1.6rem] left-[9.6rem] h-4 w-4 md:bottom-[3.6rem] md:left-[14.5rem] md:h-6 md:w-6"
                />
              </div>
            </div>
          </div>

          <div className="absolute -top-[8rem] -right-[2rem] z-10 h-36 w-36 animate-ping  rounded-full bg-gradient-to-tl from-[rgb(72,116,101)] to-[#1d2e28] md:-right-[4rem] md:-top-[11rem] md:h-[15rem] md:w-[15rem]"></div>
        </div>
      </div>
      {/* <div className="absolute -top-[5rem] -right-[3rem] h-28 w-28 animate-ping rounded-full bg-gradient-to-tr from-[rgb(72,116,101)] to-[#1d2e28] md:-top-[18rem] md:-left-[12rem] md:h-96 md:w-96 "></div> */}

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
