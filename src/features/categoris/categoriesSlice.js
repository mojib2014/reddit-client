import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getCategories from "../../services/categoriesService";

// Async thun action creator
export const loadCategories = createAsyncThunk(
  "categories/loadCategories",
  async () => {
    const categoreis = await getCategories();
    return categoreis;
  },
);

// Actions and Reducer creator
const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categoreis: [],
    isLoadding: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCategories.pending, (state) => {
        state.isLoadding = true;
        state.error = false;
      })
      .addCase(loadCategories.fulfilled, (state, action) => {
        state.isLoadding = false;
        state.error = false;
        state.categoreis = action.payload;
      })
      .addCase(loadCategories.rejected, (state) => {
        state.isLoadding = false;
        state.error = true;
        state.categoreis = [];
      });
  },
});

export const selectCategories = (state) => state.categoreis.categoreis;
export const isCategoriesLoading = (state) => state.categoreis.isLoading;
export const categoreisError = (state) => state.categoreis.error;
export default categoriesSlice.reducer;
