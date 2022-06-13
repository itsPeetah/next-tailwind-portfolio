import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import RetroButton from "../components/RetroButton";

const Home: NextPage = () => {
  const [section, setSection] = useState(0);

  return (
    <div className="flex min-h-screen flex-col items-center justify-start font-display">
      <Head>
        <title>Next.js Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="select-none w-full | flex flex-row justify-end items-center | px-2 py-2 | border-b-2 border-black">
        <a className="mx-2">ʕ •ᴥ•ʔ</a>
        <div className="flex-grow" />
        <div className="hidden | xs:flex">
          <a className="mx-2 | border-b-2 border-transparent || hover:border-emerald-300 hover:text-emerald-300">
            Projects
          </a>
          •
          <a className="mx-2 | border-b-2 border-transparent || hover:border-amber-300 hover:text-amber-300">
            Socials
          </a>
        </div>
      </header>

      <main className="flex-1 w-full h-full | grid content-start md:content-center md:place-content-center">
        <div className="flex flex-col space-y-2 md:h-[26rem] md:space-y-0 md:space-x-2  md:flex-row p-2 md:m-2 | | md:border-2 md:border-black">
          <div id="id_card" className="p-2 | w-full md:w-80 | overflow-hidden ">
            <h1 className="mb-1 ">itspeetah</h1>
            <div className="w-full aspect-w-1 aspect-h-1 mb-1 | border-2 border-black">
              <img
                src="/img/selfie.jpg"
                className="object-cover object-top"
              ></img>
            </div>

            <div className="hidden md:block">
              <h1 className="last:mb-1 first:mt-1">
                <span className=" opacity-50">name:</span> peetah
              </h1>
              <h1 className="last:mb-1 first:mt-1">
                <span className=" opacity-50">age:</span> 23
              </h1>
            </div>
          </div>
          <div className="min-h-0 md:min-h-full border border-black" />
          <div
            id="tab_card"
            className="p-2 flex flex-col | w-full md:w-80 overflow-scroll"
          >
            <div className="flex flex-row space-x-2 mb-2">
              <RetroButton>Bio</RetroButton>
              <RetroButton>Edu</RetroButton>
              <RetroButton>Roles</RetroButton>
              <RetroButton>Contacts</RetroButton>
            </div>

            <div className="w-full h-full pt-2 | border-t-2 border-black overflow-scroll">
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
            </div>
          </div>
        </div>
      </main>

      <footer className="flex w-full items-center justify-center | border-t-2 border-black text-xs py-4">
        <a className="mx-2 underline hover:text-blue-400">/itsPeetah</a>
        2022 • powered by pizza
      </footer>
    </div>
  );
};

export default Home;
