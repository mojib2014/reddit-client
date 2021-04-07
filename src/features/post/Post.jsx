import React from "react";
import {
  TiArrowUpOutline,
  TiArrowDownOutline,
  TiMessage,
} from "react-icons/ti";
import { FaUser } from "react-icons/fa";
import moment from "moment";
import shortenNumber from "../../utils/shortenNumber";
import Button from "../../components/button/Button";
import Card from "../../components/card/Card";
import Avatar from "../../components/avatar/Avatar";
import Comments from "../comments/Comments";
import "./post.css";

const Post = ({ post, onToggleComments, comments }) => {
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
              <img src={post.url} alt={post.name} className="post-image" />
            </div>
            <div className="post-details">
              <Avatar name={post.author}>
                <FaUser className="icon-action" />
              </Avatar>
              <span>{moment.unix(post.created_utc).fromNow()}</span>
              <span className="post-comments-container">
                <Button
                  className="icon-action-button"
                  ariaLabel="Show comments"
                  onClick={() => onToggleComments(post.permalink)}
                >
                  <TiMessage className="icon-action" />
                </Button>

                {shortenNumber(post.num_comments, 1)}
              </span>
            </div>
            <Comments items={comments} />
          </div>
        </div>
      </Card>
    </article>
  );
};

export default Post;
