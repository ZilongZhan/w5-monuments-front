import "./Header.css";

const getHeader = (): HTMLElement => {
  const header = document.createElement("header");
  header.className = "main-header";

  header.innerHTML = `
    <img class="page-logo" src="monument.svg" alt="Website logo" width="60" height="60"/>
    <h1 class="page-title">monuments.</h1>
    `;

  return header;
};

export default getHeader;
