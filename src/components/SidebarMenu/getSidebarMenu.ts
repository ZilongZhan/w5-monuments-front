import setCurrentPageIndicator from "../utils/setCurrentPageIndicator";
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

  const navList = document.createElement("ul");
  navList.className = "nav-list";
  navList.innerHTML = "<li><a class='nav-list__item' href='/'>Home</a></li>";
  setCurrentPageIndicator(navList);

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
