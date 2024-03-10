import { apiSlice } from ".";
import { Post } from "@/constants/models";

const USERS_URL = "posts";

export const postApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllPosts: builder.query<Post[], void>({
      // Here 'any' is the type of the result; replace with your actual result type
      query: () => `${USERS_URL}`,
    }),
  }),
});

export const { useGetAllPostsQuery } = postApiSlice;
