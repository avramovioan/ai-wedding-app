import { Tab } from "@headlessui/react";

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
  posts: POST[];
};

const tabs: TabObj[] = [
  {
    name: "test",
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
    name: "test2",
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
    <div className="w-full max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {tabs.map((tab) => (
            <Tab
              key={tab.name}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {tab.name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {tabs.map((tab, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-white p-3",
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
