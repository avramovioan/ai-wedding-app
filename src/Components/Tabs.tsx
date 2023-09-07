import { Tab } from "@headlessui/react";
import rings from "../rings.svg";
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
      "В парка в онзи слънчев ден",
      "се срещна ти с мен.",
      "И всичко почна като на игра,",
      "но накрая някой изгоря!",
    ],
  },
  {
    text: [
      "Ето че се влюби ти в мен,",
      "а и аз отдавна бях в плен.",
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
      "Тъй като на Валя е вината,",
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

const scheduleData = [
  //{ hour: "11:00", event: "Започва великото обличане" },
  //{ hour: "13:00", event: "Крадеца на булки" },
  { hour: "14:00", event: "Фотосесия" },
  { hour: "17:20", event: "Изнесен ритуал в Сватбена зала Роял " },
  { hour: "18:00", event: "Welcome drink" },
  { hour: "19:30", event: "Начало на купона" },
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
          {/* <Tab.Panel className={classNames("focus:outline-none")}>
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
                <p className="mt-5 text-xs md:text-lg">
                  *Основният цвят на сватбата ще бъде тъмно зелено, затова ви
                  молим да се насочите към други цветове за вашите тоалети
                </p>
              </div>
            </div>
          </Tab.Panel> */}
          <Tab.Panel className={classNames("focus:outline-none")}>
            <div className="flex w-full justify-center p-5 text-base italic text-white md:text-2xl">
              <p className="whitespace-nowrap font-wedding">
                Благодарим Ви, че бяхте част от нашия специялен ден!
              </p>
            </div>
          </Tab.Panel>
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
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d740.97576564259!2d24.8500706!3d42.0238119!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14acd91b7a001859%3A0x5749d65054a8361a!2z0JHQsNC70L3QsCDQl9Cw0LvQsCBSb3lhbA!5e0!3m2!1sen!2sbg!4v1684249927287!5m2!1sen!2sbg"
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
{
  /* <div className="h-36 w-full flex-row items-center justify-center align-middle">
<iframe
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d740.97576564259!2d24.8500706!3d42.0238119!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14acd91b7a001859%3A0x5749d65054a8361a!2z0JHQsNC70L3QsCDQl9Cw0LvQsCBSb3lhbA!5e0!3m2!1sen!2sbg!4v1684249927287!5m2!1sen!2sbg"
  className="h-full w-full"
  loading="lazy"
  allowFullScreen={true}
></iframe>
<div className="mt-5 font-wedding text-xs text-white md:text-lg">
  *Таксита от Пловдив и Асеновград изпълняват поръчки до
  сватбената зала
</div>
</div> */
}
