import { Component } from '@angular/core';
import { Artist } from '../models/artists.model';
import { MusicServiceService } from '../services/music-service.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListAlbumsComponent } from '../list-albums/list-albums.component';

@Component({
  selector: 'app-list-artists',
  imports: [CommonModule, RouterModule, ListAlbumsComponent],
  templateUrl: './list-artists.component.html',
  styleUrl: './list-artists.component.css',
})
export class ListArtistsComponent {
  constructor(
    private route: ActivatedRoute,
    private service: MusicServiceService
  ) {}

  selectedArtist: Artist | null = null;

  artists: Artist[] = [];

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log('Getting data....');

      this.artists = this.service.getArtists();

      this.selectedArtist = null;
    });
  }

  onSelectArtist(artist: Artist) {
    this.selectedArtist = artist;
  }
}
