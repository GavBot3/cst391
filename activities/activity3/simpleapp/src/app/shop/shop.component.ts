import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { InfoComponent } from '../info/info.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-shop',
  imports: [ReactiveFormsModule, InfoComponent, CommonModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent {
  question = "What's your name?";
  answer = 'unknown';
  appForm = new FormGroup({
    answer: new FormControl(''),
  });

  onSubmit(data: Partial<{ answer: string | null }>) {
    this.answer = data.answer!;
    console.log('Your name is ' + this.answer);
  }
}
