import getHeader from "./components/Header/getHeader";
import getSidebarMenu from "./components/SidebarMenu/getSidebarMenu";

import "./style.css";
import "@fontsource-variable/outfit/index.css";

const App = document.querySelector<HTMLDivElement>("#app");

if (!App) {
  throw new Error("Missing app element");
}

const SidebarMenu = getSidebarMenu();

const handleShowSidebar = (): void => {
  SidebarMenu.classList.toggle("show");
};

const Header = getHeader(handleShowSidebar);

App.append(Header, SidebarMenu);
