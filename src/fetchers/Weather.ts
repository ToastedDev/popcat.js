import fetch from "node-fetch";
import { WeatherData } from "../types";

export async function weather(query: string): Promise<WeatherData> {
  if (!query) throw new Error("No query provided.");
  if (typeof query !== "string") throw new Error("Query must be a string.");

  const data = (await fetch(
    `https://api.popcat.xyz/weather?q=${encodeURIComponent(query)}`
  )
    .then((res) => res.json())
    .catch((e) => {
      throw new Error(e);
    })) as WeatherData;

  if (!data[0]) throw new Error("Not found.");
  return data;
}
