import getMonumentForm from "./getMonumentForm";

describe("Given the MonumentForm component", () => {
  describe("When it renders", () => {
    const screen = document.createElement("div");

    afterEach(() => {
      screen.innerHTML = "";
    });

    test("Then it should show 'Name:', and an input field", () => {
      const expectedLabel = "Name:";

      const MonumentForm = getMonumentForm();
      screen.appendChild(MonumentForm);

      const inputElement = screen.querySelector("#name");

      expect(inputElement).not.toBeNull();
      expect(screen.textContent).toContain(expectedLabel);
    });

    test("Then it should show 'Description:' and a text box", () => {
      const expectedLabel = "Description:";

      const MonumentForm = getMonumentForm();
      screen.appendChild(MonumentForm);

      const textareaElement = screen.querySelector("#description");

      expect(textareaElement).not.toBeNull();
      expect(screen.textContent).toContain(expectedLabel);
    });

    test("Then it should show 'Link to image:' and an input field", () => {
      const expectedLabel = "Link to image:";

      const MonumentForm = getMonumentForm();
      screen.appendChild(MonumentForm);

      const inputElement = screen.querySelector("#image-url");

      expect(inputElement).not.toBeNull();
      expect(screen.textContent).toContain(expectedLabel);
    });

    test("Then it should show 'City:' and an input field", () => {
      const expectedLabel = "City:";

      const MonumentForm = getMonumentForm();
      screen.appendChild(MonumentForm);

      const inputElement = screen.querySelector("#city");

      expect(inputElement).not.toBeNull();
      expect(screen.textContent).toContain(expectedLabel);
    });

    test("Then it should show 'Country:' and an input field", () => {
      const expectedLabel = "Country:";

      const MonumentForm = getMonumentForm();
      screen.appendChild(MonumentForm);

      const inputElement = screen.querySelector("#country");

      expect(inputElement).not.toBeNull();
      expect(screen.textContent).toContain(expectedLabel);
    });

    test("Then it should show a 'Create monument' button", () => {
      const expectedButtonText = "Create monument";

      const MonumentForm = getMonumentForm();
      screen.appendChild(MonumentForm);

      const buttonElement = screen.querySelector("button");

      expect(buttonElement).not.toBeNull();
      expect(buttonElement?.textContent).toBe(expectedButtonText);
    });
  });
});
