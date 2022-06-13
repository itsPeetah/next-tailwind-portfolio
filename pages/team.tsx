import type { NextPage } from "next";
import Head from "next/head";
import PageFrame from "../components/PageFrame";
import ProfileCard from "../components/ProfileCard";

const Home: NextPage = () => {
  return (
    <PageFrame title="Team">
      <ProfileCard />
    </PageFrame>
  );
};

export default Home;
