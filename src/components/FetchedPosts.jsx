import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions";
import Post from "./Post";

const FetchedPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.fetchedPosts);
  const loading = useSelector((state) => state.app.loading);
  const error = useSelector((state) => state.app.text);

  if (loading && !error) {
    return <div>Loading...</div>;
  }

  if (!posts.length) {
    return <button onClick={() => dispatch(fetchPosts())}>Load</button>;
  }

  return posts.map((post, postIndex) => (
    <Post post={post} index={postIndex + 1} key={post.id}></Post>
  ));
};

export default FetchedPosts;
