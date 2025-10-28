export interface User {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  followers: number;
  following: number;
  html_url: string;
}

export interface Repo {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  html_url: string;
}
