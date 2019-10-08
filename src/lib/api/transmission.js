import client from "./client";
function transmissionAPI() {
  return client.get("/transmission/list");
}

export default transmissionAPI;
