import { BaseType } from "./BaseType";

export type SubredditData = BaseType & {
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
};
