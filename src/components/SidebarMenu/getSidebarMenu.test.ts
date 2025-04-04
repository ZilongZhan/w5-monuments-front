import getSidebarMenu from "./getSidebarMenu";

describe("Given the SidebarMenu component", () => {
  describe("When it renders", () => {
    const screen = document.createElement("div");

    afterEach(() => {
      screen.innerHTML = "";
    });

    test("Then it should show a button to close the sidebar", () => {
      const expectedAriaLabel = "Close sidebar";

      const SidebarMenu = getSidebarMenu();
      screen.appendChild(SidebarMenu);

      const buttonElement = screen.querySelector("button");

      expect(buttonElement).not.toBeNull();
      expect(buttonElement?.ariaLabel).toBe(expectedAriaLabel);
    });

    test("Then it should show a link to home", () => {
      const expectedText = "Home";

      const SidebarMenu = getSidebarMenu();
      screen.appendChild(SidebarMenu);

      const anchorElement = screen.querySelector("a");

      expect(anchorElement).not.toBeNull();
      expect(anchorElement?.textContent).toBe(expectedText);
    });
  });
});
