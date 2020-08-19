import { DOMParser, Element } from "https://deno.land/x/deno_dom@v0.1.0-alpha2/deno-dom-wasm.ts";

export async function scrap(path: string) {    
    const response = await fetch("https://genius.com" + path);
    const text = await response.text();

    const doc = new DOMParser().parseFromString(text, "text/html")!;
    const p = doc.querySelector("p")!;

    return p.textContent;     
}