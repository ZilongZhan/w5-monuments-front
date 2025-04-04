import getHeader from "./getHeader";

describe("Given a Header component", () => {
  describe("When it renders", () => {
    const screen = document.createElement("div");

    const handleShowSidebar = () => {};

    afterEach(() => {
      screen.innerHTML = "";
    });

    test("Then it should show 'mnmnts.' inside a heading", () => {
      const expectedPageTitle = "mnmnts.";

      const Header = getHeader(handleShowSidebar);
      screen.appendChild(Header);

      const pageTitles = screen.querySelectorAll("h1");
      const shortTitle = pageTitles[1];

      expect(shortTitle).not.toBeNull();
      expect(shortTitle.textContent).toBe(expectedPageTitle);
    });

    test("Then it should show 'monuments.' inside a heading", () => {
      const expectedPageTitle = "monuments.";

      const Header = getHeader(handleShowSidebar);
      screen.appendChild(Header);

      const pageTitles = screen.querySelectorAll("h1");
      const longTitle = pageTitles[0];

      expect(longTitle).not.toBeNull();
      expect(longTitle?.textContent).toBe(expectedPageTitle);
    });

    test("Then it should show the website logo", () => {
      const expectedLogo = "Website logo";

      const Header = getHeader(handleShowSidebar);
      screen.appendChild(Header);

      const websiteLogo = screen.querySelector("img");

      expect(websiteLogo).not.toBeNull();
      expect(websiteLogo?.alt).toBe(expectedLogo);
    });

    test("Then it should show a link to home", () => {
      const expectedText = "Home";

      const Header = getHeader(handleShowSidebar);
      screen.appendChild(Header);

      const anchorElement = screen.querySelector("a");

      expect(anchorElement).not.toBeNull();
      expect(anchorElement?.textContent).toBe(expectedText);
    });
  });
});
