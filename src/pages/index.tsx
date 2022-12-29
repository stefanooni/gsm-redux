import { NextPage } from "next";
import Head from "next/head";
import { ResultsWrapper } from "../components/Results/ResultsWrapper/ResultsWrapper";
import { SearchBar } from "../components/Search";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>GSM - Punk API Example</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <SearchBar />
        <ResultsWrapper />
      </main>
    </>
  );
};

export default Home;
