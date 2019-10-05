import React from "react";
import { Redirect } from "react-router-dom";
import useLoginData from "../lib/useLoginData";

const NotLoginRedirect = () => {
  const login = useLoginData();
  if (!login) {
    return <Redirect to="/" />;
  }
  return null;
};
export default NotLoginRedirect;
