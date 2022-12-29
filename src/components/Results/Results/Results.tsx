import { FC } from "react";
import { useSelector } from "react-redux";
import { useGetBeersByNameQuery } from "../../../states/results.state";
import { RootState } from "../../../states/_global";
import { BeerList } from "../../Beer";
import { SkeletonTile } from "../../Skeletons";

export const gridClass = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4";

export const Results: FC = () => {
  const searchTerm = useSelector((state: RootState) => state.search.value);

  const { error, isLoading, data } = useGetBeersByNameQuery(
    searchTerm as string,
    {
      skip: searchTerm === undefined,
    }
  );

  if (error) {
    return <p>{error as string}</p>;
  }

  if (isLoading) {
    return (
      <div className={`${gridClass} items-center`}>
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <SkeletonTile key={index} />
          ))}
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <p className="text-center mt-2">
        No results found for term, &quot;{searchTerm}&quot;.
      </p>
    );
  }

  return <BeerList beers={data} />;
};
