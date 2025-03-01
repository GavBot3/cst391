import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Album } from '../models/albums.model';

@Component({
  selector: 'app-display-album',
  imports: [CommonModule, RouterModule],
  templateUrl: './display-album.component.html',
  styleUrl: './display-album.component.css',
})
export class DisplayAlbumComponent {

  @Input() album: Album | undefined;

  constructor() {}
}
