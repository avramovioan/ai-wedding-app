import InvitationForm from "./InvitationForm";
import useWindowSize from "./useWindowSize";

export default function InvitationFormModal({
  onClose,
}: {
  onClose: () => void;
}) {
  const { height, width } = useWindowSize();

  const spacing = 16;
  const size = Math.min(width, (height - 64) / 1.3879) - spacing;
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 p-4">
      <div className="flex flex-col">
        <button
          onClick={onClose}
          className="duration-120 self-end text-3xl font-bold leading-none text-slate-300 hover:scale-125"
        >
          x
        </button>

        <InvitationForm />
      </div>
    </div>
  );
}
