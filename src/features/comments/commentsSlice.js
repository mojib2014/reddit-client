import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPostComments } from "../../services/commentsService";

// Async thunk action creator
export const loadComments = createAsyncThunk(
  "comments/loadComments",
  async (permalink) => {
    try {
      const res = await fetchPostComments(permalink);
      return res;
    } catch (error) {
      console.log("catch block", error.message);
    }
  },
);

// Actions and Reducer creator
export const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    comments: [],
    showComments: false,
    isLoadding: false,
    error: false,
  },
  reducers: {
    toggleShowComments: (state, action) => {
      state.showComments = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadComments.pending, (state) => {
        state.isLoadding = true;
        state.eError = false;
      })
      .addCase(loadComments.fulfilled, (state, action) => {
        state.isLoadding = false;
        state.error = false;
        state.comments = action.payload;
      })
      .addCase(loadComments.rejected, (state) => {
        state.isLoadding = false;
        state.error = true;
        state.comments = [];
      });
  },
});

export const selectComments = (state) => state.comments.comments;
export const showComments = (state) => state.comments.showComments;
export const isCommentsLoadding = (state) => state.comments.isLoadding;
export const commentsError = (state) => state.comments.error;
export const { toggleShowComments } = commentsSlice.actions;
export default commentsSlice.reducer;
