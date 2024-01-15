import tweetData from "../../../data/tweet-data";
import Tweet from "../tweets/tweet";

export default function ProfileTweets(){
    return(
        <section>
           {
            tweetData.map(tweet =>(
                <Tweet 
                    id = {tweet.id}
                    sourceProfilePhoto = {tweet.sourceProfilePhoto}
                    author = {tweet.author}
                    username = {tweet.username}
                    datePublication = {tweet.datePublication}
                    textContent = {tweet.textContent}
                    sourceImageTweet = {tweet.sourceImageTweet}
                    valueReply = {tweet.valueReply}
                    valueReposter = {tweet.valueReposter}
                    valueLike = {tweet.valueLike}
                    valueShare = {tweet.valueShare}
                />
            ))
           }
        </section>
    )
}