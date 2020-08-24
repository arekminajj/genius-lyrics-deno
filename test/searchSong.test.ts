import { assertEquals } from "../deps.ts";
import { searchSong } from '../src/searchSong.ts'

Deno.test("searchSongTest", async () => {
    const params = {
        q: "awful things",
        access_token:
          "26eksgdkCd6cjQ1lXGy__1_lJIbh2_OXyT70U-aCzsH-5goq5GlU2SAlv25kt1af",
      };
    const result = await searchSong(params);
    assertEquals(await result.title, "Awful Things");
  });
  