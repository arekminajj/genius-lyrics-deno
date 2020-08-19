import { searchSong } from "./src/searchSong.ts";
import { scrap } from './src/scrap.ts'

const params = {
  q: "witchblades",
  access_token:
    "26eksgdkCd6cjQ1lXGy__1_lJIbh2_OXyT70U-aCzsH-5goq5GlU2SAlv25kt1af",
};

console.log(await searchSong(params));
//let res = await fetch("https://genius.com/songs/2977800");
//console.log(await res.text());
await scrap("/songs/5528463")
