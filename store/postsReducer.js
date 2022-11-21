import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { graphcms, queryHomePage } from "../services/api";

const initialState = {
  posts: [],
  categories: [],
};

export const postSlice = createSlice({
  name: "postStore",
  initialState,
  reducers: {
    getPosts(state, action) {},
  },
});

export const { getPosts } = postSlice.actions;

export const selectPostState = (state) => state.postStore.cartProducts;

export default postSlice.reducer;
