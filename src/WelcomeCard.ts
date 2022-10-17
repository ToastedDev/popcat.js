import fetch from "node-fetch";

export type WelcomeOptions = {
  background: string;
  avatar: string;
  text1: string;
  text2: string;
  text3: string;
};

export class WelcomeCard {
  public readonly data: {
    background?: string;
    avatar?: string;
    text1?: string;
    text2?: string;
    text3?: string;
  } = {};

  constructor(options?: WelcomeOptions) {
    if (!options?.background.startsWith("https://"))
      throw new Error("Background must be a valid URL.");
    if (!options?.background.endsWith(".png"))
      throw new Error("Background must be in PNG format.");

    if (!options?.avatar) throw new Error("No avatar provided.");
    if (!options?.avatar.startsWith("https://"))
      throw new Error("Background must be a valid URL.");
    if (!options?.avatar.endsWith(".png"))
      throw new Error("Background must be in PNG format.");

    if (!options?.text1) throw new Error("No text 1 provided.");
    if (!options?.text2) throw new Error("No text 2 provided.");
    if (!options?.text3) throw new Error("No text 3 provided.");

    this.data = { ...options };
  }

  public setBackground(url: string): this {
    if (!url) throw new Error("No URL provided.");
    if (!url.startsWith("https://") || typeof url !== "string")
      throw new Error("Background must be a valid URL.");
    if (!url.endsWith(".png"))
      throw new Error("Background must be in PNG format.");
    this.data.background = url;
    return this;
  }

  public setAvatar(url: string): this {
    if (!url) throw new Error("No avatar provided.");
    if (!url.startsWith("https://") || typeof url !== "string")
      throw new Error("Background must be a valid URL.");
    if (!url.endsWith(".png"))
      throw new Error("Background must be in PNG format.");

    this.data.avatar = url;
    return this;
  }

  public setText1(text: string): this {
    if (!text) throw new Error("No text specified.");
    if (typeof text !== "string") throw new Error("Text must be a string.");

    this.data.text1 = text;
    return this;
  }
  public setText2(text: string): this {
    if (!text) throw new Error("No text specified.");
    if (typeof text !== "string") throw new Error("Text must be a string.");

    this.data.text2 = text;
    return this;
  }
  public setText3(text: string): this {
    if (!text) throw new Error("No text specified.");
    if (typeof text !== "string") throw new Error("Text must be a string.");

    this.data.text3 = text;
    return this;
  }

  public render(): string {
    const data = this.data as WelcomeOptions;
    return `https://api.popcat.xyz/welcomecard?background=${encodeURIComponent(
      data.background
    )}&avatar=${encodeURIComponent(data.avatar)}&text1=${encodeURIComponent(
      data.text1
    )}&text2=${encodeURIComponent(data.text2)}&text3=${encodeURIComponent(
      data.text3
    )}`;
  }
}
