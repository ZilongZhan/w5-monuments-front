import { MonumentStructure } from "../../types";

import "./MonumentCard.css";

const getMonumentCard = ({ name }: MonumentStructure): HTMLElement => {
  const monumentCard = document.createElement("article");
  monumentCard.className = "monument";

  const monumentName = document.createElement("h2");
  monumentName.className = "monument__name";
  monumentName.textContent = name;

  monumentCard.appendChild(monumentName);

  return monumentCard;
};

export default getMonumentCard;
