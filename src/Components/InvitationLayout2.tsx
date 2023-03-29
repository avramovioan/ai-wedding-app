import { Transition } from "@headlessui/react";
import { useState } from "react";
import InvitationModal from "./InvitationModal";
import us from "../us5.jpg";
import rose from "../rose.svg";
import InvitationForm from "./InvitationForm";
import InvitationFormModal from "./InvitaitonFormModal";

export default function InvitationLayout() {
  const [showInvitation, setShowInvitation] = useState(false);
  const [showInvitationForm, setShowInvitationForm] = useState(false);

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
          <div className="absolute h-36 w-36 rounded-full ">
            <img
              src={rose}
              className="h-full w-full animate-[spin_15s_linear_infinite]"
            />
            <button
              className="absolute bottom-[3.5rem] right-[1.5rem] text-lg italic text-[#1d2e28]  md:text-3xl"
              onClick={() => setShowInvitation(true)}
            >
              Покана
            </button>
          </div>

          <div
            className={`absolute -top-[15.5rem] -right-[7.5rem] h-72 w-72 rounded-full bg-gradient-to-tl from-[rgb(72,116,101)] to-[#1d2e28] md:-top-[25rem] 
            md:-right-[14rem] md:h-[30rem] md:w-[30rem]`}
          >
            <div className="relative h-full w-full ">
              <button
                className="absolute bottom-[0.6rem] left-[5.3rem] z-20 text-lg italic text-white md:bottom-[1.8rem] md:left-[7.5rem] md:text-3xl"
                onClick={() => setShowInvitationForm(true)}
              >
                Потвърди
              </button>
            </div>
          </div>

          <div className="absolute -top-[8rem] -right-[2rem] z-10 h-36 w-36 animate-ping  rounded-full bg-gradient-to-tl from-[rgb(72,116,101)] to-[#1d2e28] md:-right-[4rem] md:-top-[11rem] md:h-[15rem] md:w-[15rem]"></div>
        </div>
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

{
  /* <div className="absolute -top-[8rem] -left-[8rem] h-72 w-72 rounded-full ">
<img
  src={rose}
  className="h-full w-full animate-[spin_15s_linear_infinite]"
/>
<button
  className="absolute bottom-[5rem] right-[3rem] text-lg italic text-[#1d2e28]  md:text-3xl"
  onClick={() => setShowInvitation(true)}
>
  Покана
</button>
</div> */
}
