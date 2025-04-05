import getByText from "../../../getByText/getByText";
import { machuPicchu } from "../../fixtures";
import getMonumentCard from "./getMonumentCard";

describe("Given the MonumentCard component", () => {
  describe("When it receives Machu Picchu and it renders", () => {
    const screen = document.createElement("div");

    afterEach(() => {
      screen.innerHTML = "";
    });

    test("Then it should show 'Machu Picchu' in a heading", () => {
      const expectedName = "Machu Picchu";

      const MonumentCard = getMonumentCard(machuPicchu);
      screen.appendChild(MonumentCard);

      const headingElement = screen.querySelector("h2");

      expect(headingElement).not.toBeNull();
      expect(headingElement?.textContent).toBe(expectedName);
    });

    test("Then it should show 'Cusco, Peru'", () => {
      const expectedLocation = "Cusco, Peru";

      const MonumentCard = getMonumentCard(machuPicchu);
      screen.appendChild(MonumentCard);

      const monumentLocation = getByText(screen, expectedLocation);

      expect(monumentLocation).not.toBeUndefined();
    });

    test("Then it should show 'Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru, above the Urubamba River valley.'", () => {
      const expectedDescription =
        "Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru, above the Urubamba River valley.";

      const MonumentCard = getMonumentCard(machuPicchu);
      screen.appendChild(MonumentCard);

      const monumentDescription = getByText(screen, expectedDescription);

      expect(monumentDescription).not.toBeUndefined();
    });

    test("Then it should show iconic angle of Machu Picchu", () => {
      const expectedAlt = "Iconic angle of Machu Picchu";

      const MonumentCard = getMonumentCard(machuPicchu);
      screen.appendChild(MonumentCard);

      const monumentImage = screen.querySelector("img");

      expect(monumentImage).not.toBeNull();
      expect(monumentImage?.alt).toBe(expectedAlt);
    });
  });
});
