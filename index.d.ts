import { ColorData, GitHubData, LyricsData } from "./src/types";

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

  export async function shorten(url: string, slug: string): Promise<string>;

  export class WelcomeCard {
    constructor(options?: {
      background: string;
      avatar: string;
      text1: string;
      text2: string;
      text3: string;
    });

    public setBackground(url: string): this;
    public setAvatar(url: string): this;
    public setText1(text: string): this;
    public setText2(text: string): this;
    public setText3(text: string): this;

    public render(): string;
  }

  export async function github(username: string): Promise<GitHubData>;

  export async function lyrics(song: string): Promise<LyricsData>;

  export async function pickupLine(): Promise<string>;
}
