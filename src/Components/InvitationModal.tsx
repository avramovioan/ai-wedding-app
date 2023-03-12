import React from "react";
import PDFViewer from "./PDFViewer";

function InvitationModal(props: { onClose: (v: boolean) => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
      <div className="relative w-auto">
        {/*content*/}
        <div className="relative flex w-full flex-col rounded-lg border-0 outline-none focus:outline-none">
          {/*header*/}
          <div className="mb-3 flex justify-between bg-transparent">
            <button
              onClick={() => props.onClose(false)}
              className="ml-auto text-2xl font-bold leading-none text-slate-300 outline-none duration-150 hover:scale-150 focus:outline-none"
            >
              x
            </button>
          </div>
          {/*body*/}
          <div className="w-[350px] flex-wrap md:w-[600px]">
            <PDFViewer></PDFViewer>
            <div className="mt-2">
              <a
                href="../invitation.pdf"
                download={true}
                className="text-1xl bg-transparent font-semibold text-slate-300 outline-none duration-150 ease-linear hover:scale-110 focus:outline-none md:text-2xl"
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
