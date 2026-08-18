//! ---------------------------------------- Import
import { createSlice } from "@reduxjs/toolkit";
import {
  getLocalStorage,
  setLocalStorage,
} from "/src/utils/General/localStorage";
//! ----------------------------------------
const USER = "User";
//! ----------------------------------------
const data = getLocalStorage({ name: USER });
//! ----------------------------------------
const initialState = data || { user: {} };
//! ----------------------------------------
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      setLocalStorage({ data: state, name: USER });
    },
    logOut: (state, action) => {
      localStorage.removeItem(USER);
      state.user = {};
    },
  },
});
//! ---------------------------------------- Export
export const { login, logOut } = userSlice.actions;
export default userSlice.reducer;
