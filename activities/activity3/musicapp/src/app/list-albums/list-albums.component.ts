import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MusicServiceService } from '../services/music-service.service';
import { Artist } from '../models/artists.model';
import { Album } from '../models/albums.model';

export class DisplayAlbumModule {}

@Component({
  selector: 'app-list-albums',
  imports: [CommonModule, RouterModule],
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

  constructor(private service: MusicServiceService) {}

  ngOnInit(): void {
    this.albums = this.service.getAlbumsOfArtist(this.artist!.artist);
  }
}
