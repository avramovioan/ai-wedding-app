import { Transition } from "@headlessui/react";
import { useState } from "react";
import InvitationModal from "./InvitationModal";
import us from "../us.jpg";
import InvitationFormModal from "./InvitaitonFormModal";

export default function InvitationLayout() {
  const [showInvitation, setShowInvitation] = useState(false); //TODO: change to true
  const [showInvitationForm, setShowInvitationForm] = useState(false);

  return (
    <div className="relative z-50">
      <div className="h-96 w-full md:h-[37rem]">
        <img className="h-full w-full object-cover object-[50%_60%]" src={us} />
      </div>
      <div className="absolute top-0 h-24 w-full overflow-hidden md:h-40">
        <button
          className="absolute -top-[15.5rem] -left-[6.5rem] h-72 w-72 cursor-pointer rounded-full
                        bg-gradient-to-tr from-[rgb(72,116,101)] to-[#1d2e28] md:-top-[25rem] 
                        md:-left-[14rem] md:h-[30rem] md:w-[30rem]"
          onClick={() => setShowInvitation(true)}
        >
          <span className="absolute bottom-[0.6rem] right-[6rem] font-wedding text-lg italic text-white md:bottom-[1.8rem] md:right-[8.6rem] md:text-3xl">
            Покана
          </span>
        </button>
        {/* <div className="absolute -top-[8rem] -right-[2rem] h-36 w-36 animate-ping  rounded-full bg-gradient-to-tl from-[rgb(72,116,101)] to-[#1d2e28] md:-right-[4rem] md:-top-[11rem] md:h-[15rem] md:w-[15rem]"></div>
        <button
          className="absolute -top-[15.5rem] -right-[6.5rem] h-72 w-72 rounded-full bg-gradient-to-tl from-[rgb(72,116,101)] to-[#1d2e28] md:-top-[25rem] 
            md:-right-[14rem] md:h-[30rem] md:w-[30rem]"
          onClick={() => setShowInvitationForm(true)}
        >
          <span className="absolute bottom-[0.6rem] left-[5.3rem] font-wedding text-lg italic text-white md:bottom-[1.8rem] md:left-[7.5rem] md:text-3xl">
            Потвърди
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

      <Transition
        show={showInvitationForm}
        appear
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <InvitationFormModal
          onClose={() => {
            setShowInvitationForm(false);
          }}
        ></InvitationFormModal>
      </Transition>
    </div>
  );
}
