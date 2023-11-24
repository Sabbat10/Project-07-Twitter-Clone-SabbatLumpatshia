import React from "react";
import TweetAction from "./tweetAction";
import data from '../data';

function Tweet () {
    return (
        <div className="tweets">
            {data.map((copyData, index) => {
                return (
                    <div className="tweet" key={index}>
                        <img src={copyData.profil} className="tweet-avatar" alt="" />

                        <div className="tweet-content">
                            <div className="tweet-body">
                                <div className="tweet-title">
                                    <span className="tweet-title-author">
                                        {copyData.name}
                                    </span>
                                    <span className="tweet-title-details">
                                        {copyData.author}
                                    </span>
                                    <span>{"."}</span>
                                    <span>{copyData.sent}</span>
                                </div>
                                <p className="tweet-text">
                                    {copyData.content   }
                                </p>
                                <div className="tweet-image">
                                    {copyData.Images     && <img src={copyData.Images}/>}
                                </div>
                            </div>
                            <TweetAction
                                comments={copyData.comments}
                                retweets={copyData.retweets}
                                likes={copyData.likes}
                            />
                        </div>
                    </div>
                )
            }
            )
            }
        </div>
    )
}

export default Tweet;
