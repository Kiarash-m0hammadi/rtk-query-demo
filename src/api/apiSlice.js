import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define an API slice for fetching data from JSONPlaceholder
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "posts",
    }),
    getPostById: builder.query({
      query: (id) => `posts/${id}`,
    }),
  }),
});

// Export hooks for calling endpoints in components
export const { useGetPostsQuery, useGetPostByIdQuery } = apiSlice;
