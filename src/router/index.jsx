import React from "react";
import { createBrowserHistory } from "history";

const ApiKey = React.lazy(() => import("../views/ApiKey"));
const Index = React.lazy(() => import("../views/Index"));
const Details = React.lazy(() => import("../views/Details"));
const NoApiKey = React.lazy(() => import("../components/Auth/NoApiKey"));
const RequireApiKey = React.lazy(() =>
  import("../components/Auth/RequireApiKey")
);
const CheckCity = React.lazy(() => import("../components/Auth/CheckCity"));

export const history = createBrowserHistory();

export const routes = [
  {
    path: "/apikey",
    element: (
      <NoApiKey>
        <ApiKey />
      </NoApiKey>
    ),
  },

  {
    path: "/",
    element: (
      <RequireApiKey>
        <Index />
      </RequireApiKey>
    ),
  },
  {
    path: "/:id",
    element: (
      <CheckCity>
        <Details />
      </CheckCity>
    ),
  },
];
