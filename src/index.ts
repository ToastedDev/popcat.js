import fetch from "node-fetch";

export type PopcatError = {
  message: string;
  isError: boolean;
};

export * from "popcat-chatbot";
export * from "./fetchers/Color";
export * from "./fetchers/WelcomeCard";
export * from "./fetchers/GitHub";

export function screenshot(url: string): string {
  if (!url) throw new Error("No URL provided.");

  return `https://api.popcat.xyz/screenshot?url=${encodeURIComponent(url)}`;
}

export async function shorten(url: string, slug: string): Promise<string> {
  if (!url) throw new Error("No URL provided.");
  if (!slug) throw new Error("No slug provided.");

  const res = (await fetch(
    `https://api.popcat.xyz/shorten?url=${encodeURIComponent(
      url
    )}&extension=${encodeURIComponent(slug)}`
  )
    .then((res) => res.json())
    .catch((e) => {
      throw new Error(e);
    })) as { url: string; shortened: string; error: PopcatError };

  if (res.error) throw new Error(res.error.message);

  return Promise.resolve(res.shortened);
}
