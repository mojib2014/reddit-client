import React from "react";
import { useSelector } from "react-redux";
import { isCommentsLoadding, commentsError } from "./commentsSlice";
import Comment from "../../components/comment/Comment";
import Loadding from "../../components/loadding/Loadding";

const Comments = ({ items }) => {
  const commentsLoadding = useSelector(isCommentsLoadding);
  const commentsFailed = useSelector(commentsError);

  if (commentsFailed)
    return <Loadding className="error" error={commentsFailed} />;
  if (commentsLoadding) return <Loadding className="loadding" />;

  return (
    <>
      {items.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </>
  );
};

export default Comments;
