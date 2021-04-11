import React from "react";
import moment from "moment";
import ReactMarkdown from "react-markdown";
import { FaUser } from "react-icons/fa";
import "./comment.css";
import Avatar from "../../components/avatar/Avatar";

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <div className="comment-metadata">
        <Avatar name={comment.author}>
          <FaUser />
        </Avatar>
        <p className="comment-created-time">
          {moment.unix(comment.created_utc).fromNow()}
        </p>
      </div>
      <ReactMarkdown source={comment.comment} />
    </div>
  );
};

export default Comment;
