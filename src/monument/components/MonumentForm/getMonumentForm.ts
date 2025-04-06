import getFormGroup from "../../../getFormGroup/getFormGroup";
import createMonument from "../../client/createMonument";
import { MonumentStructure } from "../../types";
import "./MonumentForm.css";

const getMonumentForm = (): HTMLElement => {
  const monumentForm = document.createElement("form");
  monumentForm.className = "monument-form";

  const formFieldset = document.createElement("fieldset");
  formFieldset.className = "form-fieldset";

  const fieldsetLegend = document.createElement("legend");
  fieldsetLegend.className = "fieldset-legend";
  fieldsetLegend.textContent = "New Monument";

  const nameFormGroup = getFormGroup("name", "Name");
  const cityFormGroup = getFormGroup("city", "City");
  const countryFormGroup = getFormGroup("country", "Country");
  const linkFormGroup = getFormGroup("image-url", "Link to image");

  const descriptionFormGroup = document.createElement("div");
  descriptionFormGroup.className = "form-group";
  descriptionFormGroup.innerHTML = `
    <label class="monument-form__label" for="description">Description:</label>
    <textarea class="monument-form__input" id="description" rows="5" required></textarea>
  `;

  const submitButton = document.createElement("button");
  submitButton.className = "button";
  submitButton.textContent = "Create monument";

  formFieldset.append(
    fieldsetLegend,
    nameFormGroup,
    cityFormGroup,
    countryFormGroup,
    linkFormGroup,
    descriptionFormGroup,
    submitButton,
  );

  monumentForm.appendChild(formFieldset);

  monumentForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = monumentForm.querySelector("#name") as HTMLInputElement;
    const city = monumentForm.querySelector("#city") as HTMLInputElement;
    const country = monumentForm.querySelector("#country") as HTMLInputElement;
    const imageUrl = monumentForm.querySelector(
      "#image-url",
    ) as HTMLInputElement;
    const description = monumentForm.querySelector(
      "#description",
    ) as HTMLTextAreaElement;

    const monumentData: MonumentStructure = {
      name: name.value,
      description: description.value,
      imageUrl: imageUrl.value,
      city: city.value,
      country: country.value,
    };

    createMonument(monumentData);
  });

  return monumentForm;
};

export default getMonumentForm;
