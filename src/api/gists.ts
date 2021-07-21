import axios from 'axios';

const BASE_URL = 'https://api.github.com';
const { GITHUB_TOKEN } = process.env;
const HEADERS = {
  headers: {
    ...(GITHUB_TOKEN && { Authorization: `token ${GITHUB_TOKEN}` }),
  },
};

export interface IFork {
  id: number;
  created_at: string;
  html_url: string;
  owner: {
    login: string,
    avatar_url: string,
  };
}

export interface IGist {
  id: number;
  html_url: string;
  forks_url: string;
  git_pull_url: string;
  files: Record<string, any>;
}

export async function getForks(forkUrl: string): Promise<IFork[]> {
  const response = await axios.get(forkUrl, HEADERS);
  return response.data;
}

export async function getUserGists(username: string): Promise<IGist[]> {
  const response = await axios.get(`${BASE_URL}/users/${username}/gists`, HEADERS);
  return response.data;
}
