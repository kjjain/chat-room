import React from "react";

class EnterChat extends React.Component{
    constructor(){
        super();
        this.state ={
            username:  ""
        }
    }

    updateUsername = (value) =>{
        this.setState({username: value});
    }

    render(){
        return(
            <div className="enter-chat">
            <input type="text"
                   value={this.state.username}
                   className="enter-username"
                   onChange={e => this.updateUsername(e.target.value)}
                   placeholder="Type your username..."
            /><p></p>
            <button
                className="enter-chat-button"
                onClick={e => this.props.logIn(this.state.username)}
            >Join the DashDoor Chat!</button>
            </div>
        )
    }

}

export default EnterChat;