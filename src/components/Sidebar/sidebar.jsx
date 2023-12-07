import React from "react";
import twitter from '../../images/Twitter.svg'
import hommeFll from '../../images/Home-Fill.svg'
import explore from '../../images/Explore.svg'
import notification from '../../images/Notifications.svg'
import messages from '../../images/Messages.svg'
import bookMarkets from '../../images/Bookmarks.svg'
import list from '../../images/Lists.svg'
import profil from '../../images/Profile.svg'
import more from '../../images/More.svg'
import avatar from '../../images/profile-photo.png'
import privatee from '../../images/Private.svg'
import more2 from '../../images/More-2.svg'




function Sidebar() {
    return (
        <div className="sideBardMenu">
           <ul>
            <li><img src={twitter} alt="" /></li>

            <li> 
                <img src={hommeFll} alt="" />
                <span>Home</span>
            </li>
            <li>
                <img src={explore} alt="" />
                <span>Explore</span>
            </li>
            <li>
                <img src={notification} alt="" />
                <span>Notifications</span>
            </li>
            <li>
                <img src={messages} alt="" />
                <span>Messages</span>
            </li>
            <li>
                <img src={bookMarkets} alt="" />
                <span>BookMarket</span>
            </li>
            <li>
                <img src={list} alt="" />
                <span>List</span>
            </li>
            <li>
                <img src={profil} alt="" />
                <span>Profil</span>
            </li>
            <li>
                <img src={more} alt="" />
                <span>More</span>
            </li>
           </ul>
          
            <div className="sidebarDisplay">
                <button className="buttonSidebare">Tweet</button>
            </div>
            <div className="profilClient">
                <div className="sidebarDisplay profilClient">
                <div>
                    <img width={50} src={avatar} alt="" />
                </div>
                <div>
                    <p>Prandley Ortiz <img width={15} src={privatee} alt="" /></p>
                    <span>@Prandley</span>
                </div>
                <div className="more2">
                    <img src={more2} alt="" />
                </div>
                </div>
            </div>

        </div>
        
    )
}
export default Sidebar;