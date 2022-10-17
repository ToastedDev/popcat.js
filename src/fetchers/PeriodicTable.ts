import fetch from "node-fetch";
import { PeriodicTableData } from "../types";

export async function periodicTable(
  element: string
): Promise<PeriodicTableData> {
  if (!element) throw new Error("No element provided.");
  if (typeof element !== "string") throw new Error("Element must be a string.");

  const data = (await fetch(
    `https://api.popcat.xyz/periodic-table?element=${encodeURIComponent(
      element
    )}`
  )
    .then((res) => res.json())
    .catch((e) => {
      throw new Error(e);
    })) as PeriodicTableData;

  if (data.error) throw new Error(data.error);
  return data;
}
