import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getPopular from "../../services/popularSubredditsService";

// Async thunk action creator
export const getPopularSubreddits = createAsyncThunk(
  "popularSubreddits/loadPopular",
  async (_, { rejectWithValue }) => {
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
      return rejectWithValue(error.response.data);
    }
  },
);

// Reducer and actions creator
export const popularSubredditsSlice = createSlice({
  name: "popularSubreddits",
  initialState: {
    popularSubreddits: [],
    loadding: false,
    error: false,
    errorMessage: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPopularSubreddits.pending, (state) => {
        state.loadding = true;
        state.error = false;
      })
      .addCase(getPopularSubreddits.fulfilled, (state, { payload }) => {
        state.loadding = false;
        state.error = false;
        state.popularSubreddits = payload;
      })
      .addCase(getPopularSubreddits.rejected, (state, action) => {
        state.loadding = false;
        state.error = true;
        state.errorMessage = action.payload;
        state.popularSubreddits = [];
      });
  },
});

export default popularSubredditsSlice.reducer;

export const selectPopularSubreddits = (state) =>
  state.popularSubreddits.popularSubreddits;
export const loadding = (state) => state.popularSubreddits.loadding;
export const error = (state) => state.popularSubreddits.error;
export const errorMessage = (state) => state.popularSubreddits.errorMessage;
