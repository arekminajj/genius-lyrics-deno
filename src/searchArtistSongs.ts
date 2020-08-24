import { getArtistId } from './getArtistId.ts'
import { ArtistSong } from './interfaces/artistSong.ts'

export async function searchArtistSongs(params: any) {
    const artistId = await getArtistId(params);
    const url = 'https://api.genius.com/artists/' + await artistId + '/songs' + '?access_token=' + params.access_token;
    const res = await fetch(url);
    const data: ArtistSong = await res.json();
    if(data == (null || undefined)) {
        throw new Error("Something bad happened with Artist songs data :(")
    }
    
    return data;
}