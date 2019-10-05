import client from "./client";

export function createUser({ id, username, password }) {
  return client.post("/user", { id, username, password });
}
