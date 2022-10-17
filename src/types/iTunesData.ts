import { BaseType } from "./BaseType";

export type iTunesData = BaseType & {
  url: string;
  name: string;
  artist: string;
  album: string;
  release_date: string;
  price: string;
  length: string;
  genre: string;
  thumbnail: string;
};
