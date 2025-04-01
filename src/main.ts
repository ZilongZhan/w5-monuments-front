import getHeader from "./components/Header/getHeader";

import "./style.css";
import "@fontsource-variable/outfit/index.css";

const App = document.querySelector<HTMLDivElement>("#app");

if (!App) {
  throw new Error("Missing app element");
}

const Header = getHeader();

App.appendChild(Header);
