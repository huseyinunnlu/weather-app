import { useState } from "react";
import { Routes, useRoutes } from "react-router";
import { routes } from "./router";
function App() {
  return useRoutes(routes);
}

export default App;
