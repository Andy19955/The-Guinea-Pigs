import { mediaUrl } from "../constants.js";

export async function fetchFeaturedMedia(id) {
  const response = await fetch(mediaUrl + id);

  if (response.ok) {
    const results = await response.json();
    return results;
  }

  throw new Error(`There was an error fetching media with id: ${id}.`);
}
