import getNavList from "../../getNavList/getNavList";
import "./SidebarMenu.css";

const getSidebarMenu = (): HTMLElement => {
  const backdrop = document.createElement("div");
  backdrop.className = "backdrop";

  backdrop.addEventListener("click", (event) => {
    if (event.target !== backdrop) {
      return;
    }

    backdrop.classList.toggle("show");
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      backdrop.classList.remove("show");
    }
  });

  window.addEventListener("resize", () => {
    backdrop.classList.remove("show");
  });

  const sidebarMenu = document.createElement("nav");
  sidebarMenu.className = "sidebar-menu";

  const navList = getNavList();
  navList.classList.add("nav-list--vertical");

  const sidebarButton = document.createElement("button");
  sidebarButton.className = "close-sidebar-button";
  sidebarButton.ariaLabel = "Close sidebar";
  sidebarButton.textContent = "✖";

  sidebarButton.addEventListener("click", () => {
    backdrop.classList.remove("show");
  });

  sidebarMenu.append(sidebarButton, navList);
  backdrop.appendChild(sidebarMenu);

  return backdrop;
};

export default getSidebarMenu;
