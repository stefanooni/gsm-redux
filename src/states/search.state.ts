import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  value: string | undefined;
  preDebounceValue: string | undefined;
} = {
  value: "",
  preDebounceValue: "",
};

export const searchSlice = createSlice({
  name: "searchTerm",
  initialState,
  reducers: {
    setDebouncedTerm: (state, { payload }) => {
      state.value = payload;
    },
    setTerm: (state, { payload }) => {
      state.preDebounceValue = payload;
    },
  },
});

export const { setTerm, setDebouncedTerm } = searchSlice.actions;

export default searchSlice.reducer;
