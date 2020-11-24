import React from "react";
import { render } from "react-dom";
import App from "./App";

// Global augmentation
// ref: https://www.typescriptlang.org/docs/handbook/declaration-merging.html#global-augmentation
declare global {
  interface Window {
    kuromojin?: {
      dicPath?: string;
    };
  }
}

window.kuromojin = {
  dicPath: "./dict",
};

render(<App />, document.getElementById("app"));
