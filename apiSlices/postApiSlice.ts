import { apiSlice } from ".";

const USERS_URL = "posts";

export const postApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => ({
        url: `${USERS_URL}`,
      }),
    }),
  }),
});

export const { useGetAllPostsQuery } = postApiSlice;
