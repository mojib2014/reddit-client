import { createSlice } from "@reduxjs/toolkit";

// Actions and Reducer creator (slice)
const searchTermSlice = createSlice({
  name: "searchTerm",
  initialState: {
    searchTerm: "/r/pics",
  },
  reducers: {
    setSearchTerm: (state, { payload }) => {
      state.searchTerm = payload;
    },
  },
});

export const selectSearchTerm = (state) => state.searchTerm.searchTerm;
export const { setSearchTerm } = searchTermSlice.actions;
export default searchTermSlice.reducer;
