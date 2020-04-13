import React from 'react';
import './Contact.css';

export const Contact = ({avatar, firstName, lastName, online}) => {
    return (
    <div  className="Contact">
        <img src={avatar} className="avatar" alt="" />
        <div>
            <p className="name">{firstName} {lastName}</p>
            <div className="status"> 
                <div className={online ? "status-online" : "status-offline"}/>
                <p className="status-text">{online ? "online" : "offline"}</p>
            </div>
        </div>    
    </div>  
    )
}

/*const Avatar = ({image, firstName, lastName}) => {
    return (
    <div>
        <img src={image}/>
        <p>{firstName} {lastName}</p>
    </div>
    );
}*/