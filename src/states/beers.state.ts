import { createSlice } from "@reduxjs/toolkit";
import { Beer } from "../types/beer.types";

const initialState: { favourited: Beer[] } = {
  favourited: [],
};

export const beersSlice = createSlice({
  name: "searchTerm",
  initialState,
  reducers: {
    favouriteBeer: (state, { payload }) => {
      state.favourited.push(payload);
    },
    unFavouriteBeer: (state, { payload }) => {
      state.favourited = state.favourited.filter(
        (beer: Beer) => beer.id !== payload.id
      );
    },
  },
});

export const { favouriteBeer, unFavouriteBeer } = beersSlice.actions;

export default beersSlice.reducer;
