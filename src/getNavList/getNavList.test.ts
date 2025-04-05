import getNavList from "./getNavList";

describe("Given the getNavList function", () => {
  describe("When it is called", () => {
    test("Then it should show a link to home", () => {
      const screen = document.createElement("div");

      const expectedAnchorText = "Home";

      const navList = getNavList();
      screen.appendChild(navList);

      const anchorElement = screen.querySelector("a");

      expect(anchorElement).not.toBeNull();
      expect(anchorElement?.textContent).toBe(expectedAnchorText);
    });
  });
});
