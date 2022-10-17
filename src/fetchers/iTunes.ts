import fetch from "node-fetch";
import { iTunesData } from "../types";

export async function itunes(title: string): Promise<iTunesData> {
  if (!title) throw new Error("No song name provided.");
  if (typeof title !== "string") throw new Error("Song name must be a string.");

  const data = (await fetch(
    `https://api.popcat.xyz/itunes?q=${encodeURIComponent(title)}`
  )
    .then((res) => res.json())
    .catch((e) => {
      throw new Error(e);
    })) as iTunesData;

  if (data.error) throw new Error(data.error);
  return data;
}
