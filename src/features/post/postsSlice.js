import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPosts } from "../../services/postsService";

// Async thunk action creator (posts)
export const loadPosts = createAsyncThunk(
  "posts/loadPosts",
  async (query, { rejectWithValue }) => {
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
      return rejectWithValue(err.response.data);
    }
  },
);

// Slice creator
export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loadding: false,
    error: false,
    errorMessage: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadPosts.pending, (state) => {
        state.loadding = true;
        state.error = false;
      })
      .addCase(loadPosts.fulfilled, (state, { payload }) => {
        state.loadding = false;
        state.error = false;
        state.posts = payload;
      })
      .addCase(loadPosts.rejected, (state, action) => {
        state.loadding = false;
        state.error = true;
        state.errorMessage = action.payload;
        state.posts = [];
      });
  },
});

export default postsSlice.reducer;

// Slice selector
export const selectPosts = (state) => state.posts.posts;
export const isPostsLoading = (state) => state.posts.loadding;
export const error = (state) => state.posts.error;
export const errMessage = (state) => state.posts.errorMessage;
