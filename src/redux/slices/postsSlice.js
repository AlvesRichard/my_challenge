import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [1],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    addPost: (state, action) => {
      state.posts.unshift(action.payload);
    },
  },
});

export const { setPosts, addPost } = postsSlice.actions;

export default postsSlice.reducer;