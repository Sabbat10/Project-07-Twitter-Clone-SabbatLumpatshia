import React from "react";
import ProfilPhoto from '../images/profile-photo.png';

function Timeline() {
  return (
    <div className="tweet-editor">
     <img src={ProfilPhoto} alt="" />
      <div>
        <input className="tweet-editor-input" type="text" placeholder="What's happing ?"/>
      </div>
    </div>
  );
}

export default Timeline;