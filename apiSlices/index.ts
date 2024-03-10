import { RootState } from "@/store";
import {
  createApi,
  fetchBaseQuery,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
    credentials: "include",
    prepareHeaders: async (headers, { getState }) => {
      const token = (getState() as RootState).authReducer.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  });

  let result = await baseQuery(args, api, extraOptions);

  // Checking for a 401 error
  if (result.error && "status" in result.error && result.error.status === 401) {
    // logout operations
    // api.dispatch(logout());
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ["User"],
  endpoints: (builder) => ({}),
});
