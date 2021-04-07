import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/post/postsSlice";
import commentsRducer from "../features/comments/commentsSlice";
import categoreisReducer from "../features/categoris/categoriesSlice";
import searchTermReducer from "../features/searchTerm/searchTermSlice";

export default configureStore({
  reducer: {
    categories: categoreisReducer,
    posts: postsReducer,
    comments: commentsRducer,
    searchTerm: searchTermReducer,
  },
});
