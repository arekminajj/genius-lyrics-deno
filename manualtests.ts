import { Search } from "./src/search.ts";
import { getLyrics } from './src/getLyrics.ts'
import { scrap } from './src/scrap.ts'

const params = {
  q: "witchblades",
  access_token:
    "26eksgdkCd6cjQ1lXGy__1_lJIbh2_OXyT70U-aCzsH-5goq5GlU2SAlv25kt1af",
};

console.log(await Search(params));
getLyrics("ds")
//let res = await fetch("https://genius.com/songs/2977800");
//console.log(await res.text());
await scrap("/songs/5528463")
