import React, { useEffect } from "react";
import { Navigate } from "react-router";

function RequireApiKey({ children }) {
  if (!localStorage.getItem("API_KEY")) {
    return <Navigate to="/apikey" />;
  }

  return (
    <>
      <div>{children}</div>
    </>
  );
}

export default RequireApiKey;
