import fetch from "node-fetch";
import { LyricsData } from "../../types/LyricsData";

export async function lyrics(title: string): Promise<LyricsData> {
  if (!title) throw new Error("No song title provided.");
  if (typeof title !== "string")
    throw new Error("Song title must be a string.");

  const data = (await fetch(
    `https://api.popcat.xyz/lyrics?song=${encodeURIComponent(title)}`
  )
    .then((res) => res.json())
    .catch((e) => {
      throw new Error(e);
    })) as LyricsData;

  if (data.error) throw new Error(data.error);
  return data;
}
