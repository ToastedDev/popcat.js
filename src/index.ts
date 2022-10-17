import fetch from "node-fetch";
import { CarData, RandomColorData } from "./types";

export * from "popcat-chatbot";
export * from "./fetchers/Color";
export * from "./fetchers/GitHub";
export * from "./fetchers/Lyrics";
export * from "./fetchers/WelcomeCard";

export function screenshot(url: string): string {
  if (!url) throw new Error("No URL provided.");
  if (!url.startsWith("https://")) throw new Error("URL must be valid.");

  return `https://api.popcat.xyz/screenshot?url=${encodeURIComponent(url)}`;
}

export function jail(image: string): string {
  if (!image) throw new Error("No image provided.");
  if (!image.startsWith("https://"))
    throw new Error("Image must be a valid URL.");

  return `https://api.popcat.xyz/screenshot?url=${encodeURIComponent(image)}`;
}

export function communism(image: string): string {
  if (!image) throw new Error("No image provided.");
  if (!image.startsWith("https://"))
    throw new Error("Image must be a valid URL.");

  return `https://api.popcat.xyz/communism?url=${encodeURIComponent(image)}`;
}

export function sadCat(text: string): string {
  if (!text) throw new Error("No text provided.");

  return `https://api.popcat.xyz/sadcat?text=${encodeURIComponent(text)}`;
}

export function oogway(text: string): string {
  if (!text) throw new Error("No text provided.");

  return `https://api.popcat.xyz/sadcat?text=${encodeURIComponent(text)}`;
}

export function pooh(text1: string, text2: string): string {
  if (!text1) throw new Error("No text 1 provided.");
  if (!text2) throw new Error("No text 2 provided.");

  return `https://api.popcat.xyz/pooh?text1=${encodeURIComponent(
    text1
  )}&text2=${encodeURIComponent(text2)}`;
}

export function unforgivable(text: string): string {
  if (!text) throw new Error("No text provided.");

  return `https://api.popcat.xyz/unforgivable?text=${encodeURIComponent(text)}`;
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
