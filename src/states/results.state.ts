import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Beer } from "../types/beer.types";

// Define a service using a base URL and expected endpoints
export const beerApi = createApi({
  reducerPath: "beerApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.punkapi.com/v2/beers" }),
  endpoints: (builder) => ({
    getBeersByName: builder.query<Beer[], string>({
      query: (beer) => `?beer_name=${beer.replace(" ", "_")}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBeersByNameQuery } = beerApi;
