import axios from "axios";

const KEY = "AIzaSyA4FB0vCvoP9jWGLgSQRNmhQWhi0wRfTqY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: "5",
    key: KEY
  }
});
