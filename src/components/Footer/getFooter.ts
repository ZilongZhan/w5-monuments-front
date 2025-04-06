import "./Footer.css";

const getFooter = (): HTMLElement => {
  const footer = document.createElement("footer");
  footer.className = "main-footer";
  footer.textContent = "© 2025 Zilong Zhan. All rights reserved";

  return footer;
};

export default getFooter;
