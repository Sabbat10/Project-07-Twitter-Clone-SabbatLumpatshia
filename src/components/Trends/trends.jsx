import React from "react";
// img
import search from '../../images/search.svg';
import vecor from '../../images/Vector.svg';
import more from '../../images/More-2.svg'
import newYorkTime from '../../images/newYorkTime.svg'
import tweetProfilePho from '../../images/tweet-profile-photo.png'
import roundTwitterLogo from '../../images/round-twitter-logo.svg'
import settings from '../../images/gear.svg'

function Trends() {
    return (
        <div className="trends">
            <div className="trends-input">
               <img src={search} className="trends-input-image" alt="" />
               <input type="text" placeholder="Serach Tweeter" />
            </div>
            <div className="trends-container">
                <div className='trends-container-title'>
                    <h2>Trends for you</h2>
                    <img src={settings} alt="" />
                </div>

                <div className='trends-container-title'>
                    <div>
                    <ul>
                        <li className="trinding">Trinding in Turkey</li>
                        <li><h2>#SQUID</h2></li>
                        <li className="trinding">2,066 TWeets</li>
                    </ul>
                    </div>
                    <img src={more} alt="" />
                </div>

                <div className='trends-container-title'>
                    <div>
                    <ul>
                        <li className="trinding">Trinding in Turkey</li>
                    <li><h2>#SQUID</h2></li>
                        <li className="trinding">2,066 TWeets</li>
                    </ul>
                    </div>
                    <img src={more} alt="" />
                </div>

                <div className='trends-container-title'>
                    <div>
                    <ol>
                        <li className="trinding">Trinding in Turkey</li>
                    <li><h2>#SQUID</h2></li>
                        <li className="trinding">2,066 TWeets</li>
                    </ol>
                    </div>
                    <img src={more} alt="" />
                </div>
                <li> <b><a href="#">Show more</a></b></li>
            </div>

            <div className="trends-container">
                <h2>Who to follow</h2>

                <div className="follow">
                    <div className="follow-images">
                        <div><img src={newYorkTime} alt="" /></div>
                        <div>The New York Times <img src={vecor} alt="" /></div>
                    </div>

                    <div className="follow-button">
                        <button className="button-trends">Tweet</button>
                    </div>
                </div>

                <div className="follow">
                    <div className="follow-images">
                        <div><img width={50} src={tweetProfilePho} alt="" /></div>
                        <div>The New York Times <img src={vecor} alt="" /></div>
                    </div>

                    <div className="follow-button">
                        <button className="button-trends">Tweet</button>
                    </div>
                </div>

                <div className="follow">
                    <div className="follow-images">
                        <div><img src={roundTwitterLogo} alt="" /></div>
                        <div>The New York Times <img src={vecor} alt="" /></div>
                    </div>

                    <div className="follow-button">
                        <button className="button-trends">Tweet</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trends;