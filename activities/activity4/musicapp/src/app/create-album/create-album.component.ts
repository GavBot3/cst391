import { Component, OnInit } from '@angular/core';
import { Album } from '../models/albums.model';
import { Track } from '../models/tracks.model';
import { MusicServiceService } from '../services/music-service.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, RouterModule, FormsModule],
  selector: 'app-create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.css'],
})
export class CreateAlbumComponent implements OnInit {
  album: Album = {
    id: Math.floor(Math.random() * 1000000),
    title: '',
    artist: '',
    description: '',
    year: 0,
    image: '',
    tracks: [],
  };

  tracksRaw: string = '';
  wasSubmitted: boolean = false;

  constructor(private service: MusicServiceService) {}

  ngOnInit() {}

  public onSubmit() {
    // Parse the Tracks and add to the Album then call the Service to create the new Album
    let tracks: Track[] = [];
    let tracksAll = this.tracksRaw.split('\n');
    for (let i = 0; i < tracksAll.length; ++i) {
      let title = '';
      let lyrics = '';
      let video = '';
      let trackInfo = tracksAll[i];
      let trackParts = trackInfo.split(':');
      if (trackParts.length == 3) {
        title = trackParts[0];
        lyrics = trackParts[1];
        video = trackParts[2];
      } else if (trackParts.length == 2) {
        title = trackParts[0];
        lyrics = trackParts[1];
      } else {
        title = trackParts[0];
      }
      tracks.push({
        id: Math.floor(Math.random() * 1000000),
        number: i + 1,
        title,
        lyrics,
        video,
      });
    }
    this.album.tracks = tracks;
    console.log(this.album);
    this.service.createAlbum(this.album, ()=>{
      console.log("Created Album");
    });
    this.wasSubmitted = true;
  }
}
