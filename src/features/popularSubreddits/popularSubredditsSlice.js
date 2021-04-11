import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getPopular from "../../services/popularSubredditsService";

// Async thunk action creator
export const getPopularSubreddits = createAsyncThunk(
  "popularSubreddits/loadPopular",
  async () => {
    try {
      const { data } = await getPopular();
      const res = data.children.map(({ data }) => ({
        url: data.url,
        id: data.id,
        subreddit_name_prefixed: data.subreddit_name_prefixed,
        thumbnail: data.thumbnail,
        subreddit: data.subreddit,
        display_name: data.name,
        primary_color: data.link_flair_background_color,
        permalink: data.permalink,
      }));
      return res;
    } catch (error) {
      return error;
    }
  },
);

// Reducer and actions creator
export const popularSubredditsSlice = createSlice({
  name: "popularSubreddits",
  initialState: {
    popularSubreddits: [],
    isLoadding: false,
    hasError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPopularSubreddits.pending, (state) => {
        state.isLoadding = true;
        state.hasError = false;
      })
      .addCase(getPopularSubreddits.fulfilled, (state, { payload }) => {
        state.isLoadding = false;
        state.hasError = false;
        state.popularSubreddits = payload;
      })
      .addCase(getPopularSubreddits.rejected, (state) => {
        state.isLoadding = false;
        state.hasError = true;
        state.popularSubreddits = [];
      });
  },
});

export default popularSubredditsSlice.reducer;

export const selectPopularSubreddits = (state) =>
  state.popularSubreddits.popularSubreddits;
export const loadding = (state) => state.popularSubreddits.isLoadding;
export const error = (state) => state.popularSubreddits.hasError;
