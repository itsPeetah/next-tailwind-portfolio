import type { NextPage } from "next";
import Head from "next/head";
import PageFrame from "../components/PageFrame";
import ProfileCard from "../components/ProfileCard";

const Home: NextPage = () => {
  return (
    <PageFrame title="Team">
      <h1 className="text-center text-4xl mt-8 mb-4 ">Team</h1>
      <div className="flex-1 w-full h-full md:w-max | flex flex-col justify-center items-center">
        <div className=" shadow-lg md:p-4 mb-12 space-y-4">
          <ProfileCard />
          <ProfileCard />
        </div>
      </div>
    </PageFrame>
  );
};

export default Home;
