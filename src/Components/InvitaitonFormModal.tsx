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
    <div className="fixed inset-0 z-20 flex flex-col items-center justify-center bg-black bg-opacity-60 p-4">
      <div
        className="flex flex-col"
        style={{
          width: size,
          height: (size + 64) * 1.3879,
        }}
      >
        <button
          onClick={onClose}
          className="duration-120 self-end text-3xl font-bold leading-none text-slate-300 hover:scale-125"
        >
          x
        </button>
        <div className="h-full w-full overflow-y-scroll">
          <InvitationForm />
        </div>
      </div>
    </div>
  );
}
