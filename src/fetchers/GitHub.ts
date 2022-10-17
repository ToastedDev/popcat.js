import fetch from "node-fetch";
import { GitHubData } from "../types/GitHubData";

export async function github(username: string): Promise<GitHubData> {
  if (!username) throw new Error("No username provided.");
  if (typeof username !== "string")
    throw new Error("Username must be a string.");

  const data = (await fetch(`https://api.popcat.xyz/github/${username}`)
    .then((res) => res.json())
    .catch((e) => {
      throw new Error(e);
    })) as GitHubData;

  if (data.error) throw new Error(data.error);
  return data;
}
