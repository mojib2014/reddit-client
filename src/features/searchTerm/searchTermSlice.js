import { createSlice } from "@reduxjs/toolkit";

// Actions and Reducer creator (slice)
const searchTermSlice = createSlice({
  name: "searchTerm",
  initialState: {
    searchTerm: "/r/pics",
  },
  reducers: {
    setSearchTerm: (state, action) => {
      const { payload } = action;
      state.searchTerm = `/r/${payload}`;
    },
    clearSearchTerm: (state) => {
      state.searchTerm = "";
    },
  },
});

export const selectSearchTerm = (state) => state.searchTerm.searchTerm;
export const { setSearchTerm, clearSearchTerm } = searchTermSlice.actions;
export default searchTermSlice.reducer;
