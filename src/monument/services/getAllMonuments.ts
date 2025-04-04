import { Monument } from "../types";

const getAllMonuments = async (url: string): Promise<Monument[]> => {
  const response = await fetch(url);

  const { monuments } = (await response.json()) as { monuments: Monument[] };

  return monuments;
};

export default getAllMonuments;
