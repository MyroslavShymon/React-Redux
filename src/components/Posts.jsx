import React from "react";
import { connect } from "react-redux";
import Post from "./Post";

const Posts = ({ syncPosts }) => {
  if (!syncPosts.length) {
    return <p>There is no posts</p>;
  }
  return syncPosts.map((post, postIndex) => (
    <Post post={post} index={postIndex + 1} key={post.id}></Post>
  ));
};

const mapStateToProps = (state) => {
  return {
    syncPosts: state.posts.posts,
  };
};

export default connect(mapStateToProps)(Posts);
