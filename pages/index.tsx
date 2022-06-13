import type { NextPage } from "next";
import Head from "next/head";
import ProfileCard from "../components/ProfileCard";

const Home: NextPage = () => {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-start font-display text-black " /*dark:text-white*/
    >
      <Head>
        <title>Team</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="select-none w-full | flex flex-row justify-end items-center | px-2 py-2 | border-b-2 border-current">
        <a className="mx-2">ʕ •ᴥ•ʔ</a>
        <div className="flex-grow" />
        <div className="hidden | xs:flex">
          <a className="mx-2 | border-b-2 border-transparent || hover:border-emerald-500 hover:text-emerald-500">
            Games
          </a>
          •
          <a className="mx-2 | border-b-2 border-transparent || hover:border-amber-500 hover:text-amber-500">
            About
          </a>
          •
          <a className="mx-2 | border-b-2 border-transparent || hover:border-pink-500 hover:text-pink-500">
            Press
          </a>
        </div>
      </header>

      <main
        className="flex-1 w-full h-full md:w-max | py-2 flex flex-col" /*md:grid md:grid-cols-2 place-content-start*/
      >
        <ProfileCard />
      </main>

      <footer className="flex w-full items-center justify-center | border-t-2 border-current text-xs py-4">
        <a className="mx-2 underline hover:text-blue-400">/itsPeetah</a>
        2022 • powered by pizza
      </footer>
    </div>
  );
};

export default Home;
