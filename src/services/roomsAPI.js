import axios from 'axios';

const ROOMS_API = 'http://localhost:3000/api/rooms';

export default {
    async getAPIResponse() {
        const res = await axios.get(ROOMS_API);
        return res;
    }
};