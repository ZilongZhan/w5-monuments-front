import getByText from "./getByText";

describe("Given the getByText function", () => {
  describe("When it receives a screen that says 'Hello World'", () => {
    const screen = document.createElement("div");

    const textContainer = document.createElement("span");
    textContainer.textContent = "Hello World";

    afterEach(() => {
      screen.innerHTML = "";
    });

    describe("And 'Hello World'", () => {
      test("Then it should find an element that says 'Hello World", () => {
        const expectedText = "Hello World";
        screen.appendChild(textContainer);

        const element = getByText(screen, "Hello World");

        expect(element).not.toBeUndefined();
        expect(element?.textContent).toBe(expectedText);
      });
    });

    describe("And 'Goodbye World'", () => {
      test("Then it should return undefined", () => {
        const element = getByText(screen, "Goodbye World");

        expect(element).toBeUndefined();
      });
    });

    describe("And 'Hello World123'", () => {
      test("Then it should return undefined", () => {
        const element = getByText(screen, "Hello World123");

        expect(element).toBeUndefined();
      });
    });
  });
});
