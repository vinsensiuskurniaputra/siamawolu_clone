import type { NextPage } from "next";
import Head from "next/head";
import { OnBoarding } from "../components";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Siamawolu</title>
      </Head>
      {/* onBoarding */}
      <div>
        <OnBoarding />
      </div>
    </div>
  );
};

export default Home;
