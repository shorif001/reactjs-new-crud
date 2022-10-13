import Axios from 'axios';
export const axios = Axios.create({baseURL: "http://localhost:3001",
header: {Auth: "Simple Auth"},
timeout: 3000,
})