import fetch from "node-fetch";

export type AccountType = "User" | "Organization";

export type GitHubData = {
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
  error?: string;
};

export async function github(username: string): Promise<GitHubData> {
  if (!username) throw new Error("No username provided.");

  const data = (await fetch(`https://api.popcat.xyz/github/${username}`)
    .then((res) => res.json())
    .catch((e) => {
      throw new Error(e);
    })) as GitHubData;

  if (data?.error) throw new Error(data.error);
  return data;
}
