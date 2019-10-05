import client from "./client";

export function createToken({ id, password }) {
  return client.post("/token", { id, password });
}
