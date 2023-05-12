import { Tab } from "@headlessui/react";
import rings from "../rings.svg";
import wedding_location from "../wedding_location.svg";
import schedule from "../schedule.svg";

import invitationIcon from "../invitation-icon.svg";
import rsvp from "../rsvp.svg";
import { useState } from "react";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

type POST = {
  texts?: string[];
};

const invitation: { text: string[] }[] = [
  {
    text: [
      "В парка в онзи слънчев ден",
      "се срещтна ти с мен.",
      "И всичко почна като на игра,",
      "но накрая някой изгоря!",
    ],
  },
  {
    text: [
      "Ето че се влюби ти в мен,",
      "а аз отдавна вече бях в плен.",
      "Така започна нашата история",
      "изпълнена с любов и еуфория! ",
    ],
  },
  {
    text: [
      "След две години вече се реши,",
      "пък и влюбени сме до уши,",
      "та сватба ще направим",
      "и хич няма да се бавим!",
    ],
  },
  {
    text: [
      "Тъй като на Валя е вината",
      "сега тя ще е кумата!",
      "A Весо с пръстена помогна",
      "и кумстване го погна!",
    ],
  },
  {
    text: [
      "На 25.08.2023 (петък) ще е тържеството,",
      "затова си стягай облеклото!",
      "И горе в дясно потвърди,",
      "защото поканен си и ти!",
    ],
  },
  {
    text: [
      "Но недей да мислиш за подарък,",
      "просто постави го в плика малък!",
      "И на сватбата ни ти ела,",
      "че да падне чудна веселба!",
    ],
  },
];

export default function Tabs() {
  const [selectedIndex, setSelectedIndex] = useState(1);
  return (
    <div className="h-full max-w-5xl py-3 sm:px-0 md:mt-4">
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List className="flex justify-center">
          <Tab
            as="div"
            className={({ selected }) =>
              classNames(
                "mx-8 border-b-4 py-2.5 text-xl duration-500 hover:cursor-pointer focus:outline-none focus:outline-0 md:mx-12 ",
                selected ? "border-b-amber-500" : "border-b-white"
              )
            }
          >
            <div
              className={classNames(
                "mx-1 w-8 duration-300 md:mx-6 md:w-12",
                selectedIndex == 0
                  ? "-translate-y-3 scale-125"
                  : "hover:-translate-y-3 hover:scale-125"
              )}
            >
              <img className="h-full w-full" src={schedule} />
            </div>
          </Tab>
          <Tab
            as="div"
            className={({ selected }) =>
              classNames(
                "mx-8 border-b-4 py-2.5 text-xl duration-500 hover:cursor-pointer focus:outline-none focus:outline-0 md:mx-12 ",
                selected ? "border-b-amber-500" : "border-b-white"
              )
            }
          >
            <div
              className={classNames(
                "mx-1 w-8 duration-300 md:mx-6 md:w-12",
                selectedIndex == 1
                  ? "-translate-y-3 scale-125"
                  : "hover:-translate-y-3 hover:scale-125"
              )}
            >
              <img className="h-full w-full" src={rings} />
            </div>
          </Tab>
          <Tab
            as="div"
            className={({ selected }) =>
              classNames(
                "mx-8 border-b-4 py-2.5 text-xl duration-500 hover:cursor-pointer focus:outline-none focus:outline-0 md:mx-12 ",
                selected ? "border-b-amber-500" : "border-b-white"
              )
            }
          >
            <div
              className={classNames(
                "mx-1 w-8 duration-300 md:mx-6 md:w-12",
                selectedIndex == 2
                  ? "-translate-y-3 scale-125"
                  : "hover:-translate-y-3 hover:scale-125"
              )}
            >
              <img className="h-full w-full" src={wedding_location} />
            </div>
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-4 ">
          <Tab.Panel className={classNames("focus:outline-none")}></Tab.Panel>
          <Tab.Panel className={classNames("focus:outline-none")}>
            {invitation.map((textObj, idx) => (
              <div className="mt-5 w-full flex-col" key={idx}>
                {textObj.text.map((line, idx) => (
                  <div
                    key={idx}
                    className="flex w-full justify-center text-xl italic text-white md:text-2xl"
                  >
                    <p className="font-serif">{line}</p>
                  </div>
                ))}
              </div>
            ))}
          </Tab.Panel>
          <Tab.Panel className={classNames("focus:outline-none")}></Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      {/* <div className="h-24 w-24">
        <img src={invitationIcon} />
      </div>
      <div className="h-24 w-24">
        <img src={rsvp} />
      </div> */}
    </div>
  );
}

//"text-blue-100 hover:bg-white/[0.12] hover:text-white"
