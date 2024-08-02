import { postsUrl } from "../constants.js";

export async function fetchPosts(page, postsPerPage) {
  const response = await fetch(`${postsUrl}?page=${page}&per_page=${postsPerPage}`);
  if (response.ok) {
    const results = await response.json();
    console.log(response);
    console.log(results);
    return results;
  }

  throw new Error("There was an error fetching the posts.");
}
