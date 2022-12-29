import { Unsubscribe } from "@reduxjs/toolkit";
import _, { isEqual } from "lodash";
import { FC, useCallback, useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { favouriteBeer, unFavouriteBeer } from "../../../states/beers.state";
import { RootState } from "../../../states/_global";
import { Beer } from "../../../types/beer.types";

export const Bookmarker: FC<{ beer: Beer; absolute?: boolean }> = ({
  beer,
  absolute = true,
}) => {
  const dispatch = useDispatch();

  const bookmarkedBeers = useSelector(
    (state: RootState) => state.beers.favourited
  );

  const isBookmarked = useMemo(
    () => !!bookmarkedBeers.find((beerCmp) => beerCmp.id === beer.id),
    [bookmarkedBeers, beer]
  );

  const handleBookmarking = () => {
    if (!isBookmarked) {
      dispatch(favouriteBeer(beer));
    } else {
      dispatch(unFavouriteBeer(beer));
    }
  };

  const className = useMemo(() => {
    const common = `flex items-center justify-center w-[24px] h-[24px] rounded-full border-2 border-cyan-500 transition-all ${
      absolute ? "absolute" : "static"
    } right-5 top-5 cursor-pointer`;
    let extra = "";

    if (isBookmarked) {
      extra = "bg-cyan-500 text-white";
    } else {
      extra = "text-cyan-500";
    }

    return [extra, common].join(" ").trim();
  }, [isBookmarked, absolute]);

  return (
    <>
      <input
        type="checkbox"
        id={`input-${beer.id}`}
        checked={isBookmarked}
        onChange={handleBookmarking}
        className="hidden"
      />
      <label
        htmlFor={`input-${beer.id}`}
        className={className}
        title={isBookmarked ? "Unfavourite" : "Favourite"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          width={13}
          height={13}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
      </label>
    </>
  );
};
