import InvitationLayout from "./InvitationLayout";
import Photo from "./Photo";
import Tabs from "./Tabs";
import Timer from "./Timer";

function Main() {
  return (
    <div className="flex h-full flex-col bg-gradient-to-tr from-green-300 via-green-800 to-black">
      <InvitationLayout />
      <div className="mt-10">
        <Timer weddingDate={new Date(2023, 7, 25, 17, 30)} />
      </div>

      <div className="flex justify-center">
        <Tabs />
      </div>
    </div>
  );
}

export default Main;
