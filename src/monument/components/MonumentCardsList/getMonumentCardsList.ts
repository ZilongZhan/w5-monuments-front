import { MonumentStructure } from "../../types";
import getMonumentCard from "../MonumentCard/getMonumentCard";

import "./MonumentCardsList.css";

const getMonumentCardsList = (monuments: MonumentStructure[]): HTMLElement => {
  const monumentCardList = document.createElement("ul");
  monumentCardList.className = "monuments";

  monuments.forEach((monument) => {
    const monumentWrapper = document.createElement("li");

    const MonumentCard = getMonumentCard(monument);

    monumentWrapper.appendChild(MonumentCard);

    monumentCardList.appendChild(monumentWrapper);
  });

  return monumentCardList;
};

export default getMonumentCardsList;
