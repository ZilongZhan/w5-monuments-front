import { bigBen, greatPyramidOfGiza, machuPicchu } from "../../fixtures";
import getMonumentCardsList from "./getMonumentCardsList";

describe("Given the MonumentCardsList component", () => {
  describe("When it receives Machu Picchu, Great Pyramid of Giza, and Big Ben", () => {
    test("Then it should show 'Machu Picchu', 'Great Pyramid of Giza', and 'Big Ben' inside a heading each", () => {
      const screen = document.createElement("div");

      const monuments = [machuPicchu, greatPyramidOfGiza, bigBen];
      const expectedNames = [
        machuPicchu.name,
        greatPyramidOfGiza.name,
        bigBen.name,
      ];

      const MonumentCardsList = getMonumentCardsList(monuments);
      screen.appendChild(MonumentCardsList);

      const headingElements = screen.querySelectorAll("h2");

      headingElements.forEach((headingElement, position) => {
        expect(headingElement.textContent).toBe(expectedNames[position]);
      });
    });
  });
});
