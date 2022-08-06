import React from "react";

const ApiKey = React.lazy(() => import("../views/ApiKey"));

const routes = [
  {
    path: "/apikey",
    element: <ApiKey />,
    requireKey: false,
  },
];

export default routes;
