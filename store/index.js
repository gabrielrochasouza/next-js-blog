import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { postSlice } from "./postsReducer";

export const store = configureStore({
  reducer: {
    [postSlice.name]: postSlice.reducer,
  },
  devTools: true,
});
