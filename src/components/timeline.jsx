import React from "react";
// Importation des images svg
import ProfilPhoto from '../images/profile-photo.png';
import Poll from '../images/Poll.svg';
import Gif from '../images/Gif.svg';
import Media from '../images/Media.svg';
import Schedule from '../images/Schedule.svg';

// components Timeline
function Timeline() {
  return (
    <div className="tweet-editor">
     <img className="avatar" src={ProfilPhoto} alt="" />
      <div className="tweet-editor-form">
        <input className="tweet-editor-input" type="text" placeholder="What's happing ?"/>
        
        {/* Classe 21em */}
        <div className="tweet-editor-buttons">
          {/* icones des actions  */}
          <div className="tweet-editor-actions">
            <img src={Media} alt="" />
            <img src={Gif} alt="" />
            <img  src={Poll} alt="" />
            <img  src={Schedule} alt="" />
          </div>
          {/* button tweet */}
          <button className="button">Tweet</button>
        </div>
      </div>
    </div>
  );
}

export default Timeline;