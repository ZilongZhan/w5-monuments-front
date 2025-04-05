import { MonumentStructure } from "../../types";

import "./MonumentCard.css";

const getMonumentCard = ({
  name,
  description,
  imageUrl,
  city,
  country,
}: MonumentStructure): HTMLElement => {
  const monumentCard = document.createElement("article");
  monumentCard.className = "monument";

  const monumentName = document.createElement("h2");
  monumentName.className = "monument__name";
  monumentName.textContent = name;

  const monumentImage = document.createElement("img");
  monumentImage.className = "monument__image";
  monumentImage.src = imageUrl;
  monumentImage.alt = `Iconic angle of ${name}`;
  monumentImage.width = 220;
  monumentImage.height = 147;

  const monumentDescription = document.createElement("p");
  monumentDescription.className = "monument__description";
  monumentDescription.textContent = description;

  const monumentLocation = document.createElement("span");
  monumentLocation.className = "monument__location";
  monumentLocation.textContent = `${city}, ${country}`;

  monumentCard.append(
    monumentName,
    monumentImage,
    monumentDescription,
    monumentLocation,
  );

  return monumentCard;
};

export default getMonumentCard;
