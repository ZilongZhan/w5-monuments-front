import { MonumentStructure } from "../../types";
import getMonumentCard from "../MonumentCard/getMonumentCard";

import "./MonumentCardsList.css";

const getMonumentCardsList = (monuments: MonumentStructure[]): HTMLElement => {
  const monumentCardList = document.createElement("ul");
  monumentCardList.className = "monuments";

  monuments.forEach((monument) => {
    const MonumentCard = getMonumentCard(monument);

    monumentCardList.appendChild(MonumentCard);
  });

  return monumentCardList;
};

export default getMonumentCardsList;
