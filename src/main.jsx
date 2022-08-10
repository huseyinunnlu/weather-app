import ReactDOM from "react-dom/client";
import App from "./App";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import "./assets/index.scss";
import { Provider } from "react-redux";
import store from "./store";
import { Suspense } from "react";
import { history } from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <div className="bg-indigo-700 min-h-screen h-full w-full">
        <Suspense fallback={<div>Loading...</div>}>
          <App />
        </Suspense>
      </div>
    </HistoryRouter>
  </Provider>
);
