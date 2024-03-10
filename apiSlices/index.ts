import { RootState } from '@/store';
import { createApi, fetchBaseQuery, BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';

// Defining the type for the arguments of 'baseQueryWithReauth'
const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: 'http://192.168.225.131:5000/',
    credentials: 'include',
    prepareHeaders: async (headers, { getState }) => {
      // Potentially add auth tokens here with TypeScript typing for 'getState'
      const token = (getState() as RootState).authReducer.token; // Example for getting token from state
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  });

  let result = await baseQuery(args, api, extraOptions);

  // Checking for a 401 error specifically and handling it
  if (result.error && 'status' in result.error && result.error.status === 401) {
    // Perform logout operations
    // Example: dispatch some logout action
    // api.dispatch(logout());
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ['User'],
  endpoints: (builder) => ({}),
});

// Assuming 'logout' is an action creator
// function logout() {
//   return { type: 'auth/logout' };
// }

// Make sure to define the 'RootState' and 'FetchArgs', 'FetchBaseQueryError' if not already defined
