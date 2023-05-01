import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: undefined,
  accessToken: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authSign: (state, action) => ({
      ...state,
    }),
    authRegister: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    authUpdateUser: (state, action) => ({
      ...state,
      user: action.payload.user,
      accessToken: action.payload.accessToken,
    }),
  },
});

export const { authSign, authRegister, authUpdateUser } = authSlice.actions;
export default authSlice.reducer;
