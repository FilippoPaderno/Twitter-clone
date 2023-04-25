import { Search } from "@mui/icons-material";
import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterFollowButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import "./Widget.css";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1650675223283351552"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="elonmusk"
          options={{ height: 400 }}
        />
        <TwitterFollowButton
          screenName="FilippoPaderno"
        />
      </div>
    </div>
  );
}

export default Widgets;
