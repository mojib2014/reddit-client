import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import {
  TiArrowUpOutline,
  TiArrowDownOutline,
  TiMessage,
} from "react-icons/ti";
import { FaUser } from "react-icons/fa";
import Button from "../../components/button/Button";
import Avatar from "../../components/avatar/Avatar";
import Loadding from "../../components/loadding/Loadding";
import Error from "../../components/error/Error";
import shortenNumber from "../../utils/shortenNumber";
import Card from "../../components/card/Card";
import Comment from "../comments/Comment";
import { hasError, isLoadding } from "../comments/commentsSlice";
import "./post.css";

const Post = ({ post, onToggleComments, comments }) => {
  const error = useSelector(hasError);
  const loadding = useSelector(isLoadding);

  const renderComments = () => {
    if (error) return <Error message="Failed to load comments" />;

    if (loadding) return <Loadding className="loadding" />;

    if (comments.every((comment) => post.id === comment.postId)) {
      return (
        <div>
          {comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <article key={post.id}>
      <Card>
        <div className="post-wrapper">
          <div className="post-votes-container">
            <Button className="up-vote" ariaLabel="Up vote">
              <TiArrowUpOutline className="icon-action" />
            </Button>
            <p className={`post-votes-value `}>{shortenNumber(post.ups, 1)}</p>
            <Button className="down-vote" ariaLabel="Down vote">
              <TiArrowDownOutline className="icon-action" />
            </Button>
          </div>
          <div className="post-container">
            <h3 className="post-title">{post.title}</h3>
            <div className="post-img-container">
              <img
                src={post.url}
                alt={post.author}
                className="post-image"
                loading="lazy"
                style={{ width: 500, height: "auto" }}
              />
            </div>
            <div className="post-details">
              <Avatar name={post.author}>
                <FaUser className="icon-action" />
              </Avatar>
              <span>{moment.unix(post.created_utc).fromNow()}</span>
              <span className="post-comments-container">
                <Button
                  className={`icon-action-button ${
                    comments.length ? "show" : "hide"
                  }`}
                  ariaLabel="Show comments"
                  onClick={() => onToggleComments(post)}
                >
                  <TiMessage className="icon-action" />
                </Button>

                {shortenNumber(post.num_comments, 1)}
              </span>
            </div>
            {renderComments()}
          </div>
        </div>
      </Card>
    </article>
  );
};

export default Post;
