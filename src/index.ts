import fetch from "node-fetch";
import {
  CarData,
  MemeData,
  QuoteData,
  RandomColorData,
  ShowerThoughtData,
} from "./types";

export * from "popcat-chatbot";
export * from "./fetchers/Color";
export * from "./fetchers/GitHub";
export * from "./fetchers/Lyrics";
export * from "./fetchers/NPM";
export * from "./fetchers/PeriodicTable";
export * from "./fetchers/Subreddit";
export * from "./fetchers/Weather";
export * from "./fetchers/WelcomeCard";

export function screenshot(url: string): string {
  if (!url) throw new Error("No URL provided.");
  if (typeof url !== "string") throw new Error("URL must be a string.");
  if (!url.startsWith("https://")) throw new Error("URL must be valid.");

  return `https://api.popcat.xyz/screenshot?url=${encodeURIComponent(url)}`;
}

export function jail(image: string): string {
  if (!image) throw new Error("No image provided.");
  if (typeof image !== "string") throw new Error("Image must be a string.");
  if (!image.startsWith("https://"))
    throw new Error("Image must be a valid URL.");

  return `https://api.popcat.xyz/jail?image=${encodeURIComponent(image)}`;
}

export function communism(image: string): string {
  if (!image) throw new Error("No image provided.");
  if (typeof image !== "string") throw new Error("Image must be a string.");
  if (!image.startsWith("https://"))
    throw new Error("Image must be a valid URL.");

  return `https://api.popcat.xyz/communism?image=${encodeURIComponent(image)}`;
}

export function wanted(image: string): string {
  if (!image) throw new Error("No image provided.");
  if (typeof image !== "string") throw new Error("Image must be a string.");
  if (!image.startsWith("https://"))
    throw new Error("Image must be a valid URL.");

  return `https://api.popcat.xyz/wanted?image=${encodeURIComponent(image)}`;
}

export function gun(image: string): string {
  if (!image) throw new Error("No image provided.");
  if (typeof image !== "string") throw new Error("Image must be a string.");
  if (!image.startsWith("https://"))
    throw new Error("Image must be a valid URL.");

  return `https://api.popcat.xyz/gun?image=${encodeURIComponent(image)}`;
}

export function whoWouldWin(image1: string, image2: string): string {
  if (!image1) throw new Error("No image 1 provided.");
  if (typeof image1 !== "string") throw new Error("Image 1 must be a string.");
  if (!image1.startsWith("https://"))
    throw new Error("Image 1 must be a valid URL.");

  if (!image2) throw new Error("No image 2 provided.");
  if (typeof image2 !== "string") throw new Error("Image 2 must be a string.");
  if (!image2.startsWith("https://"))
    throw new Error("Image 2 must be a valid URL.");

  return `https://api.popcat.xyz/whowouldwin?image1=${encodeURIComponent(
    image1
  )}&image2=${encodeURIComponent(image2)}`;
}

export function ship(image1: string, image2: string): string {
  if (!image1) throw new Error("No image 1 provided.");
  if (typeof image1 !== "string") throw new Error("Image 1 must be a string.");
  if (!image1.startsWith("https://"))
    throw new Error("Image 1 must be a valid URL.");

  if (!image2) throw new Error("No image 2 provided.");
  if (typeof image2 !== "string") throw new Error("Image 2 must be a string.");
  if (!image2.startsWith("https://"))
    throw new Error("Image 2 must be a valid URL.");

  return `https://api.popcat.xyz/ship?user1=${encodeURIComponent(
    image1
  )}&user2=${encodeURIComponent(image2)}`;
}

export function sadCat(text: string): string {
  if (!text) throw new Error("No text provided.");
  if (typeof text !== "string") throw new Error("Text must be a string.");

  return `https://api.popcat.xyz/sadcat?text=${encodeURIComponent(text)}`;
}

export function oogway(text: string): string {
  if (!text) throw new Error("No text provided.");
  if (typeof text !== "string") throw new Error("Text must be a string.");

  return `https://api.popcat.xyz/sadcat?text=${encodeURIComponent(text)}`;
}

export function pooh(text1: string, text2: string): string {
  if (!text1) throw new Error("No text 1 provided.");
  if (!text2) throw new Error("No text 2 provided.");
  if (typeof text1 !== "string") throw new Error("Text 1 must be a string.");
  if (typeof text2 !== "string") throw new Error("Text 2 must be a string.");

  return `https://api.popcat.xyz/pooh?text1=${encodeURIComponent(
    text1
  )}&text2=${encodeURIComponent(text2)}`;
}

export function drake(text1: string, text2: string): string {
  if (!text1) throw new Error("No text 1 provided.");
  if (!text2) throw new Error("No text 2 provided.");
  if (typeof text1 !== "string") throw new Error("Text 1 must be a string.");
  if (typeof text2 !== "string") throw new Error("Text 2 must be a string.");

  return `https://api.popcat.xyz/drake?text1=${encodeURIComponent(
    text1
  )}&text2=${encodeURIComponent(text2)}`;
}

export function unforgivable(text: string): string {
  if (!text) throw new Error("No text provided.");
  if (typeof text !== "string") throw new Error("Text must be a string.");

  return `https://api.popcat.xyz/unforgivable?text=${encodeURIComponent(text)}`;
}

export function biden(text: string): string {
  if (!text) throw new Error("No text provided.");
  if (typeof text !== "string") throw new Error("Text must be a string.");

  return `https://api.popcat.xyz/biden?text=${encodeURIComponent(text)}`;
}

export function pikachu(text: string): string {
  if (!text) throw new Error("No text provided.");
  if (typeof text !== "string") throw new Error("Text must be a string.");

  return `https://api.popcat.xyz/pikachu?text=${encodeURIComponent(text)}`;
}

export async function lulcat(text: string): Promise<string> {
  if (!text) throw new Error("No text provided.");
  if (typeof text !== "string") throw new Error("Text must be a string.");

  const data = (await fetch(
    `https://api.popcat.xyz/lulcat?text=${encodeURIComponent(text)}`
  )
    .then((res) => res.json())
    .catch((e) => {
      throw new Error(e);
    })) as { text: string };

  return data.text;
}

export async function mock(text: string): Promise<string> {
  if (!text) throw new Error("No text provided.");
  if (typeof text !== "string") throw new Error("Text must be a string.");

  const data = (await fetch(
    `https://api.popcat.xyz/mock?text=${encodeURIComponent(text)}`
  )
    .then((res) => res.json())
    .catch((e) => {
      throw new Error(e);
    })) as { text: string };

  return data.text;
}

export async function shorten(url: string, slug: string): Promise<string> {
  if (!url) throw new Error("No URL provided.");
  if (!slug) throw new Error("No slug provided.");
  if (typeof url !== "string") throw new Error("URL must be a string.");
  if (typeof slug !== "string") throw new Error("Slug must be a string.");

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

export async function randomColor(): Promise<RandomColorData> {
  const data = (await fetch("https://api.popcat.xyz/randomcolor")
    .then((res) => res.json())
    .catch((e) => {
      throw new Error(e);
    })) as RandomColorData;

  return data;
}

export async function car(): Promise<CarData> {
  const data = (await fetch("https://api.popcat.xyz/car")
    .then((res) => res.json())
    .catch((e) => {
      throw new Error(e);
    })) as CarData;

  return data;
}

export async function showerThought(): Promise<ShowerThoughtData> {
  const data = (await fetch("https://api.popcat.xyz/showerthoughts")
    .then((res) => res.json())
    .catch((e) => {
      throw new Error(e);
    })) as ShowerThoughtData;

  return data;
}

export async function quote(): Promise<QuoteData> {
  const data = (await fetch("https://api.popcat.xyz/quote")
    .then((res) => res.json())
    .catch((e) => {
      throw new Error(e);
    })) as QuoteData;

  return data;
}

export async function fact(): Promise<string> {
  const data = (await fetch("https://api.popcat.xyz/fact")
    .then((res) => res.json())
    .catch((e) => {
      throw new Error(e);
    })) as { fact: string };

  return data.fact;
}

export async function wyr(): Promise<string[]> {
  const data = (await fetch("https://api.popcat.xyz/fact")
    .then((res) => res.json())
    .catch((e) => {
      throw new Error(e);
    })) as { ops1: string; ops2: string };

  return [data.ops1, data.ops2];
}

export async function meme(): Promise<MemeData> {
  const data = (await fetch("https://api.popcat.xyz/meme")
    .then((res) => res.json())
    .catch((e) => {
      throw new Error(e);
    })) as MemeData;

  return data;
}
