import React, { useState } from "react";
import "./tweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "../firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "rakshit",
      userName: "rrrrrrs",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://techcrunch.com/wp-content/uploads/2015/08/safe_image.gif?w=1390&crop=1",
    });
    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://i.pinimg.com/564x/ab/1f/cf/ab1fcf03cace9ea5a261d538860fcf43.jpg" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="what's happing"
            type="text"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox__imageInput"
          placeholder="Optional:Enter image URL"
          type="text"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
