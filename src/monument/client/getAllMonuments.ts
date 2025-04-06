import { MonumentStructure } from "../types";
import { url } from ".";

const getAllMonuments = async (): Promise<MonumentStructure[]> => {
  const response = await fetch(url);

  const { monuments } = (await response.json()) as {
    monuments: MonumentStructure[];
  };

  return monuments;
};

export default getAllMonuments;
