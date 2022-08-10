import React, { useEffect } from "react";
import { Navigate } from "react-router";
import { history } from "../../router";

function RequireApiKey({ children }) {
  if (localStorage.getItem("API_KEY")) {
    return <Navigate to="/" />;
  }

  return <div>{children}</div>;
}

export default RequireApiKey;
