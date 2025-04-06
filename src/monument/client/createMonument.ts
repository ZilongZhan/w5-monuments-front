import { MonumentStructure } from "../types";
import { url } from ".";

const createMonument = async (
  monumentData: MonumentStructure,
): Promise<MonumentStructure> => {
  const response = await fetch(`${url}/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(monumentData),
  });

  const monument = (await response.json()) as MonumentStructure;

  return monument;
};

export default createMonument;
