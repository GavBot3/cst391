import { Injectable } from '@angular/core';
import exampledata from '../../data/sample-music-data.json';
import { Artist } from './../models/artists.model';
import { Album } from '../models/albums.model';

// Marks this service as injectable at the root level
@Injectable({ providedIn: 'root' })
export class MusicServiceService {

  // Stores the list of albums loaded from JSON data
  albums: Album[] = exampledata;

  /**
   * Retrieves a list of unique artists from the album data
   * @returns An array of Artist objects
   */
  public getArtists(): Artist[] {
    let artists: Artist[] = [];
    let artistSet = new Set<string>(); // Using a Set to ensure uniqueness

    // Add each album's artist to the set
    this.albums.forEach(a => artistSet.add(a.artist));

    // Convert the set into an array of Artist objects
    artistSet.forEach(a => artists.push({artist: a}))
    return artists;
  }

  /**
   * Retrieves the list of all albums
   * @returns An array of Album objects
   */
  public getAlbums(): Album[] {
    return this.albums;
  }

  /**
   * Retrieves all albums by a specific artist
   * @param artistName - The name of the artist
   * @returns An array of Album objects associated with the artist
   */
  public getAlbumsOfArtist(artistName: String): Album[] {
    let albums: Album[] = [];

    // Filter albums belonging to the given artist
    this.albums.forEach(album => {
      if (album.artist == artistName) {
        albums.push(album);
      }
    });
    return albums;
  }

  /**
   * Adds a new album to the list
   * @param album - The Album object to be added
   * @returns A success indicator (1 for success)
   */
  public createAlbum(album: Album): number {
    this.albums.push(album);
    return 1;
  }

  /**
   * Updates an existing album in the list
   * @param album - The Album object with updated details
   * @returns A status code (0 for success, -1 if not found)
   */
  public updateAlbum(album: Album): number {
    for (let i = 0; i < this.albums.length; ++i) {
      if (this.albums[i].id == album.id) {
        this.albums.splice(i, 1, album); // Replace the album in the list
        return 0;
      }
    }
    return -1; // Album not found
  }

  /**
   * Deletes an album from the list by its ID
   * @param id - The ID of the album to delete
   * @returns A status code (0 for success, -1 if not found)
   */
  public deleteAlbum(id: number): number {
    for (let i = 0; i < this.albums.length; ++i) {
      if (this.albums[i].id == id) {
        this.albums.splice(i, 1); // Remove the album from the list
        return 0;
      }
    }
    return -1; // Album not found
  }
}
