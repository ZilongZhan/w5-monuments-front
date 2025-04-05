import Monument from "./Monument";

const machuPicchu = new Monument(
  "Machu Picchu",
  "Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru, above the Urubamba River valley.",
  "http://machupichu.com/machupichu.webp",
  {
    city: "Cusco",
    country: "Peru",
  },
);

const greatPyramidOfGiza = new Monument(
  "Great Pyramid of Giza",
  "The Great Pyramid of Giza is the largest Egyptian pyramid. It served as the tomb of pharaoh Khufu, who ruled during the Fourth Dynasty of the Old Kingdom.",
  "http://pyramidofgiza.com/pyramid.webp",
  {
    city: "Giza",
    country: "Egypt",
  },
);

const bigBen = new Monument(
  "Big Ben",
  "Big Ben is a British cultural icon. It is one of the most prominent symbols of the United Kingdom and parliamentary democracy.",
  "http://bigben.com/bigben.webp",
  { city: "London", country: "United Kingdom" },
);

export { machuPicchu, greatPyramidOfGiza, bigBen };
