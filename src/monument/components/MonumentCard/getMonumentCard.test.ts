import { machuPicchu } from "../../fixtures";
import getMonumentCard from "./getMonumentCard";

describe("Given the MonumentCard component", () => {
  describe("When it receives Machu Picchu and it renders", () => {
    test("Then it should show 'Machu Picchu' in a heading", () => {
      const screen = document.createElement("div");

      const expectedName = "Machu Picchu";

      const MonumentCard = getMonumentCard(machuPicchu);
      screen.appendChild(MonumentCard);

      const headingElement = screen.querySelector("h2");

      expect(headingElement).not.toBeNull();
      expect(headingElement?.textContent).toBe(expectedName);
    });
  });
});
