import { useState } from "react";
import { ExternalLinkIcon, LinkIcon } from "@heroicons/react/solid";
export default function ProfileCard() {
  const [tab, setTab] = useState(0);
  const [showEmail, setShowEmail] = useState(false);
  const email = "pietro.g.moroni@gmail.com";
  return (
    <div
      id="floater"
      className="flex flex-col space-y-2 md:h-[26rem] md:space-y-0 md:space-x-2  md:flex-row p-2 md:m-2 | | md:border-2 md:border-current"
    >
      <div id="id_card" className="p-2 | w-full md:w-80 | overflow-hidden ">
        <h1 className="mb-1 ">itspeetah - founder</h1>
        <div className="w-full aspect-w-1 aspect-h-1 mb-1 | border-2 border-current">
          <img src="/img/selfie.jpg" className="object-cover object-top"></img>
        </div>

        <div className="hidden md:block">
          {/* <h1 className="last:mb-1 first:mt-1">
            <span className=" opacity-50">name:</span> peetah
          </h1>
          <h1 className="last:mb-1 first:mt-1">
            <span className=" opacity-50">age:</span> 23
          </h1>
           */}
          <p>Hello world, this is supposed to be a quote by me...</p>
        </div>
      </div>
      <div className="min-h-0 md:min-h-full border border-current" />
      <div
        id="tab_card"
        className="p-2 flex flex-col | w-full md:w-80 overflow-scroll"
      >
        <div className="flex flex-row space-x-2 mb-2">
          <TabButton selected={true} onClick={() => setTab(0)}>
            Bio
          </TabButton>
          <TabButton onClick={() => setTab(1)}>Projects</TabButton>
          <TabButton onClick={() => setTab(2)}>Contacts</TabButton>
        </div>

        <div className="w-full h-full pt-2 | border-t-2 border-current overflow-scroll">
          {tab === 0 && (
            <>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </>
          )}
          {tab === 2 && (
            <div>
              <p>You can find me on:</p>
              <a
                className=" text-pink-600 hover:underline"
                href="https://instagram.com/peetah.gyros"
              >
                <span>instagram/peetah.gyros</span>
                <span>
                  <ExternalLinkIcon className="ml-1 inline h-4" />
                </span>
              </a>
              <a
                className=" text-sky-600 hover:underline"
                href="https://twitter.com/peetahfromitaly"
              >
                <span>twitter/peetahfromitaly</span>
                <span>
                  <ExternalLinkIcon className="ml-1 inline h-4" />
                </span>
              </a>

              <p className="mt-4">
                Email me (business inquiries only){" "}
                <a className="hover:underline" href={`mailto:${email}`}>
                  (click here)
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function TabButton(props: {
  children: string;
  onClick?: () => void;
  selected?: boolean;
}) {
  return (
    <a
      onClick={props.onClick}
      className="text-center select-none flex-grow px-2 py-1 relative | border-2 border-current | before:absolute before:bg-gray-300 before:top-1 before:left-1 before:w-full before:h-full before:-z-10 before:hover:bg-emerald-300 before:active:bg-amber-300 "
    >
      {props.children}
    </a>
  );
}
