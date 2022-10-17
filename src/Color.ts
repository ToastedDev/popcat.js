import fetch from "node-fetch";

type HexDigit =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "f"
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F";
type HexColor<T extends string> =
  T extends `#${HexDigit}${HexDigit}${HexDigit}${infer Rest1}`
    ? Rest1 extends ``
      ? T // three-digit hex color
      : Rest1 extends `${HexDigit}${HexDigit}${HexDigit}`
      ? T // six-digit hex color
      : never
    : never;

type Response<T extends string> = {
  hex: HexColor<T>;
  name: string;
  rgb: string;
  color_image: string;
  brightened: string;
};

export async function color<C extends string>(
  hex: string
): Promise<Response<C>> {
  if (!hex) throw new Error("A hex was not provided.");

  if (hex.includes("#")) hex = hex.split("#")[1];
  const data = (await fetch(`https://api.popcat.xyz/color/${hex}`)
    .then((res) => res.json())
    .catch((err) => {
      throw new Error(err);
    })) as Response<C>;

  if (data.name.startsWith("Invalid Color:"))
    throw new Error("Provided hex is invalid.");

  return Promise.resolve(data);
}
