import React from "react";
import TimelineProp from '../images/Timeline-Prop.svg';

function Header() {
    return (
        <div className="header">
            <div>Home</div>
            <div><img src={TimelineProp} alt="" /></div>
        </div>
    );
}

export default Header;