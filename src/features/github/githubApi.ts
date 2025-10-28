import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Repo, User } from "../../types/github";

export const githubApi = createApi({
  reducerPath: "githubApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com/users/" }),
  endpoints: (builder) => ({
    getUser: builder.query<User, string>({
      query: (username) => `${username}`,
    }),
    getRepos: builder.query<Repo[], string>({
      query: (username) => `${username}/repos`,
    }),
  }),
});

export const { useGetUserQuery, useGetReposQuery } = githubApi;
