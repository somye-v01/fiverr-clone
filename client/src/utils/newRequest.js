import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://fiverr-backend-ten.vercel.app/api"
});


export default newRequest;
