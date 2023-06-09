import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: undefined,
  accessToken: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authLogin: (state, action) => ({
      ...state,
    }),
    authRegister: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    authUpdateUser: (state, action) => ({
      user: action.payload.user,
      accessToken: action.payload.accessToken,
    }),
    authFetchMe: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    authRefreshToken: (state, action) => ({}),
    authLogOut: (state, action) => ({}),
  },
});

export const {
  authLogin,
  authRegister,
  authUpdateUser,
  authFetchMe,
  authRefreshToken,
  authLogOut,
} = authSlice.actions;
export default authSlice.reducer;
