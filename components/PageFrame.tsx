import Head from "next/head";

export default function PageFrame(props: { children?: any; title: string }) {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-start font-display text-black " /*dark:text-white*/
    >
      <Head>
        <title>{props.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="select-none w-full | flex flex-col sm:flex-row justify-end items-center | px-2 py-2 | border-b-2 border-current">
        <a className="mx-2">ʕ •ᴥ•ʔ</a>
        <div className="flex-grow" />
        <div className="">
          <a
            href="/"
            className="mx-2 | border-b-2 border-transparent || hover:border-rose-500 hover:text-rose-500"
          >
            Home
          </a>
          •
          <a className="mx-2 | border-b-2 border-transparent || hover:border-emerald-500 hover:text-emerald-500">
            Games
          </a>
          •
          <a
            href="/team"
            className="mx-2 | border-b-2 border-transparent || hover:border-amber-500 hover:text-amber-500"
          >
            Team
          </a>
          •
          <a className="mx-2 | border-b-2 border-transparent || hover:border-cyan-500 hover:text-cyan-500">
            Press
          </a>
        </div>
      </header>

      <main
        className="flex-1 w-full h-full md:w-max | py-2 flex flex-col" /*md:grid md:grid-cols-2 place-content-start*/
      >
        {props.children}
      </main>

      <footer className="flex w-full items-center justify-center | border-t-2 border-current text-xs py-4">
        <a className="mx-2 underline hover:text-blue-400">/itsPeetah</a>
        2022 • powered by pizza
      </footer>
    </div>
  );
}
