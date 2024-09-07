import { postsUrl } from "../constants.js";

export async function fetchSinglePost(id) {
  const response = await fetch(`${postsUrl}${id}?_embed`);

  if (response.ok) {
    const results = await response.json();
    return results;
  }

  throw new Error(`There was an error fetching the post with id: ${id}.`);
}
