import InvitationLayout from "./InvitationLayout";
import Tabs from "./Tabs";
import Timer from "./Timer";

function Main() {
  return (
    <div className="flex h-full flex-col overflow-auto bg-gradient-to-tr from-green-300 via-green-800 to-black ">
      <InvitationLayout />
      <div className="mt-4">
        <fieldset className="border-t border-slate-200">
          <legend className="mx-auto italic text-white">
            <Timer weddingDate={new Date(2023, 7, 25, 17, 30)} />
          </legend>
        </fieldset>
      </div>

      <div className="flex justify-center">
        <Tabs />
      </div>
    </div>
  );
}

export default Main;
