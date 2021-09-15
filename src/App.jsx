import React from "react";
import FetchedPosts from "./components/FetchedPosts";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="App">
      <div>
        <PostForm></PostForm>
      </div>
      <div>
        <div>
          <h2>Sync posts</h2>
          <Posts></Posts>
        </div>

        <div>
          <h2>Async posts</h2>
          <FetchedPosts></FetchedPosts>
        </div>
      </div>
    </div>
  );
}

export default App;
