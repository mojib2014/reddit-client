import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getCategories from "../../services/categoriesService";

// Async thun action creator
export const loadCategories = createAsyncThunk(
  "categories/loadCategories",
  async () => {
    try {
      const categories = await getCategories();
      return categories.map((category) => ({
        id: category.id,
        url: category.url,
        display_name: category.display_name,
        primary_color: category.primary_color,
        icon_img: category.icon_img,
      }));
    } catch (error) {
      return error;
    }
  },
);

// Actions and Reducer creator
const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    isLoadding: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCategories.pending, (state) => {
        state.isLoadding = true;
        state.error = false;
      })
      .addCase(loadCategories.fulfilled, (state, { payload }) => {
        state.isLoadding = false;
        state.error = false;
        state.categories = payload;
      })
      .addCase(loadCategories.rejected, (state) => {
        state.isLoadding = false;
        state.error = true;
        state.categories = [];
      });
  },
});

export default categoriesSlice.reducer;
export const selectCategories = (state) => state.categories.categories;
export const isLoadding = (state) => state.isLoadding;
export const hasError = (state) => state.error;
