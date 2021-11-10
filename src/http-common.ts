import axios from "axios";

export default axios.create({
  baseURL: "https://6188e520d0821900178d75df.mockapi.io",
  headers: {
    "Content-type": "application/json"
  }
});