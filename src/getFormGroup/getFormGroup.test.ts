import getFormGroup from "./getFormGroup";

describe("Given the getFormGroup function", () => {
  describe("When it receives 'name' and 'Name'", () => {
    const screen = document.createElement("div");

    afterEach(() => {
      screen.innerHTML = "";
    });

    test("Then it should show an input field", () => {
      const formGroup = getFormGroup("name", "Name");
      screen.appendChild(formGroup);

      const inputElement = screen.querySelector("input");

      expect(inputElement).not.toBeNull();
    });

    test("Then it should show a 'Name:' label", () => {
      const expectedLabel = "Name:";

      const formGroup = getFormGroup("name", "Name");
      screen.appendChild(formGroup);

      const labelElement = screen.querySelector("label");

      expect(labelElement).not.toBeNull();
      expect(labelElement?.textContent).toBe(expectedLabel);
    });
  });
});
