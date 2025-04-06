import getFormGroup from "../../../getFormGroup/getFormGroup";
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

  const descriptioFormGroup = document.createElement("div");
  descriptioFormGroup.className = "form-group";
  descriptioFormGroup.innerHTML = `
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
    descriptioFormGroup,
    submitButton,
  );

  monumentForm.appendChild(formFieldset);

  return monumentForm;
};

export default getMonumentForm;
