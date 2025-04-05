import getMonumentCardsList from "../../monument/components/MonumentCardsList/getMonumentCardsList";
import monuments from "../../monument/data/monuments";
import getHeader from "../Header/getHeader";
import getSidebarMenu from "../SidebarMenu/getSidebarMenu";

import "./App.css";

const getApp = (): HTMLElement => {
  const app = document.createElement("div");
  app.className = "app";

  const SidebarMenu = getSidebarMenu();

  const handleShowSidebar = (): void => {
    SidebarMenu.classList.toggle("show");
  };

  const Header = getHeader(handleShowSidebar);

  const mainContent = document.createElement("div");
  mainContent.className = "main-content";

  const MonumentCardsList = getMonumentCardsList(monuments);

  mainContent.appendChild(MonumentCardsList);

  app.append(Header, SidebarMenu, mainContent);

  return app;
};

export default getApp;
