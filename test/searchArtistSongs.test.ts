import { assertEquals } from "../deps.ts";
import { searchArtistSongs } from '../src/searchArtistSongs.ts'
import { ArtistSong } from '../src/interfaces/artistSong.ts'

Deno.test("searchArtistSongsTest", async () => {
    const params = {
        q: "lil tracy",
        access_token:
          "26eksgdkCd6cjQ1lXGy__1_lJIbh2_OXyT70U-aCzsH-5goq5GlU2SAlv25kt1af",
      };
    const result:ArtistSong = await searchArtistSongs(params);
    assertEquals(await result.response.songs[0].id, 2904713);
  });
  