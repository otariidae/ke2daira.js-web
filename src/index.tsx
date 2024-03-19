import React from "react";
import { createRoot } from "react-dom/client";
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

const appRootDomNode = document.getElementById("app");
if (appRootDomNode !== null) {
  createRoot(appRootDomNode).render(<App />);
}
