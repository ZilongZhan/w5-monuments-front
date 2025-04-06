import getFooter from "./getFooter";

describe("Given the Footer component", () => {
  describe("When it renders", () => {
    test("Then it should show '© 2025 Zilong Zhan. All rights reserved'", () => {
      const screen = document.createElement("div");

      const expectedText = "© 2025 Zilong Zhan. All rights reserved";

      const Footer = getFooter();
      screen.appendChild(Footer);

      expect(screen.textContent).toContain(expectedText);
    });
  });
});
