declare module "popcat.js" {
  export class Chatbot {
    constructor(options?: {
      name: string;
      gender: "Male" | "Female";
      owner: string;
    });

    public setName(name: string): this;
    public setGender(gender: "Male" | "Female"): this;
    public setOwner(owner: string): this;

    public chat(message: string): Promise<string>;
  }

  export function screenshot(url: string): string;

  export function jail(image: string): string;

  export function communism(image: string): string;

  export function wanted(image: string): string;

  export function gun(image: string): string;

  export function clown(image: string): string;

  export function uncover(image: string): string;

  export function greyscale(image: string): string;

  export function ad(image: string): string;

  export function blur(image: string): string;

  export function invert(image: string): string;

  export function jokeOverHead(image: string): string;

  export function mnm(image: string): string;

  export function pet(image: string): string;

  export function whoWouldWin(image1: string, image2: string): string;

  export function ship(image1: string, image2: string): string;

  export function sadCat(text: string): string;

  export function pooh(text1: string, text2: string): string;

  export async function translate(lang: string, text: string): Promise<string>;

  export function drake(text1: string, text2: string): string;

  export function colorify(image: string, color: string): string;

  export function oogway(text: string): string;

  export function unforgivable(text: string): string;

  export function biden(text: string): string;

  export function pikachu(text: string): string;

  export function caution(text: string): string;

  export function alert(text: string): string;

  export async function lulcat(text: string): Promise<string>;

  export async function mock(text: string): Promise<string>;

  export async function textToMorse(text: string): Promise<string>;

  export async function encode(text: string): Promise<string>;

  export async function decode(binary: string): Promise<string>;

  export async function reverse(text: string): Promise<string>;

  export async function doublestruck(text: string): Promise<string>;

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

  export async function color(hex: string): Promise<{
    hex: string;
    name: string;
    rgb: string;
    color_image: string;
    brightened: string;
  }>;

  export async function github(username: string): Promise<{
    url: string;
    avatar: string;
    account_type: AccountType;
    name: string;
    company: string | "None";
    blog: string;
    location: string;
    email: string;
    bio: string;
    twitter: string;
    public_repos: string;
    public_gists: string;
    followers: string;
    following: string;
    created_at: string;
    updated_at: string;
  }>;

  export async function lyrics(song: string): Promise<{
    title: string;
    image: string;
    artist: string;
    lyrics: string;
    error?: string;
  }>;

  export async function periodicTable(element: string): Promise<{
    name: string;
    symbol: string;
    atomic_number: number;
    atomic_mass: number;
    period: number;
    phase: "Solid" | "Liquid" | "Gas";
    discovered_by: string;
    image: string;
    summary: string;
  }>;

  export async function subreddit(name: string): Promise<{
    name: string;
    title: string;
    active_users: string;
    members: string;
    description: string;
    icon: string;
    banner: string;
    allow_videos: boolean;
    allow_images: boolean;
    over_18: boolean;
    url: string;
  }>;

  export async function weather(query: string): Promise<{
    name: string;
    title: string;
    active_users: string;
    members: string;
    description: string;
    icon: string;
    banner: string;
    allow_videos: boolean;
    allow_images: boolean;
    over_18: boolean;
    url: string;
  }>;

  export async function npm(pkg: string): Promise<{
    name: string;
    version: string;
    description: string;
    keywords: string;
    author: string;
    author_email: string;
    last_published: string;
    maintainers: string;
    repository: string;
    downloads_this_year: string;
  }>;

  export async function itunes(title: string): Promise<{
    url: string;
    name: string;
    artist: string;
    album: string;
    release_date: string;
    price: string;
    length: string;
    genre: string;
    thumbnail: string;
  }>;

  export async function pickupLine(): Promise<string>;

  export async function randomColor(): Promise<{
    hex: string;
    name: string;
    image: string;
  }>;

  export async function car(): Promise<{
    image: string;
    title: string;
  }>;

  export async function showerThought(): Promise<{
    result: string;
    author: string;
    upvotes: number;
  }>;

  export async function quote(): Promise<{
    quote: string;
    upvotes: string;
  }>;

  export async function fact(): Promise<string>;

  export async function wyr(): Promise<string[]>;

  export async function meme(): Promise<{
    title: string;
    url: string;
    image: string;
    upvotes: string;
    comments: string;
  }>;

  export async function eightBall(): Promise<string>;
}
