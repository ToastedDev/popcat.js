import { BaseType } from "./BaseType";

export type PeriodicTableData = BaseType & {
  name: string;
  symbol: string;
  atomic_number: number;
  atomic_mass: number;
  period: number;
  phase: "Solid" | "Liquid" | "Gas";
  discovered_by: string;
  image: string;
  summary: string;
};
