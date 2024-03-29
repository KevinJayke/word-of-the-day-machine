import Definitions from "@/components/Definitions";
import Word from "@/components/Word";
import { format } from "date-fns";

async function getData() {
  const today = format(new Date(), "yyyy-MM-dd");
  const apiKey = process.env.API_KEY;
  const baseUrl = process.env.BASE_URL;
  const response = await fetch(
    `${baseUrl}/motdujour?date=${today}&api_key=${apiKey}`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export default async function WordApi({ isDefinition }) {
  const data = await getData();

  if (isDefinition) return <Definitions definitions={data?.definitions} />;
  else return <Word word={data?.mot} />;
}
