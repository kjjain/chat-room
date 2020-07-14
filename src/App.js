import React from 'react'
import MessageList from './components/MessageList'
import RoomList from './components/RoomList'
import EnterChat from './components/EnterChat'
import messageAPI from "./services/messageAPI";
import roomDetailsAPI from "./services/roomDetailsAPI";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: "",
            isLogged: false,
            messageInfo: "",
            user: "",
            rooms: "",
            currentRoomId: 0,
        }
    }

    componentDidMount() {
        messageAPI.getAPIResponse().then((res) => {
            this.setState({"messages": res.data});
        });
    }

    logIn = (user) => {
        if (user) {
            this.setState({isLogged: true, user: user});
        }
    }

    handleChange = (value) => {
        this.setState({
            messageInfo: {
                message: value,
                name: this.state.user,
                reaction: null,
                id: `${Math.random().toString(36).slice(2)}`
            }
        });
    }

    updateRooms = (event, roomId) => {
        roomDetailsAPI.getAPIResponse(roomId).then((response) => {
            this.setState({rooms: response.data, currentRoomId: roomId});
        });
    }

    updateMessages = (message) => {
        let messageList = [...this.state.messages];
        messageList.push(message);
        this.setState({"messages": messageList});
    }

    render() {
        const {isLogged} = this.state;

        return (
            <div>
                {isLogged ?
                    <div className="app">
                        <RoomList user={this.state.user} updateRooms={this.updateRooms} rooms={this.state.rooms}/>
                        <MessageList messages={this.state.messages}
                                     updateRooms={this.updateRooms}
                                     updateMessages={this.updateMessages}
                                     rooms={this.state.rooms}/>
                        <div className="send-message-form">
                            <input
                                onChange={e => this.handleChange(e.target.value)}
                                value={this.state.message}
                                placeholder="Type a message..."
                                type="text"/>

                            <button className="send-message-button"
                                    onClick={e => this.updateMessages(this.state.messageInfo)}>Send
                            </button>
                        </div>
                    </div> :
                    <EnterChat logIn={this.logIn}/>}
            </div>
        );
    }
}

export default App
