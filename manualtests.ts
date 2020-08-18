import { Search } from "./src/search.ts";

const params = {
  q: "witchblades",
  access_token:
    "26eksgdkCd6cjQ1lXGy__1_lJIbh2_OXyT70U-aCzsH-5goq5GlU2SAlv25kt1af",
};

console.log(await Search(params));
