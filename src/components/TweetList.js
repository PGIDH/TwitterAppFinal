// import { useState, useEffect } from "react";
import Tweet from "./Tweet";

function TweetList(props) {
   return (
      <div className="tweetList">
         {props?.data.map((tweet) => (
            <Tweet data={tweet} />
         ))}
      </div>
   )
}
export default TweetList;