import React, { useState } from "react";
import "./Comment.css";
const Comment = (props) => {
  const [upvote, setupvote] = useState(0);
  const voteHandler = () => {
    setupvote((upvote) => upvote + 1);
  };
  return (
    <div className="comment-main">
      <img alt="default-png" src={props.img}></img>
      <div className="comment-container">
        <h4 className="comment-name">{props.Author}</h4>
        <span className="comment-body">{props.Comment}</span>
        <div className="upvote-container">
          <button onClick={voteHandler}>Upvote</button>
          <span>{upvote}</span>
        </div>
      </div>
      <span className="comment-date">{props.Date}</span>
    </div>
  );
};

export default Comment;
