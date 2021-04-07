import moment from "moment";
import React from "react";
import ReactMarkdown from "react-markdown";
import { FaUser } from "react-icons/fa";
import Avatar from "../avatar/Avatar";
import "./comment.css";

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
      <ReactMarkdown source={comment.body} />
    </div>
  );
};

export default Comment;
