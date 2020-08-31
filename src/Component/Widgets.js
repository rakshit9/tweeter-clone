import React from "react";
import "./widgets.css";
import { TwitterTimelineEmbed } from "react-twitter-embed";

import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="widgets_widgetsContainer">
        <h2>what's happening</h2>
        {/* <TwitterTweetEmbed tweetId={} /> */}

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Rsarkheliya"
          options={{ height: 400 }}
        />
      </div>
    </div>
  );
}

export default Widgets;
