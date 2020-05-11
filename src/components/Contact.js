import React from 'react';
import './Contact.css';

class Contact extends React.Component {

    state = {
        online: false
    }
    
    handleChange() {
        this.setState(prevState => ({online: ! prevState.online}))
    }

    render () {

    const {...props} = this.props;

        return (
    <div  className="Contact">
        <img src={props.avatar} className="avatar" alt="" />
        <div>
            <p className="name">{props.name}</p>
            <div className="status" onClick={()  => this.handleChange()}> 
                <div className={this.state.online ? "status-online" : "status-offline"}/>
                <p className="status-text">{this.state.online ? "online" : "offline"}</p>
            </div>
        </div>    
    </div>  
    )}  
}

export default Contact;