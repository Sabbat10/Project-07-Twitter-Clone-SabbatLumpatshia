import React from "react";
import reply from '../images/Reply.svg';
import retweet from '../images/Retweet.svg';
import react from '../images/React.svg';
import weetReplies from '../images/Tweet-Replies.svg';

function TweetAction({comments, retweets, likes}) {
    return (
        <div className="tweet-actions">
            <div className="tweet-action">
                <img src={reply} alt="" />
                {comments}
            </div>

            <div className="tweet-action">
                <img src={retweet} alt="" />
                {retweets}
            </div>

            <div className="tweet-action">
                <img src={react} alt="" />
                {likes}
            </div>

            <div className="tweet-actions">
                <img src={weetcomments} alt="" />
            </div>
        </div>
    )
}

export default TweetAction;