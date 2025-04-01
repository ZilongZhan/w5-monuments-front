import getHeader from "./getHeader";

describe("Given a Header component", () => {
  describe("When it renders", () => {
    const screen = document.createElement("div");

    afterEach(() => {
      screen.innerHTML = "";
    });

    test("Then it should show 'monuments.' inside a heading", () => {
      const expectedPageTitle = "monuments.";

      const Header = getHeader();
      screen.appendChild(Header);

      const pageTitle = screen.querySelector("h1");

      expect(pageTitle).not.toBeNull();
      expect(pageTitle?.textContent).toBe(expectedPageTitle);
    });

    test("Then it should show the website logo", () => {
      const expectedLogo = "Website logo";

      const Header = getHeader();
      screen.appendChild(Header);

      const websiteLogo = screen.querySelector("img");

      expect(websiteLogo).not.toBeNull();
      expect(websiteLogo?.alt).toBe(expectedLogo);
    });
  });
});
