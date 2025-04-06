import getAllMonuments from "../client/getAllMonuments";

const url = import.meta.env.VITE_MONUMENTS_API_URL;

const monuments = await getAllMonuments(url);

export default monuments;
