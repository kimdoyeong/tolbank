import client from "./client";
import getViewLink from "./getViewLink";
export function searchFile(file) {
  const _file = file.replace(/^\//, "");
  return client.get(`/file/${_file}`, {
    headers: {
      "x-access-token": window.localStorage && localStorage.getItem("token")
    }
  });
}

export function viewFile(file) {
  const _file = file.replace(/^\//, "");
  return client.post(
    `/view/${_file}/token`,
    {},
    {
      headers: {
        "x-access-token": window.localStorage && localStorage.getItem("token")
      }
    }
  );
}

export function getFileData(token) {
  return client.get(getViewLink(token));
}
