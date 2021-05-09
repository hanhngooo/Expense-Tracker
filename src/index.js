import React from "react";
import ReactDOM from "react-dom";
import { SpeechProvider } from "@speechly/react-client";
import App from "./App";
import "./index.css";
import { Provider } from "./context/context";
ReactDOM.render(
  <SpeechProvider appId="4b12d544-f016-4c0c-8348-580a3be1b7df" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,

  document.getElementById("root")
);
