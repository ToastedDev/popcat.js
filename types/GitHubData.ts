import { BaseType } from "./BaseType";

export type AccountType = "User" | "Organization";

export type GitHubData = BaseType & {
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
};
