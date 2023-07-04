import React, { useState } from "react";
import '../styles/Collapse.scss';
import Vector from '../assets/Vector.png';

const Collapsible = (props) => {
    const [open, setOPen] = useState(false);
    const toggle = () => {
        setOPen(!open);
    }

    return (
        <div>
            <div className="dropdown">
                <p>{props.label}</p>
                <button onClick={toggle} className={open ? "dropdown-button dropdown-button-open" : "dropdown-button"}><img src={Vector} alt="Flèche déroulante"/></button>
            </div>
            <div className={open ? "toggle show" : "toggle"} >{props.children}</div>
        </div>
    )
}

export default Collapsible