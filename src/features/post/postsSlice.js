import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPosts } from "../../services/postsService";

// Async thunk action creator (posts)
export const loadPosts = createAsyncThunk("posts/loadPosts", async (query) => {
  try {
    const posts = await fetchPosts(query);
    return posts.map((post) => ({
      id: post.id,
      title: post.title,
      ups: post.ups,
      num_comments: post.num_comments,
      created_utc: post.created_utc,
      author: post.author,
      url: post.url,
      permalink: post.permalink,
      showComments: false,
      comments: [],
    }));
  } catch (err) {
    return err;
  }
});

// Slice creator
export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    isLoadding: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadPosts.pending, (state) => {
        state.isLoadding = true;
        state.error = false;
      })
      .addCase(loadPosts.fulfilled, (state, { payload }) => {
        state.isLoadding = false;
        state.error = false;
        state.posts = payload;
      })
      .addCase(loadPosts.rejected, (state) => {
        state.isLoadding = false;
        state.error = true;
        state.posts = [];
      });
  },
});

export const { toggleShowComments } = postsSlice.actions;
export default postsSlice.reducer;

// Slice selector
export const selectPosts = (state) => state.posts.posts;
export const isPostsLoading = (state) => state.posts.isLoadding;
export const postsError = (state) => state.posts.error;
