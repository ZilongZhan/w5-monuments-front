import getApp from "./components/App/getApp";

import "./style.css";
import "@fontsource-variable/outfit/index.css";

const Root = document.querySelector<HTMLDivElement>("#root");

if (!Root) {
  throw new Error("Missing root element");
}

const App = getApp();

Root.appendChild(App);
