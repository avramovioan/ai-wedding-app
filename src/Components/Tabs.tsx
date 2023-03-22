import { Tab } from "@headlessui/react";
import rings from "../rings.svg";
import wedding_location from "../wedding_location.svg";
import schedule from "../schedule.svg";

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
  },
];

export default function Tabs() {
  return (
    <div className="w-full max-w-5xl py-6 sm:px-0">
      <Tab.Group defaultIndex={1}>
        <Tab.List className="flex justify-between">
          {tabs.map((tab) => (
            <Tab
              key={tab.name}
              as="div"
              className={({ selected }) =>
                classNames(
                  "text-1xl mx-8 rounded-lg py-2.5 hover:cursor-pointer md:mx-16",
                  selected
                    ? "scale-125 border-b-2 border-b-amber-500 focus:outline-none"
                    : "duration-500 hover:scale-125 hover:border-b-2 hover:border-b-amber-500"
                )
              }
            >
              <div className=" w-11 md:w-16">
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
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
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
    </div>
  );
}

//"text-blue-100 hover:bg-white/[0.12] hover:text-white"
