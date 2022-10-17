import fetch from "node-fetch";
import { NPMData } from "../types";

export async function npm(pkg: string): Promise<NPMData> {
  if (!pkg) throw new Error("No package name provided.");
  if (typeof pkg !== "string")
    throw new Error("Package name must be a string.");

  const data = (await fetch(
    `https://api.popcat.xyz/subreddit/${encodeURIComponent(pkg)}`
  )
    .then((res) => res.json())
    .catch((e) => {
      throw new Error(e);
    })) as NPMData;

  if (data.error) throw new Error(data.error);
  return data;
}
