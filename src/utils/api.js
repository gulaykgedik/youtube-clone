import axios from "axios";

const api = axios.create({
  baseURL: "https://yt-api.p.rapidapi.com",

  headers: {
    "x-rapidapi-key": "32b696e1f5mshb0d41586fa577adp12e531jsn9effa32a4972",
    "x-rapidapi-host": "yt-api.p.rapidapi.com",
  },
});
export default api;
