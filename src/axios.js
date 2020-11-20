import axios from "axios";

const ins = axios.create({
  baseURL: "https://t-inder.herokuapp.com",
});

export default ins;
