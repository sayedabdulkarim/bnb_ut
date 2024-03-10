
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
  isAuthenticated: false,
  name: "Hello Auth Slice",
  token: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { token, data } = action.payload;
      console.log(
        {
          payload: action.payload,
        },
        " payload"
      );

      state.userInfo = action.payload;
      state.isAuthenticated = !!token;
    },
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    logOutUser: (state, action) => {
      console.log("logout called");
      state.userInfo = null;
      state.isAuthenticated = false;
    },
  },
});

export const {
  setCredentials,
  setAuthenticated,
  logOutUser,
} = authSlice.actions;

export default authSlice.reducer;