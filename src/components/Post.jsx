import React from "react";

const Post = ({ post, index }) => {
  return (
    <div>
      <span>{index}. </span>
      {post.title}
    </div>
  );
};

export default Post;
