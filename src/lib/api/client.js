import axios from "axios";

export const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://api.jkss.xyz"
    : "http://192.168.0.6:3001";
const client = axios.create({
  baseURL
});
export default client;
