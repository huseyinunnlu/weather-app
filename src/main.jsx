import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./assets/index.scss";
import { Provider } from "react-redux";
import store from "./store";
import { Suspense } from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <div className="bg-indigo-700 h-screen w-full">
        <Suspense fallback={<div>Loading...</div>}>
          <App />
        </Suspense>
      </div>
    </BrowserRouter>
  </Provider>
);
