import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { Artist } from './models/artists.model';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'My Music Collection';
  version = 1.0;
  @Input() artist!: Artist;

  constructor(private router: Router) {}

  displayVersion() {
    alert(`Version: ${this.version}`);
  }

  displayArtistList() {
    this.router.navigate(['list-artists'], {
      queryParams: {  },
    });
  }
}
