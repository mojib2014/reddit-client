import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/post/postsSlice";
import commentsRducer from "../features/comments/commentsSlice";
import categoreisReducer from "../features/categoris/categoriesSlice";
import searchTermReducer from "../features/searchTerm/searchTermSlice";
import popularSubredditsReducer from "../features/popularSubreddits/popularSubredditsSlice";

export default configureStore({
  reducer: {
    categories: categoreisReducer,
    posts: postsReducer,
    comments: commentsRducer,
    popularSubreddits: popularSubredditsReducer,
    searchTerm: searchTermReducer,
  },
});
