import React from 'react';
import './Contact.css';

const image = "https://randomuser.me/api/portraits/men/25.jpg";
const name = {
  pseudo: "Keith Brewer"
};
const online = true;

export const Contact = () => {
    return (
    <div  className="Contact">
        <img src={image} className="avatar" alt="" />
        <div>
            <span className="name">{name.pseudo}</span>
            <div className="status"> 
                <li className="status-online">
                <a className="status-text">{online ? "online" : "offline"}</a>
                </li>
            </div>
        </div>    
    </div>  
    )
}

