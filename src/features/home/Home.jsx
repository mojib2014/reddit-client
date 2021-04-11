import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loadding from "../../components/loadding/Loadding";
import { selectPosts, isPostsLoading, postsError } from "../post/postsSlice";
import { selectSearchTerm } from "../searchTerm/searchTermSlice";
import { loadPosts } from "../post/postsSlice";
import { loadPostComments, selectComments } from "../comments/commentsSlice";
import Post from "../post/Post";

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const comments = useSelector(selectComments);
  const searchTerm = useSelector(selectSearchTerm);
  const loadding = useSelector(isPostsLoading);
  const error = useSelector(postsError);

  useEffect(() => {
    dispatch(loadPosts(searchTerm));
  }, [dispatch, searchTerm]);

  const toggleComments = () => {
    const getComments = (post) => {
      dispatch(loadPostComments(post));
    };
    return getComments;
  };

  if (loadding) return <Loadding className="loadding" />;

  if (error) {
    return (
      <div className="error">
        <h2>Failed to load posts.</h2>
        <button type="button" onClick={() => dispatch(loadPosts(searchTerm))}>
          Try again
        </button>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="error">
        <h2>No posts matching "{searchTerm}"</h2>
        <button type="button" onClick={() => (window.location = "/")}>
          Go home
        </button>
      </div>
    );
  }

  return (
    <>
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          onToggleComments={toggleComments()}
          comments={comments}
        />
      ))}
    </>
  );
};

export default Home;
