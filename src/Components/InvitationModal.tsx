import { ReactComponent as Invitation } from "../wedding-invitation.svg";
import useWindowSize from "./useWindowSize";
import { Link } from "react-router-dom";

function InvitationModal(props: { onClose: () => void }) {
  const { height, width } = useWindowSize();

  const spacing = 16;
  const size = Math.min(width, (height - 64) / 1.3879) - spacing;

  return (
    <div className="fixed inset-0 z-30 flex flex-col items-center justify-center">
      <div
        className="fixed inset-0 bg-black bg-opacity-60 p-4"
        onClick={props.onClose}
      ></div>
      <div
        className="z-10 m-2 flex flex-col"
        style={{
          width: size,
          height: (size + 64) * 1.3879,
        }}
      >
        <button
          onClick={props.onClose}
          className="duration-120 self-end text-3xl font-bold leading-none text-slate-300 hover:scale-125"
        >
          x
        </button>

        <Invitation />

        {/* <a
          href="../invitation.pdf"
          download={true}
          className="text-1xl font-semibold text-slate-300 duration-150  hover:scale-110 md:text-2xl"
          type="button"
        >
          Свали PDF
        </a> */}
        <Link
          className="text-lg font-semibold text-slate-300 duration-150 md:text-xl"
          to="/invitation.pdf"
          target="_blank"
          download
        >
          Свали PDF
        </Link>
      </div>
    </div>
  );
}
export default InvitationModal;
