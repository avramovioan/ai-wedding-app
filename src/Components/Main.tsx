import { Tab, Transition } from "@headlessui/react";
import React, { useState } from "react";
import InvitationModal from "./InvitationModal";
import Timer from "./Timer";
import Tabs from "./Tabs";

function Main(){
    const [showInvitation, setShowInvitation] = useState(true);

    return (
        <div 
        //style={{ backgroundImage: `url(${background})`}}
        className="bg-gradient-to-tr from-green-300 via-green-800 to-black">
            <div className="flex">
                <div className="flex-1">
                    <button className="m-2 md:p-3 p-2 text-white flex md:text-2xl text-1xl">
                        <p>RSVP</p>
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                    </button>
                </div>
                <div className="flex-1">
                    <button className="m-2 text-white font-bold text-white md:p-3 p-2 md:text-2xl text-sm float-right" onClick={() => setShowInvitation(true)}>
                        Покажи поканата
                    </button>
                </div>

            </div>

            <Transition
            show={showInvitation}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
                    <InvitationModal onClose={setShowInvitation}></InvitationModal>
            </Transition>
            {/* <Tabs/> */}
           
            <div className="mt-10 md:text-5xl text-1xl p-2 ">
                <Timer weddingDate = {new Date(2023, 7, 25, 17, 30)} />
            </div>
        </div>
    )
}

export default Main;