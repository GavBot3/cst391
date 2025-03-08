import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MusicServiceService } from '../services/music-service.service';
import { Artist } from '../models/artists.model';
import { Album } from '../models/albums.model';
import { DisplayAlbumComponent } from '../display-album/display-album.component';

export class DisplayAlbumModule {}

@Component({
  selector: 'app-list-albums',
  imports: [CommonModule, RouterModule, DisplayAlbumComponent],
  templateUrl: './list-albums.component.html',
  styleUrl: './list-albums.component.css',
})
export class ListAlbumsComponent implements OnInit {

  @Input() artist: Artist | undefined;
  albums: Album[] = [];
  selectedAlbum: Album | undefined;

  public onSelectAlbum(album: Album) {
    this.selectedAlbum = album;
  }

  constructor(
    private route: ActivatedRoute,
    private service: MusicServiceService
  ) {}

  ngOnInit() {
    console.log("ListAlbumsComponent Initialized!");

    this.route.queryParams.subscribe((params) => {
      console.log('Getting data for artist:', this.artist);
      if (!this.artist) {
        console.error("❌ No artist found in ListAlbumsComponent!");
        return;
      }

      this.service.getAlbumsOfArtist(this.artist.artist, (albums: Album[]) => {
        console.log('this.albums: ', albums);
        this.albums = albums;
      });
    });
  }

}
