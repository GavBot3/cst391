import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ShopComponent } from './shop/shop.component'; // Ensure correct path
import { CommonModule } from '@angular/common';

@Component({
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    ShopComponent,
    FormsModule,
    CommonModule,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'simpleapp';
}
