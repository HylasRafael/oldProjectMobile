import axios from "axios";

const Api = axios.create({
    baseURL: 'http://10.60.46.43:4000',
});

export default Api;