import getHeader from "../Header/getHeader";
import getSidebarMenu from "../SidebarMenu/getSidebarMenu";

const getApp = (): HTMLElement => {
  const app = document.createElement("div");

  const SidebarMenu = getSidebarMenu();

  const handleShowSidebar = (): void => {
    SidebarMenu.classList.toggle("show");
  };

  const Header = getHeader(handleShowSidebar);

  app.append(Header, SidebarMenu);

  return app;
};

export default getApp;
