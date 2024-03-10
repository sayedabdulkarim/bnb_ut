import { configureStore } from "@reduxjs/toolkit";
//reducers
import { apiSlice } from "./apiSlices/index";
import authReducer from "./slices/authSlice";

const store = configureStore({
  reducer: {
    authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
