    export interface Meta {
        status: number;
    }

    export interface Stats {
        unreviewed_annotations: number;
        hot: boolean;
        pageviews: number;
        concurrents?: number;
    }

    export interface PrimaryArtist {
        api_path: string;
        header_image_url: string;
        id: number;
        image_url: string;
        is_meme_verified: boolean;
        is_verified: boolean;
        name: string;
        url: string;
        iq?: number;
    }

    export interface Song {
        annotation_count: number;
        api_path: string;
        full_title: string;
        header_image_thumbnail_url: string;
        header_image_url: string;
        id: number;
        lyrics_owner_id: number;
        lyrics_state: string;
        path: string;
        pyongs_count?: number;
        song_art_image_thumbnail_url: string;
        song_art_image_url: string;
        stats: Stats;
        title: string;
        title_with_featured: string;
        url: string;
        primary_artist: PrimaryArtist;
    }

    export interface Response {
        songs: Song[];
        next_page: number;
    }

    export interface ArtistSong {
        meta: Meta;
        response: Response;
    }
