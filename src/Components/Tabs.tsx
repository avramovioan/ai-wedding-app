import { Tab } from "@headlessui/react";
import { ReactComponent as Rings } from "../rings.svg";
import wedding_location from "../wedding_location.svg";
import schedule from "../schedule.svg";

import invitationIcon from "../invitation-icon.svg";
import rsvp from "../rsvp.svg";
import { useState } from "react";
import React from "react";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

type POST = {
  texts?: string[];
};
 
const invitation: { text: string[] }[] = [
  {
    text: [
      "В една зимна нощ срещнахме се в бара,",
      "а сега ще се видим на олтара!",
    ],
  },
  {
    text: [
      "По планини, хижи и морета вървяхме двама",
      "и душите си вплетохме без драма!"
    ],
  },
  {
    text: [
      "Ето дойде и този час,",
      "да си кажем \"Да\" и да излетим завчас!",
    ],
  },
  {
    text: [
      "С Алекс и Анито под ръчичка,",
      "зове ни нашата пътечка едничка!",
    ],
  },
  {
    text: [
      "Любовта да отпразнуваме всички на едно",
      "и да създадем нашето \"заедно\"!",
    ],
  },
  {
    text: [
      "За това поканен си ти на нашия купон,",
      "защото главен виновник е Купидон!",
    ],
  },
  {
    text: [
      "Усмивки и сълзи стягай ти,",
      "защото на сватба ще се вихриш ти!",
    ],
  },
];

// const invitation: { text: string[] }[] = [
//   {
//     text: [
//       "На рожден ден сред смях и светлина",
//       "съдбата тихо свърза две сърца.",
//       "Една искра, един случаен миг —",
//       "началото на нашия свят красив.",
//     ],
//   },
//   {
//     text: [
//       "Любов растеше с всеки общ ден,",
//       "в усмивки, спомени и топъл плен.",
//       "На 21.06.2026 казваме „да“ — ръка в ръка,",
//       "с мечти, надежда и една съдба.",
//     ],
//   },
//   {
//     text: [
//       "До нас ще бъде Анна — обич, чест,,",
//       "най-близка, вярна кума без тест.",
//       "А до младоженеца — брат любим,",
//       "Алекс — кум, опора и път незаменим.",
//     ],
//   },
//   {
//     text: [
//       "С любов ви каним да сте част от нас",
//       "в деня, когато „ние“ става „завинаги“ за нас.",
//     ],
//   },
// ];

const scheduleData = [
  //{ hour: "11:00", event: "Започва великото обличане" },
  //{ hour: "13:00", event: "Крадеца на булки" },
  { hour: "14:30", event: "Граждански брак (общ. Тракия)" },
  {
    hour: "15:30",
    event: 'Църковен брак (храм "Свето Преображение Господне")',
  },
  { hour: "18:00", event: "Welcome drink" },
  { hour: "19:00", event: "Начало на купона" },
];

const nearbyHotels = [
  { hotel: "Hotel Sani", hotelWebsite: "http://hotelsani.com/" },
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
                selected ? "border-[rgb(82,40,133)]" : "border-b-white"
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
                selected ? "border-[rgb(82,40,133)]" : "border-b-white"
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
              <Rings className="h-full w-full text-purple-400" />
              {/* <img className="h-full w-full" src={Rings} /> */}
            </div>
          </Tab>
          <Tab
            as="div"
            className={({ selected }) =>
              classNames(
                "mx-8 border-b-4 py-2.5 text-xl duration-500 hover:cursor-pointer focus:outline-none focus:outline-0 md:mx-12 ",
                selected ? "border-[rgb(82,40,133)]" : "border-b-white"
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
          <Tab.Panel className={classNames("focus:outline-none")}>
            <div className="mx-5 mt-5 flex flex-col items-center font-wedding text-base text-white md:text-2xl">
              <div className="w-full max-w-md">
                <div className="grid grid-cols-3 gap-x-10">
                  {scheduleData.map((item, index) => (
                    <React.Fragment key={index}>
                      <div className="col-span-1 flex justify-end py-3">
                        {item.hour} ч.
                      </div>
                      <div
                        className={classNames(
                          "col-span-2 col-start-2 items-end",
                          index === 1 ? "py-1.2" : "py-3"
                        )}
                      >
                        {item.event}
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </Tab.Panel>
          {/* <Tab.Panel className={classNames("focus:outline-none")}>
            <div className="flex w-full justify-center p-5 text-base italic text-white md:text-2xl">
              <p className="whitespace-nowrap font-wedding">
                Благодарим Ви, че бяхте част от нашия специялен ден!
              </p>
            </div>
          </Tab.Panel> */}
          <Tab.Panel className={classNames("mt-8 focus:outline-none")}>
            {invitation.map((textObj, idx) => (
              <div className="mt-5 w-full flex-col" key={idx}>
                {textObj.text.map((line, idx) => (
                  <div
                    key={idx}
                    className="flex w-full justify-center text-base italic text-white md:text-2xl"
                  >
                    <p className="whitespace-nowrap font-wedding">{line}</p>
                  </div>
                ))}
              </div>
            ))}
          </Tab.Panel>
          <Tab.Panel className={classNames("focus:outline-none")}>
            <div className="mx-5 mt-5 flex flex-col items-center font-wedding text-base text-white md:text-2xl">
              <div className="w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1524.948103454217!2d24.85436558535646!3d42.0244764314916!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14acd9b5c6b1bd6b%3A0x9669f9fa5226d54a!2sRiva%20Restaurant!5e0!3m2!1sen!2sbg!4v1769294221516!5m2!1sen!2sbg"
                  className="h-full w-full flex-1"
                  loading="lazy"
                  allowFullScreen={true}
                ></iframe>
                {/* <div className="mt-5 w-full flex-1 font-wedding text-xs text-white md:text-lg">
                  *Таксита от Пловдив и Асеновград изпълняват поръчки до
                  сватбената зала
                </div> */}
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
