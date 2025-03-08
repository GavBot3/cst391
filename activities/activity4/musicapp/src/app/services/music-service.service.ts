import { Injectable } from '@angular/core';
import exampledata from '../../data/sample-music-data.json';
import { Artist } from './../models/artists.model';
import { Album } from '../models/albums.model';
import { HttpClient } from '@angular/common/http';

// Marks this service as injectable at the root level
@Injectable({ providedIn: 'root' })
export class MusicServiceService {
  artists: Artist[] = [];
  constructor(private http: HttpClient) {}

  private host = 'http://localhost:3000';

  public getArtists(callback: (artists: Artist[]) => void): void {
    this.http
      .get<Artist[]>(this.host + '/artists')
      .subscribe((artists: Artist[]) => {
        callback(artists);
      });
  }


  public getAlbums(callback: (albums: Album[]) => void): void {
    this.http
      .get<Album[]>(this.host + '/albums')
      .subscribe((albums: Album[]) => {
        callback(albums);
      });
  }

  public getAlbumsById(id: number, callback: (albums: Album[]) => void): void {
    let request = `${this.host}/albums?albumId=${encodeURIComponent(id)}`;
    this.http
      .get<Album[]>(request)
      .subscribe((albums: Album[]) => {
        callback(albums);
      });
  }


  public getAlbumsOfArtist(artistName: string, callback: (albums: Album[])=>void): void {
    let request = `${this.host}/albums/search/artist/${encodeURIComponent(artistName)}`;
    console.log('request: ', request);
    this.http.get<Album[]>(request).subscribe((albums: Album[])=>{
      console.log("have albums: ", albums);
      callback(albums);
    })
  }

  public createAlbum(album: Album, callback: () => void){
    this.http.post<Album>(this.host + "/albums", album).subscribe((data) => {
      callback();
    })
  }

  public updateAlbum(album: Album, callback: () => void){
    this.http.put<Album>(this.host + "/albums", album).subscribe((data) => {
      callback();
    })
  }

  public deleteAlbum(id: Number, callback: () => void){
    this.http.delete<Album>(this.host + "/albums/" + id).subscribe((data) => {
      callback();
    })
  }

}
