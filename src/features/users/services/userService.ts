import type { User } from "../types/user";

const API_URL = "https://jsonplaceholder.typicode.com";

export async function getUsers(signal?: AbortSignal): Promise<User[]> {
  const response = await fetch(`${API_URL}/users`, { signal });

  if (!response.ok) {
    throw new Error("Failed to load users.");
  }

  return response.json();
}
