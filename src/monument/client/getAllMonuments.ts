import { MonumentStructure } from "../types";

const getAllMonuments = async (url: string): Promise<MonumentStructure[]> => {
  const response = await fetch(url);

  const { monuments } = (await response.json()) as {
    monuments: MonumentStructure[];
  };

  return monuments;
};

export default getAllMonuments;
