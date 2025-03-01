import { Track } from './tracks.model';

export interface Album {
    id: number,
    title: string,
    artist: string,
    description: string,
    year: number,
    image: string,
    tracks: Track[]
}
