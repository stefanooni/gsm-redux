import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useSelector } from "react-redux";
import { BeerList } from "../components/Beer";
import { RootState } from "../states/_global";

const Favourites: NextPage = () => {
  const { favourited } = useSelector((state: RootState) => state.beers);

  return (
    <>
      <Head>
        <title>GSM - Favourites</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="container px-5 md:px-0 max-w-[960px] relative my-5 mx-auto">
        <Link className="text-blue-500 hover:text-blue-400" href="/">
          Back
        </Link>
        <h1 className="text-2xl text-center my-6">Your favourite beers</h1>
        {favourited.length > 0 ? (
          <BeerList beers={favourited} />
        ) : (
          <div className="text-center">
            <p className="mb-5 text-orange-600">Nothing favourited</p>
            <Link
              href="/"
              className="bg-blue-500 hover:bg-blue-400 text-white py-3 px-5 rounded-md shadow-md"
            >
              Search for some beers
            </Link>
          </div>
        )}
      </main>
    </>
  );
};

export default Favourites;
