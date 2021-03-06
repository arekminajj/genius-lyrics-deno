import { DOMParser } from "../deps.ts";

export async function Scrap(path: string) {
    try {
        const response = await fetch("https://genius.com" + path);
        const text = await response.text();

        const doc = new DOMParser().parseFromString(text, "text/html")!;
        const p = doc.querySelector(".lyrics")!;
        return p.textContent;
    }    
    catch(error) {
        await Scrap(path)
    }
    finally { }    
}
