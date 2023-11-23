import React from "react";
import TweetProfilPhoto from '../images/tweet-profile-photo.png';
import newYorkTime from '../images/newYorkTime.svg';
import roundTwitter from '../images/round-twitter-logo.svg';
import react from '../images/React.svg';
import Reply from '../images/Reply.svg';
import Retweet from '../images/Retweet.svg';
import TweetReplies from '../images/Tweet-Replies.svg';

const Tweet = [
  {
    name: "CNN",
    content:
      'President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.',
    comments: 57,
    retweets: 144,
    likes: 184,
    sent: "7m",
    author: "@CNN",
    profileUser: TweetProfilPhoto,
  },
  {
    name: "New York Times",
    content:
      "Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land",
    Img: secondTweetImage,
    comments: 19,
    retweets: 48,
    likes: 482,
    sent: "Oct 29",
    author: "@nytimes",
    profileUser: newYorkTime,
  },
  {
    name: "Twitter",
    content: "BIG NEWS lol jk still Twitter",
    comments: "6.8K",
    retweets: "36.6K",
    likes: "267.1K",
    sent: "Oct 20",
    author: "@Twitter",
    profileUser: roundTwitter,
  },
  {
    name: "Twitter",
    content: "Hello literally everyone",
    comments: "18.7K",
    retweets: "785.4K",
    likes: "3.3M",
    sent: "Oct 15",
    author: "@Twitter",
    profileUser: roundTwitter,
  },
  {
    name: "Twitter",
    content:
      "Hello literally everyone",
      Img: secondTweetImage,
    comments: 19,
    retweets: 48,
    likes: 482,
    sent: "Oct 17",
    author: "@Twitter",
    profileUser: roundTwitter,
  },
];

export default Tweet;