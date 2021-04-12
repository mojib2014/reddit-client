import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPostComments } from "../../services/commentsService";

// Async thunk action creator
export const loadPostComments = createAsyncThunk(
  "comments/loadPostComments",
  async (post, { rejectWithValue }) => {
    try {
      const comments = await fetchPostComments(post);
      return comments.map((comment) => ({
        id: comment.id,
        author: comment.author,
        ups: comment.ups,
        comment: comment.body,
        created_utc: comment.created_utc,
        postId: post.id,
      }));
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

// Actions and Reducer creator
export const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    comments: [],
    loadding: false,
    error: false,
    errorMessage: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadPostComments.pending, (state) => {
        state.loadding = true;
        state.eError = false;
      })
      .addCase(loadPostComments.fulfilled, (state, { payload }) => {
        state.loadding = false;
        state.error = false;
        state.comments = payload;
      })
      .addCase(loadPostComments.rejected, (state, action) => {
        state.loadding = false;
        state.error = true;
        state.errorMessage = action.payload;
        state.comments = [];
      });
  },
});

export default commentsSlice.reducer;

export const selectComments = (state) => state.comments.comments;
export const isLoadding = (state) => state.comments.loadding;
export const error = (state) => state.comments.error;
export const errorMessage = (state) => state.comments.errorMessage;
