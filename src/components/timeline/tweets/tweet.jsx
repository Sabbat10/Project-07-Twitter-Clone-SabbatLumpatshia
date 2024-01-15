import Avatar from "../../avatar"
import TweetBody from "./tweet-body"
import TweetActions from "./tweet-actions"


export default function Tweet({id, sourceProfilePhoto, author, username, datePublication, textContent, sourceImageTweet, valueReply, valueReposter, valueLike, valueShare}){
    return(
          <article className="tweet" key={id}>
              <Avatar source={sourceProfilePhoto } />
              <div className="tweet-content">
                  <TweetBody author={author} username={username} datePublication={datePublication} textContent={textContent} sourceImageTweet={sourceImageTweet}/>
                  <TweetActions valueReply={valueReply} valueReposter={valueReposter} valueLike={valueLike} valueShare={valueShare}/>
              </div>
          </article>
    )
}