import { baseURL } from "./client";

export default function getViewLink(token) {
  return baseURL + "/view?token=" + token;
}
