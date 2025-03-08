import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Album } from '../models/albums.model';
import { MusicServiceService } from '../services/music-service.service';
import { Track } from '../models/tracks.model';

@Component({
  selector: 'app-display-album',
  imports: [CommonModule, RouterModule],
  templateUrl: './display-album.component.html',
  styleUrl: './display-album.component.css',
})
export class DisplayAlbumComponent implements OnInit {

  @Input() album: Album | undefined;

  constructor(private route: ActivatedRoute, private service: MusicServiceService) {

  }
  ngOnInit(): void {
    console.log("Display Album: ", this.album);
    console.log("Display Tracks: ", this.album?.tracks)
    console.log("Is array", Array.isArray(this.album?.tracks))
  }


}
