import { getArtistId } from './getArtistId.ts';
import { Artist } from './interfaces/artist.ts';

export async function searchArtist(params: any) {
    const artistId = await getArtistId(params);
    const url = 'https://api.genius.com/artists/' + await artistId + '?access_token=' + params.access_token;
    const res = await fetch(url);
    const data: Artist = await res.json();
    if(data == (null || undefined)) {
        throw new Error("Something bad happened with Artist data :(")
    }

    return data;
}
