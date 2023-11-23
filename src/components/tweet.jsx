import React from "react";
import TweetProfilPhoto from '../images/tweet-profile-photo.png';
import newYorkTime from '../images/newYorkTime.svg';
import roundTwitter from '../images/round-twitter-logo.svg';
import react from '../images/React.svg';
import Reply from '../images/Reply.svg';
import Retweet from '../images/Retweet.svg';
import TweetReplies from '../images/Tweet-Replies.svg';
// import data  from '../data'
import tweetImage from '../images/tweet-image.png';

function Tweet(){
    return(
   
            <div className="tweet-content">
                <img className="tweet-avatar" src={newYorkTime} alt="" />
                
                <div className="tweet-body">
                    <b>The New York Time</b>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae fugiat porro pariatur quo eveniet aspernatur soluta neque enim provident? Voluptates, dolores. Quasi, praesentium rerum perferendis reiciendis placeat ex autem!
                    </p>
                    <img src={tweetImage} alt="" />
                </div>
            </div>
      
    )
}
export default Tweet;