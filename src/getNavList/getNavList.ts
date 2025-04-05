const getNavList = (): HTMLElement => {
  const navList = document.createElement("ul");
  navList.className = "nav-list";
  navList.innerHTML = "<li><a class='nav-list__item' href='/'>Home</a></li>";

  const navListItems = navList.querySelectorAll("a");

  navListItems.forEach((navListItem) => {
    const isCurrentPage =
      window.location.pathname === navListItem.getAttribute("href");

    navListItem.classList.toggle("nav-list__item--current", isCurrentPage);
  });

  return navList;
};

export default getNavList;
