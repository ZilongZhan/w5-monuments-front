const setCurrentPageIndicator = (navList: HTMLElement) => {
  const navListItems = navList.querySelectorAll("a");

  navListItems.forEach((navListItem) => {
    const isCurrentPage =
      window.location.pathname === navListItem.getAttribute("href");

    navListItem.classList.toggle("nav-list__item--current", isCurrentPage);
  });
};

export default setCurrentPageIndicator;
