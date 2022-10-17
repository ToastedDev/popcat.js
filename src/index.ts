import fetch from "node-fetch";

export * from "popcat-chatbot";
export * from "./fetchers/Color";
export * from "./fetchers/GitHub";
export * from "./fetchers/Lyrics";
export * from "./fetchers/WelcomeCard";

export function screenshot(url: string): string {
  if (!url) throw new Error("No URL provided.");

  return `https://api.popcat.xyz/screenshot?url=${encodeURIComponent(url)}`;
}

export async function shorten(url: string, slug: string): Promise<string> {
  if (!url) throw new Error("No URL provided.");
  if (!slug) throw new Error("No slug provided.");

  const data = (await fetch(
    `https://api.popcat.xyz/shorten?url=${encodeURIComponent(
      url
    )}&extension=${encodeURIComponent(slug)}`
  )
    .then((res) => res.json())
    .catch((e) => {
      throw new Error(e);
    })) as { url: string; shortened: string; error?: string };

  if (data.error) throw new Error(data.error);

  return Promise.resolve(data.shortened);
}

export async function pickupLine(): Promise<string> {
  const data = await fetch("https://api.popcat.xyz/pickuplines")
    .then((res) => res.json())
    .catch((e) => {
      throw new Error(e);
    });

  return data.pickupline;
}
