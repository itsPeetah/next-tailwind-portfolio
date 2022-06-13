import type { NextPage } from "next";
import Head from "next/head";
import PageFrame from "../components/PageFrame";
import ProfileCard from "../components/ProfileCard";

const Home: NextPage = () => {
  return (
    <PageFrame title="Team">
      <div className="flex-1 flex flex-col justify-center items-center">
        hello world
      </div>
    </PageFrame>
  );
};

export default Home;
