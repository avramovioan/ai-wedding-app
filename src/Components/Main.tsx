import { Transition } from "@headlessui/react";
import { useState } from "react";
import InvitationModal from "./InvitationModal";
import Tabs from "./Tabs";
import Timer from "./Timer";

function Main() {
  const [showInvitation, setShowInvitation] = useState(true);

  return (
    <div className="flex h-full flex-col bg-gradient-to-tr from-green-300 via-green-800 to-black">
      <div className="flex flex-row justify-between">
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

      <div className="mt-10">
        <Timer weddingDate={new Date(2023, 7, 25, 17, 30)} />
      </div>

      <div className="flex justify-center">
        <Tabs />
      </div>

      <Transition
        show={showInvitation}
        appear
        enter="transition-opacity duration-1000"
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

export default Main;
