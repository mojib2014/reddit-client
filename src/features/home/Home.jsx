import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../post/Post";
import Loadding from "../../components/loadding/Loadding";
import {
  loadPosts,
  selectPosts,
  isPostsLoading,
  postsError,
} from "../post/postsSlice";
import { selectSearchTerm } from "../searchTerm/searchTermSlice";
import {
  loadComments,
  selectComments,
  toggleShowComments,
} from "../comments/commentsSlice";

const Home = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const comments = useSelector(selectComments);
  const postsLoading = useSelector(isPostsLoading);
  const postsFailed = useSelector(postsError);
  const searchTerm = useSelector(selectSearchTerm);

  useEffect(() => {
    dispatch(loadPosts(searchTerm));
  }, [dispatch, searchTerm]);

  if (postsFailed) return <Loadding className="error" />;
  if (postsLoading) return <Loadding className="loadding" />;

  const toggleComments = (permalink) => {
    setShow(!show);
    dispatch(toggleShowComments(show));
    if (show) dispatch(loadComments(permalink));
  };

  return (
    <>
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          onToggleComments={toggleComments}
          comments={comments}
        />
      ))}
    </>
  );
};

export default Home;
