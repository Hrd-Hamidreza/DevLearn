//! ---------------------------------------- Import
import { createSlice } from "@reduxjs/toolkit";
import {
  getLocalStorage,
  setLocalStorage,
} from "/src/utils/General/localStorage";
//! ----------------------------------------
const CART = "Cart";
//! ----------------------------------------
const data = getLocalStorage({ name: CART });
//! ----------------------------------------
const initialState = data || { courses: [] };
//! ----------------------------------------
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    buy: (state, action) => {
      const repetitiveCourse = state.courses.find(
        (course) => +course.id === +action.payload.id,
      );
      state.courses = repetitiveCourse
        ? [...state.courses]
        : [action.payload, ...state.courses];
      console.log(state);
      setLocalStorage({ data: state, name: CART });
    },
    deleted: (state, action) => {
      const deleted = state.courses.filter(
        (course) => +course.id !== +action.payload.id,
      );
      state.courses = deleted;
      setLocalStorage({ data: state, name: CART });
    },
    quantity: (state, action) => {
      const { priority, course } = action.payload;
      state.courses = state.courses.map((eachCourse) =>
        +eachCourse.id === +course.id
          ? {
              ...eachCourse,
              quantity:
                priority === "Plus"
                  ? course.quantity + 1
                  : course.quantity - 1 <= 0
                    ? 1
                    : course.quantity - 1,
            }
          : eachCourse,
      );
      setLocalStorage({ data: state, name: CART });
    },
  },
});
//! ---------------------------------------- Export
export const { buy, deleted, quantity } = cartSlice.actions;
export default cartSlice.reducer;
