import { Song, Result  } from './interfaces/song.ts'
import { Scrap } from './scrap.ts'
import { songResponse } from './interfaces/response.ts'

export async function searchSong(params: any) {
  let queryString = "";
  const url = "https://api.genius.com/search/?";
  if (params) {
    queryString = new URLSearchParams(params).toString();
  }

  const res = await fetch(url + queryString + "&per_page=1");
  const data:Song = await res.json();
  const lyrics = await Scrap(data.response.hits[0].result.api_path);
  const result: Result = data.response.hits[0].result;

  const song: songResponse = {
    fullTitle: result.full_title,
    coverUrl: result.header_image_url,
    title: result.title,
    titleWithFeatured: result.title_with_featured,
    primaryArtistName: result.primary_artist.name,
    lyrics: await lyrics!
  }

  if(song == (null || undefined)) {
    throw new Error("Something bad happened with song :(")
  }

  return song;
}
