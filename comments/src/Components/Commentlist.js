import React, { useEffect, useState } from "react";
import Data from "../Data";
import Comment from "./Comment";

const Commentlist = () => {
  const [data, setData] = useState(Data);
  const [showreplies, setShowreplies] = useState(false);
  const replieHandler = () => {
    setShowreplies((reply) => !reply);
  };
  return (
    <div>
      {data.map((parentComment) => (
        <div key={parentComment.id}>
          <Comment
            Author={parentComment.Author}
            Date={parentComment.Date}
            Comment={parentComment.Comment}
            img={parentComment.img}
          />
          <button onClick={replieHandler}>Show replies</button>
          {showreplies &&
            parentComment.replies.map((reply) => (
              <div key={reply.id}>
                <Comment
                  Author={reply.Author}
                  Comment={reply.Comment}
                  Date={reply.Date}
                  img={parentComment.img}
                />
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default Commentlist;
