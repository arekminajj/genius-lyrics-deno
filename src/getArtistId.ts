import { Song } from './interfaces/song.ts'

export async function getArtistId(params: any) {
    let queryString = "";
    const url = "https://api.genius.com/search/?";
    if (params) {
        queryString = new URLSearchParams(params).toString();
    }
    const res = await fetch(url + queryString + "&per_page=1");
    const data:Song = await res.json();

    //assert that the first result is a song made by needed artist
    const artistId = data.response.hits[0].result.primary_artist.id;
    if (artistId == (null || undefined)){
        throw new Error("Something went wrong with getting artist ID :(")
    }

    return artistId;    
}
