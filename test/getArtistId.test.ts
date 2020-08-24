import { assertEquals } from "../deps.ts";
import { getArtistId } from '../src/getArtistId.ts'

Deno.test("getArtistIdTest", async () => {
    const params = {
        q: "lil tracy",
        access_token:
          "26eksgdkCd6cjQ1lXGy__1_lJIbh2_OXyT70U-aCzsH-5goq5GlU2SAlv25kt1af",
      };
    const result = await getArtistId(params);
    assertEquals(await result, 1015803);
  });
  