import getMonumentCardsList from "../../monument/components/MonumentCardsList/getMonumentCardsList";
import getMonumentForm from "../../monument/components/MonumentForm/getMonumentForm";
import monuments from "../../monument/data/monuments";
import { MonumentStructure } from "../../monument/types";
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

  const addNewMonument = (monument: MonumentStructure): void => {
    monuments.push(monument);
    window.location.href = "/";
  };

  const mainContent = document.createElement("div");
  mainContent.className = "main-content";

  const Header = getHeader(handleShowSidebar);

  if (window.location.pathname === "/form") {
    const MonumentForm = getMonumentForm(addNewMonument);

    mainContent.appendChild(MonumentForm);
  }

  if (window.location.pathname === "/") {
    const MonumentCardsList = getMonumentCardsList(monuments);

    mainContent.appendChild(MonumentCardsList);
  }

  app.append(Header, SidebarMenu, mainContent);

  return app;
};

export default getApp;
