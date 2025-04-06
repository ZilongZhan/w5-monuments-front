import { machuPicchu } from "../../fixtures";
import getMonumentCard from "./getMonumentCard";

describe("Given the MonumentCard component", () => {
  describe("When it receives Machu Picchu", () => {
    const screen = document.createElement("div");

    afterEach(() => {
      screen.innerHTML = "";
    });

    test("Then it should show 'Machu Picchu' in a heading", () => {
      const expectedName = machuPicchu.name;

      const MonumentCard = getMonumentCard(machuPicchu);
      screen.appendChild(MonumentCard);

      const headingElement = screen.querySelector("h2");

      expect(headingElement).not.toBeNull();
      expect(headingElement?.textContent).toBe(expectedName);
    });

    test("Then it should show 'Cusco, Peru'", () => {
      const expectedLocation = `${machuPicchu.city}, ${machuPicchu.country}`;

      const MonumentCard = getMonumentCard(machuPicchu);
      screen.appendChild(MonumentCard);

      expect(screen.textContent).toContain(expectedLocation);
    });

    test("Then it should show 'Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru, above the Urubamba River valley.'", () => {
      const expectedDescription = machuPicchu.description;

      const MonumentCard = getMonumentCard(machuPicchu);
      screen.appendChild(MonumentCard);

      expect(screen.textContent).toContain(expectedDescription);
    });

    test("Then it should show iconic angle of Machu Picchu", () => {
      const expectedAlt = `Iconic angle of ${machuPicchu.name}`;

      const MonumentCard = getMonumentCard(machuPicchu);
      screen.appendChild(MonumentCard);

      const monumentImage = screen.querySelector("img");

      expect(monumentImage).not.toBeNull();
      expect(monumentImage?.alt).toBe(expectedAlt);
    });
  });
});
