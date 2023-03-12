import React from "react";
import PDFViewer from "./PDFViewer";

function InvitationModal(props:any){

    return (
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto">
              {/*content*/}
              <div className="border-0 rounded-lg relative flex flex-col w-full outline-none focus:outline-none">
                {/*header*/}
                <div className="bg-transparent flex justify-between mb-3">
                  <button
                    onClick={() => props.onClose(false)}
                    className="text-2xl text-slate-300 ml-auto float-right leading-none font-bold outline-none focus:outline-none hover:scale-150 duration-150">
                        x
                  </button>
                </div>
                {/*body*/}
                <div className="flex-wrap w-[350px] md:w-[600px]">
                        <PDFViewer></PDFViewer>
                    <div className="mt-2">
                        <a
                        href='../invitation.pdf' download={true}
                        className="text-1xl md:text-2xl text-slate-300 font-semibold bg-transparent outline-none focus:outline-none ease-linear hover:scale-110 duration-150"
                        type="button"
                        >
                            Свали PDF
                        </a>
                    </div>
                </div>
              </div>
            </div>
          </div>
    );
}
export default InvitationModal;