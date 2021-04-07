import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../../services/postsService";

// Async thunk action creator
export const loadPosts = createAsyncThunk("posts/loadPosts", async (query) => {
  try {
    const res = await fetchPosts(query);
    return res;
  } catch (error) {
    return error.message;
  }
});

// Slice creator
export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    isPostsLoading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadPosts.pending, (state) => {
        state.isPostsLoading = true;
        state.error = false;
      })
      .addCase(loadPosts.fulfilled, (state, action) => {
        state.isPostsLoading = false;
        state.error = false;
        state.posts = action.payload;
      })
      .addCase(loadPosts.rejected, (state) => {
        state.isPostsLoading = false;
        state.error = true;
        state.posts = [];
      });
  },
});

// Slice selector
export const selectPosts = (state) => state.posts.posts;
export const isPostsLoading = (state) => state.posts.isPostsLoading;
export const postsError = (state) => state.posts.error;
export default postsSlice.reducer;
