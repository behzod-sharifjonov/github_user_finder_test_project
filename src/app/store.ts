import { configureStore } from "@reduxjs/toolkit";
import { githubApi } from "../features/github/githubApi";
import githubReducer from "../features/github/githubSlice";

export const store = configureStore({
  reducer: {
    github: githubReducer,
    [githubApi.reducerPath]: githubApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
