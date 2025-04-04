import { Location, MonumentStructure } from "./types";

class Monument implements MonumentStructure {
  public city: string;
  public country: string;

  constructor(
    public name: string,
    public description: string,
    public imageUrl: string,
    { city, country }: Location,
  ) {
    this.city = city;
    this.country = country;
  }
}

export default Monument;
