import { Component, OnInit } from '@angular/core';
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
export class ListArtistsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private service: MusicServiceService
  ) {}

  selectedArtist: Artist | null = null;

  artists: Artist[] = [];

  ngOnInit() {
    // this.route.queryParams.subscribe((params) => {
    //   console.log('Getting data....');


    //   this.selectedArtist = null;
    // });

    this.service.getArtists((artists: Artist[]) => {
      this.artists = artists;
      console.log('this.artists: ', this.artists)
    })

  }

  onSelectArtist(artist: Artist) {
    this.selectedArtist = artist;
  }
}
