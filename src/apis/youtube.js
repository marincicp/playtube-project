import axios from "axios";

const KEY = "AIzaSyBelKLCshCvlVjNuSx1T16rBylLNr7z5Bo";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 7,
    key: KEY,
  },
});
