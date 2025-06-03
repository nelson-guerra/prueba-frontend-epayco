import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configStore } from "./redux/store.ts";
import { App } from "./app.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <Provider store={configStore}>
         <App />
      </Provider>
   </React.StrictMode>
);
