import React from 'react'
import roomDetailsAPI from '../services/roomDetailsAPI'

class RoomDetails extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            rooms: ""
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.rooms !== prevState.rooms) {
            return true;
        }
    }

    componentWillMount(){
        let { roomId } = this.props;
        roomDetailsAPI.getAPIResponse(roomId || 0).then((response) =>{
            this.setState({rooms: response.data});
        });
    }

    render () {
        const { rooms } = (this.props.rooms) ?  this.props : this.state;

        return (
            <div className="chat-room-header">
                <div className="chat-room-name">{rooms.name}</div>
                <div className="chat-room-users">
                    {rooms && rooms.users.map((user, item)=>{
                        return ( <span key={item}>{user},</span>)
                    })}
                </div>
            </div>
        )
    }
}

export default RoomDetails