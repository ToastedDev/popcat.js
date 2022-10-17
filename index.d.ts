import {
  CarData,
  ColorData,
  Gender,
  GitHubData,
  LyricsData,
  NPMData,
  PeriodicTableData,
  QuoteData,
  RandomColorData,
  ShowerThoughtData,
  SubredditData,
  WeatherData,
  WelcomeOptions,
} from "./src/types";

declare module "popcat.js" {
  export class Chatbot {
    constructor(options?: { name: string; gender: Gender; owner: string });

    public setName(name: string): this;
    public setGender(gender: Gender): this;
    public setOwner(owner: string): this;

    public chat(message: string): Promise<string>;
  }

  export async function color<C extends string>(
    hex: string
  ): Promise<Response<C>>;

  export function screenshot(url: string): string;

  export function jail(image: string): string;

  export function communism(image: string): string;

  export function wanted(image: string): string;

  export function gun(image: string): string;

  export function whoWouldWin(image1: string, image2: string): string;

  export function sadCat(text: string): string;

  export function pooh(text1: string, text2: string): string;

  export function drake(text1: string, text2: string): string;

  export function oogway(text: string): string;

  export function unforgivable(text: string): string;

  export async function lulcat(text: string): Promise<string>;

  export async function shorten(url: string, slug: string): Promise<string>;

  export class WelcomeCard {
    constructor(options?: WelcomeOptions);

    public setBackground(url: string): this;
    public setAvatar(url: string): this;
    public setText1(text: string): this;
    public setText2(text: string): this;
    public setText3(text: string): this;

    public render(): string;
  }

  export async function color(hex: string): Promise<ColorData>;

  export async function github(username: string): Promise<GitHubData>;

  export async function lyrics(song: string): Promise<LyricsData>;

  export async function periodicTable(
    element: string
  ): Promise<PeriodicTableData>;

  export async function subreddit(name: string): Promise<SubredditData>;

  export async function weather(query: string): Promise<WeatherData>;

  export async function npm(pkg: string): Promise<NPMData>;

  export async function pickupLine(): Promise<string>;

  export async function randomColor(): Promise<RandomColorData>;

  export async function car(): Promise<CarData>;

  export async function showerThought(): Promise<ShowerThoughtData>;

  export async function quote(): Promise<QuoteData>;
}
