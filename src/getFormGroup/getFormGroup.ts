const getFormGroup = (id: string, label: string): HTMLElement => {
  const formGroup = document.createElement("div");
  formGroup.className = "form-group";

  formGroup.innerHTML = `
    <div class="form-group">
      <label class="monument-form__label" for="${id}">${label}:</label>
      <input class="monument-form__input" id="${id}" type="string" required/>
    </div>
  `;

  return formGroup;
};

export default getFormGroup;
