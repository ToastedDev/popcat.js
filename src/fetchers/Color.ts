import fetch from "node-fetch";
import { ColorData } from "../types/ColorData";

export async function color<C extends string>(
  hex: string
): Promise<ColorData<C>> {
  if (!hex) throw new Error("A hex was not provided.");

  if (hex.includes("#")) hex = hex.split("#")[1];
  const data = (await fetch(`https://api.popcat.xyz/color/${hex}`)
    .then((res) => res.json())
    .catch((err) => {
      throw new Error(err);
    })) as ColorData<C>;

  if (data.name.startsWith("Invalid Color:"))
    throw new Error("Provided hex is invalid.");

  return Promise.resolve(data);
}
