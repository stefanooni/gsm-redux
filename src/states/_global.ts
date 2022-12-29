import search from "./search.state";
import beers from "./beers.state";
import { beerApi } from "./results.state";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    search,
    beers,
    [beerApi.reducerPath]: beerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(beerApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
