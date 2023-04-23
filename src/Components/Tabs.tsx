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
  id: number;
  title: string;
  date: string;
  commentCount: number;
  shareCount: number;
};

type TabObj = {
  name: string;
  icon: string;
  posts: POST[];
  index: number;
};

const tabs: TabObj[] = [
  {
    name: "test",
    icon: schedule,
    posts: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
    index: 0,
  },
  {
    name: "test2",
    icon: rings,
    posts: [
      // {
      //   id: 1,
      //   title: 'Ask Me Anything: 10 answers to your questions about coffee',
      //   date: '2d ago',
      //   commentCount: 9,
      //   shareCount: 5,
      // },
      // {
      //   id: 2,
      //   title: "The worst advice we've ever heard about coffee",
      //   date: '4d ago',
      //   commentCount: 1,
      //   shareCount: 2,
      // },
    ],
    index: 1,
  },
  {
    name: "test3",
    icon: wedding_location,
    posts: [
      // {
      //   id: 1,
      //   title: "Ask Me Anything: 10 answers to your questions about coffee",
      //   date: "2d ago",
      //   commentCount: 9,
      //   shareCount: 5,
      // },
      // {
      //   id: 2,
      //   title: "The worst advice we've ever heard about coffee",
      //   date: "4d ago",
      //   commentCount: 1,
      //   shareCount: 2,
      // },
    ],
    index: 2,
  },
];
export default function Tabs() {
  const [selectedIndex, setSelectedIndex] = useState(1);
  return (
    <div className="w-full max-w-5xl py-3 sm:px-0 md:mt-4">
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List className="flex justify-center">
          {tabs.map((tab) => (
            <Tab
              key={tab.name}
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
                  tab.index === selectedIndex
                    ? "-translate-y-3 scale-125"
                    : "hover:-translate-y-3 hover:scale-125"
                )}
              >
                <img className="h-full w-full" src={tab.icon} />
              </div>
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {tabs.map((tab, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl p-3",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none"
              )}
            >
              <ul>
                {tab.posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-gray-100"
                  >
                    <h3 className="text-sm font-medium leading-5">
                      {post.title}
                    </h3>

                    <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                      <li>{post.date}</li>
                      <li>&middot;</li>
                      <li>{post.commentCount} comments</li>
                      <li>&middot;</li>
                      <li>{post.shareCount} shares</li>
                    </ul>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
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
