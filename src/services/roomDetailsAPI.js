import axios from 'axios';

const ROOMS_API = 'http://localhost:3000/api/rooms';

export default {
    async getAPIResponse(room_id) {
        console.log("The room ID received ", room_id);
        const res = await axios.get(`${ROOMS_API}/${room_id}`);
        return res;
    }
};