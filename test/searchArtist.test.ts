import { assertEquals } from "../deps.ts";
import { searchArtist } from '../src/searchArtist.ts'
import { Artist } from "../src/interfaces/artist.ts";

Deno.test("searchArtistTest", async () => {
    const params = {
        q: "lil tracy",
        access_token:
          "26eksgdkCd6cjQ1lXGy__1_lJIbh2_OXyT70U-aCzsH-5goq5GlU2SAlv25kt1af",
      };
    const result:Artist = await searchArtist(params);
    assertEquals(await result.response.artist.name, "Lil Peep & Lil Tracy");
  });
  