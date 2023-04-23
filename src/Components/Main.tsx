import InvitationLayout from "./InvitationLayout2";
import Tabs from "./Tabs";
import Timer from "./Timer";

function Main() {
  return (
    <div className="flex h-full flex-col overflow-auto ">
      <InvitationLayout />
      <div className="relative h-full bg-gradient-to-tr from-[rgb(72,116,101)] to-[#1d2e28] ">
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
    </div>
  );
}

export default Main;

//bg-[#1d2e28]
//[rgb(56,61,60)]

{
  /* <img
          className="invisible absolute -left-14 -top-20 h-[40rem] w-[40rem] rotate-[90deg] stroke-slate-200 opacity-10  md:visible"
          src={branch}
          alt="somethig"
        />
        <img
          className="invisible absolute -right-14 -top-20 h-[40rem] w-[40rem] -rotate-[90deg] stroke-slate-200 opacity-10 md:visible"
          src={branch}
          alt="somethig"
        /> */
}
