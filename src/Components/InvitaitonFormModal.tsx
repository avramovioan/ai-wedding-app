import InvitationForm from "./InvitationForm";
import useWindowSize from "./useWindowSize";

export default function InvitationFormModal({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-30 flex flex-col items-center ">
      <div className="fixed inset-0 bg-black bg-opacity-60" onClick={onClose} />
      <div className="z-10 flex max-h-full flex-col px-2 py-4 pb-8">
        <button
          onClick={onClose}
          className="duration-120 self-end font-wedding text-3xl font-bold leading-none text-slate-300 hover:scale-125"
        >
          x
        </button>
        <div className="overflow-y-scroll shadow-[0_0_30px_1px_black]">
          <InvitationForm closeAction={onClose} />
        </div>
      </div>
    </div>
  );
}
