import { Song } from './interfaces/song.ts'

export async function searchSong(params: any) {
  let queryString = "";
  let url = "https://api.genius.com/search/?";
  if (params) {
    queryString = new URLSearchParams(params).toString();
  }

  const res = await fetch(url + queryString + "&per_page=1");
  const data:Song = await res.json();

  return data;
}
