import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUser {
  token: string | null;
  user: {
    name: string | null;
    email: string | null;
    role: string | null;
  };
}

const initialState: IUser = {
  token: null,
  user: {
    name: null,
    email: null,
    role: null
  }
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      if (state.token !== null) {
        localStorage.setItem("token", state.token);
      }
    },
    logoutUser: (state) => {
      state.user = {
        name: null,
        email: null,
        role: null
      };
      state.token = null;
      localStorage.removeItem('token');
    },
  },
});

export const { setUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
