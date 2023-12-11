import React from "react";
import tweetImage from '../images/tweet-image.png';
import tweetProfile from '../images/tweet-profile-photo.png';
import roundTwitter from '../images/round-twitter-logo.svg';
import newYorkTime from '../images/newYorkTime.svg'

//Les images svg pour les tweet-actions

import reply from '../images/Reply.svg'
import retweet from '../images/Retweet.svg'
import love from '../images/React.svg'
import tweetReplie from '../images/Tweet-Replies.svg'


function Tweet (props) {
    return (
        <div className="tweets">
            {/* Premier tweet */}
            <div className="tweet">
                <div className="tweet-avatar">
                    <span><img src={tweetProfile} alt="" /></span>
                </div>

                <div className="tweet-content">
                    <div className="tweet-body">
                        <span className="tweet-title"><b>CNN</b> @CNN . 7m</span>
                        <span className="tweet-text"><p>President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.</p></span>

                        <div className="tweet-actions">
                            <div className="tweet-action"><img  src={reply} alt="" />235k</div>
                            <div className="tweet-action"><img  src={retweet} alt="" />235k</div>
                            <div className="tweet-action"><img  src={love} alt="" />235k</div>
                            <div className="tweet-action"><img  src={tweetReplie} alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        {/* Deuxième tweet */}
            <div className="tweet">
                <div className="tweet-avatar">
                    <span><img src={newYorkTime} alt="" /></span>
                </div>

                <div className="tweet-content">
                    <div className="tweet-body">
                        <span className="tweet-title"><b>New York Times</b> @nytimes . 2h</span>
                        <span className="tweet-text"><p>Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land</p></span>
                        <div className="tweet-image">
                            <img src={tweetImage} alt="" />
                        </div>

                        <div className="tweet-actions">
                            <div className="tweet-action"><img  src={reply} alt="" />235k</div>
                            <div className="tweet-action"><img  src={retweet} alt="" />235k</div>
                            <div className="tweet-action"><img  src={love} alt="" />235k</div>
                            <div className="tweet-action"><img  src={tweetReplie} alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Troisième tweet */}

            <div className="tweet">
                <div className="tweet-avatar">
                    <span><img src={roundTwitter} alt="" /></span>
                </div>

                <div className="tweet-content">
                    <div className="tweet-body">
                        <span className="tweet-title"><b>Twitter</b> @Twitter . Oct 29</span>
                        <span className="tweet-text"><p>BIG NEWS lol jk still Twitter</p></span>

                        <div className="tweet-actions">
                            <div className="tweet-action"><img  src={reply} alt="" />235k</div>
                            <div className="tweet-action"><img  src={retweet} alt="" />235k</div>
                            <div className="tweet-action"><img  src={love} alt="" />235k</div>
                            <div className="tweet-action"><img  src={tweetReplie} alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quatrième tweet */}

            <div className="tweet">
                <div className="tweet-avatar">
                    <span><img src={roundTwitter} alt="" /></span>
                </div>

                <div className="tweet-content">
                    <div className="tweet-body">
                        <span className="tweet-title"><b>Twitter</b> @Twitter . Oct 4</span>
                        <span className="tweet-text"><p>Hello literally everyone</p></span>

                        <div className="tweet-actions">
                            <div className="tweet-action"><img  src={reply} alt="" />235k</div>
                            <div className="tweet-action"><img  src={retweet} alt="" />235k</div>
                            <div className="tweet-action"><img  src={love} alt="" />235k</div>
                            <div className="tweet-action"><img  src={tweetReplie} alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cinquième tweet */}

            <div className="tweet">
                <div className="tweet-avatar">
                    <span><img src={roundTwitter} alt="" /></span>
                </div>

                <div className="tweet-content">
                    <div className="tweet-body">
                        <span className="tweet-title"><b>Twitter</b> @Twitter . Oct 4</span>
                        <span className="tweet-text"><p>Hello literally everyone</p></span>

                    </div>
                </div>
            </div>  
        </div>
    );
}

export default Tweet;