import ReactDom from "react-dom";
import React from "react";
import { App } from "./src/App";

const appRoot = window.document.createElement("div");
document.body.appendChild(appRoot);

ReactDom.render(<App />, appRoot);
