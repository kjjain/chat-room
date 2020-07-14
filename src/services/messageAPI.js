import axios from 'axios';

const MESSAGE_API = 'http://localhost:3000/api/rooms';

export default {
    async getAPIResponse(room_id) {
        let room = room_id || 0;
        const res = await axios.get(`${MESSAGE_API}/${room}/messages`);
        return res;
    }
};