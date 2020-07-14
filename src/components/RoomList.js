import React from 'react'
import roomsAPI from '../services/roomsAPI'

class RoomList extends React.Component {
    constructor(){
        super();
        this.state = {
            rooms: "",
            roomDetails: ""
        }
    }

    componentDidMount(){
        roomsAPI.getAPIResponse().then((response) =>{
           this.setState({rooms: response.data});
        });
    }

    render () {
        const { rooms } = this.state;
        return (
            <div className="rooms-list">
                <div className="user">{this.props.user}</div>
                <ul>
                    {rooms && rooms.map((room, item)=>{
                       return ( <li key={room.id} onClick={e => this.props.updateRooms(e, room.id)}>{room.name}</li>)
                    })}
                </ul>
            </div>
        )
    }
}

export default RoomList