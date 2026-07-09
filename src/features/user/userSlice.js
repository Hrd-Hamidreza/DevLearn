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
    info: (state, action) => {
      const { priority, email, password } = action.payload;
      state.user =
        priority === "Email"
          ? { ...state.user, email: email }
          : priority === "Password"
            ? { ...state.user, password: password }
            : state.user;
      setLocalStorage({ data: state, name: USER });
    },
    logIn: (state, action) => {
      const { id, name, avatar } = action.payload;
      state.user = { id: id, name: name, avatar: avatar };
      setLocalStorage({ data: state, name: USER });
    },
    logOut: (state, action) => {
      state.user = {};
      setLocalStorage({ data: state, name: USER });
    },
  },
});
//! ---------------------------------------- Export
export const { info, logIn, logOut } = userSlice.actions;
export default userSlice.reducer;
