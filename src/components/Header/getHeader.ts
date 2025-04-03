import setCurrentPageIndicator from "../utils/setCurrentPageIndicator";
import "./Header.css";

const getHeader = (handleShowSidebar: () => void): HTMLElement => {
  const header = document.createElement("header");
  header.className = "main-header";

  const titleContainer = document.createElement("div");
  titleContainer.className = "title-container";

  const logo = document.createElement("img");
  logo.className = "page-logo";
  logo.src = "monument.svg";
  logo.alt = "Website logo";
  logo.width = 60;
  logo.height = 60;

  const longTitle = document.createElement("h1");
  longTitle.classList.add("page-title", "page-title--long");
  longTitle.textContent = "monuments.";

  const shortTitle = document.createElement("h1");
  shortTitle.classList.add("page-title", "page-title--short");
  shortTitle.textContent = "mnmnts.";
  shortTitle.ariaLabel = "monuments.";

  titleContainer.append(logo, longTitle, shortTitle);

  const headerNav = document.createElement("nav");
  headerNav.className = "main-header__nav";

  const navList = document.createElement("ul");
  navList.className = "nav-list";
  navList.innerHTML = "<li><a class='nav-list__item' href='/'>Home</a></li>";

  setCurrentPageIndicator(navList);

  headerNav.appendChild(navList);

  const hamburgerMenuButton = document.createElement("button");

  hamburgerMenuButton.className = "hamburger-menu";
  hamburgerMenuButton.innerHTML = "&#9776;";

  hamburgerMenuButton.addEventListener("click", () => {
    handleShowSidebar();
  });

  header.append(titleContainer, headerNav, hamburgerMenuButton);

  return header;
};

export default getHeader;
