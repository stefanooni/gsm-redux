import { startCase } from "lodash";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Bookmarker } from "../../components/Beer";
import { useGetBeersByNameQuery } from "../../states/results.state";
import { RootState } from "../../states/_global";

const Beer: NextPage = () => {
  const router = useRouter();
  const { id, name } = router.query;
  const { data, isLoading, error } = useGetBeersByNameQuery(name as string, {
    skip: name === undefined,
  });
  const bookmarkedBeers = useSelector(
    (state: RootState) => state.beers.favourited
  );

  const isBookmarked = useMemo(
    () => !!bookmarkedBeers.find((beer) => beer.id.toString() === id),
    [id, bookmarkedBeers]
  );

  const beer = useMemo(() => {
    if (!data) {
      return null;
    }
    return data.find((beer) => beer.id.toString() === id);
  }, [data, id]);

  const allStats = useMemo(() => {
    let table;
    for (const attr in beer) {
      console.log(startCase(attr));
    }

    return "All stats";
  }, [beer]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!beer) {
    return <p>Beer not found!</p>;
  }

  if (error) {
    return <p>Error loading beer.</p>;
  }

  return (
    <>
      <Head>
        <title>GSM - {beer.name}</title>
        <meta name="description" content={beer.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="container px-5 md:px-0 max-w-[960px] relative my-5 mx-auto">
        <Link
          className="text-blue-500 hover:text-blue-400"
          href={{ pathname: "/", query: { s: name } }}
        >
          Back
        </Link>
        <span className="flex absolute top-0 right-0 flex-nowrap">
          <span className="block mr-2 text-sm">
            {isBookmarked ? "One of your favourites" : "Favourite this beer"}
          </span>
          <Bookmarker beer={beer} absolute={false} />
        </span>
        <div className="flex flex-col text-center md:text-left md:flex-row md:items-start pt-10">
          <div className="mr-10 h-[100px] md:h-auto">
            <Image
              src={beer.image_url}
              alt={beer.name}
              width={250}
              height={250}
              className="max-h-full w-auto mx-auto"
            />
          </div>
          <div>
            <h1 className="text-3xl mt-6">{beer.name}</h1>
            <p className="mb-2">
              {beer.tagline} <span className="float-right">({beer.abv}%)</span>
            </p>
            <p>
              <strong className="font-semibold">First brewed:</strong>{" "}
              {beer.first_brewed}
            </p>
            <p className="mt-6">{beer.description}</p>
            {beer.food_pairing.length > 0 && (
              <>
                <h2 className="text-xl font-semibold mt-5 md:mt-10">
                  Food pairing
                </h2>
                <ul className="list-disc list-inside mt-2">
                  {beer.food_pairing.map((food) => (
                    <li key={food}>{food}</li>
                  ))}
                </ul>
              </>
            )}
            <div>
              <h2 className="text-xl font-semibold mt-5 mb-2">All stats</h2>
              <ul className="p-3 bg-slate-100 rounded-md">
                {Object.keys(beer).map((attr) => (
                  <li key={attr} className="text-sm mb-2">
                    <h3 className="font-semibold">{startCase(attr)}</h3>
                    <p>
                      {typeof (beer as any)[attr] === "string"
                        ? (beer as any)[attr]
                        : JSON.stringify((beer as any)[attr])}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Beer;
