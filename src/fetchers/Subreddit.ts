import fetch from "node-fetch";
import { SubredditData } from "../types";

export async function subreddit(name: string): Promise<SubredditData> {
  if (!name) throw new Error("No subreddit name provided.");
  if (typeof name !== "string")
    throw new Error("Subreddit name must be a string.");

  const data = (await fetch(
    `https://api.popcat.xyz/subreddit/${encodeURIComponent(name)}`
  )
    .then((res) => res.json())
    .catch((e) => {
      throw new Error(e);
    })) as SubredditData;

  if (data.error) throw new Error(data.error);
  return data;
}
