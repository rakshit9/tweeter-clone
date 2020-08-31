import React, { useState, useEffect } from "react";
import "./feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "../firebase";
import FlipMove from "react-flip-move";
function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    //code....
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h1>Home</h1>
      </div>
      {/* Tweetbox */}
      <TweetBox />
      {/* post */}

      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            userName={post.userName}
            verified={post.verified}
            text={post.text}
            image={post.image}
            avatar={post.avatar}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
