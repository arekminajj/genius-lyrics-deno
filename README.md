[![DeepScan grade](https://deepscan.io/api/teams/10623/projects/13467/branches/226932/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=10623&pid=13467&bid=226932)
# genius-lyrics-deno
Deno module for Genius.com API and lyrics scraping.

## Usage
```sh
import { searchSong, searchArtist, searchArtistSongs } from 'https://deno.land/x/genius_lyrics/mod.ts'

const params = {
  q: "<QUERY>",
  access_token: "<YOUR-GENIUS-ACCESS-TOKEN>",
};

const song = await searchSong(params);
const artist = await searchArtist(params);
const artistSongs = await searchArtistSongs(params);
```
## Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Built With
* [Deno](https://deno.land)
* [Deno DOM](https://github.com/b-fuze/deno-dom)

## License

Distributed under the MIT License. See `LICENSE` for more information.
