import type { NextPage } from "next";
import Head from "next/head";
import PageFrame from "../components/PageFrame";
import ProfileCard from "../components/ProfileCard";

const Home: NextPage = () => {
  return (
    <PageFrame title="Our Games">
      <h1 className="text-center text-4xl mt-8 mb-4 ">Our Games</h1>
      <div className="border-2 border-red-500 flex-1 w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-start p-2 ">
        <div className="border-2 border-black m-2 p-2 h-52"></div>
        <div className="border-2 border-black m-2 p-2 h-52"></div>
        <div className="border-2 border-black m-2 p-2 h-52"></div>
        <div className="border-2 border-black m-2 p-2 h-52"></div>
      </div>
    </PageFrame>
  );
};

export default Home;
