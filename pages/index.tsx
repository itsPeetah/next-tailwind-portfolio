import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import RetroButton from "../components/RetroButton";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start font-display">
      <Head>
        <title>Next.js Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className=" w-full | flex flex-row justify-end items-center | px-2 pb-2 | border-b-2 border-black">
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
      <main className="flex flex-col md:flex-row flex-1 items-start justify-start | w-full h-full text-center border">
        <div className="flex flex-col text-left py-2 px-4 | m-4 | border-2 border-black ">
          itspeetah
          <div className="flex flex-col border-2 border-black p-4 pb-1 my-2 text-center">
            <img
              src="/img/selfie.jpg"
              className="object-cover object-top h-72"
            />
            <p className="mt-2 py-1 border-t-2 border-black text-gray-500 ">
              generic mirror selfie
            </p>
          </div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className="m-2 flex flex-col flex-1">
          <RetroButton>hello</RetroButton>
          <RetroButton>hello</RetroButton>
          <RetroButton>hello</RetroButton>
          <RetroButton>hello</RetroButton>
          <RetroButton>hello</RetroButton>
        </div>
      </main>

      <footer className="flex w-full items-center justify-center | text-xs py-4">
        <a className="mx-2 underline hover:text-blue-400">/itsPeetah</a>
        2022 • powered by pizza
      </footer>
    </div>
  );
};

export default Home;
