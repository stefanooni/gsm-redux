import { Unsubscribe } from "@reduxjs/toolkit";
import { isEqual } from "lodash";
import { FC, useCallback, useEffect, useRef } from "react";
import { useDispatch, useStore } from "react-redux";
import { favouriteBeer } from "../../../states/beers.state";
import { RootState } from "../../../states/_global";
import { Beer } from "../../../types/beer.types";

export const FavouritesSubscriber: FC = () => {
  const dispatch = useDispatch();
  const store = useStore();
  const previousValue = useRef<Beer[]>([]);
  const setDefaultFavourites = useRef(false);

  const handleChange = useCallback(() => {
    if (typeof window === "undefined") {
      return;
    }
    const prevValue = previousValue.current;
    const { favourited } = (store.getState() as RootState).beers;
    if (!isEqual(prevValue, favourited)) {
      window.sessionStorage.setItem("favourites", JSON.stringify(favourited));
    }
    previousValue.current = favourited;
  }, [store]);

  useEffect(() => {
    if (typeof window !== "undefined" && !setDefaultFavourites.current) {
      const favouritedStored = window.sessionStorage.getItem("favourites");
      if (favouritedStored) {
        const favouritedBeers = JSON.parse(favouritedStored) as Beer[];
        favouritedBeers.forEach((beer) => {
          dispatch(favouriteBeer(beer));
        });
      }
      setDefaultFavourites.current = true;
    }
  }, [dispatch]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let unsubscribe: Unsubscribe | undefined;
      if (store) {
        unsubscribe = store.subscribe(handleChange);
      }

      return () => {
        if (unsubscribe) {
          unsubscribe();
        }
      };
    }
  }, [store, handleChange]);

  return null;
};
