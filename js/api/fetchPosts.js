import { postsUrl } from "../constants.js";

export async function fetchPosts(page) {
  const response = await fetch(`${postsUrl}?page=${page}&per_page=10`);

  if (response.ok) {
    const results = await response.json();
    return results;
  }

  throw new Error("There was an error fetching the posts.");
}
