import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Required for *ngFor
import { FormsModule } from '@angular/forms';    // Required for [(ngModel)]

@Component({
  selector: 'app-info',
  standalone: true, // Ensure this is a standalone component
  imports: [CommonModule, FormsModule], // Include required modules
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Input() name: string | undefined;
  quantity = 0;
  products: string[] = [];
  selectedProduct = "Star Wars";

  constructor() {}

  ngOnInit(): void {
    this.quantity = 0;
    this.products = ["Star Wars", "The Empire Strikes Back", "Return of the Jedi"];
    this.selectedProduct = "Star Wars";
  }

  onSubmit() {
    console.log("onSubmit() with quantity of " + this.quantity + " and movie selected is " + this.selectedProduct);
  }

  newInfo() {
    this.resetForm();
  }

  private resetForm() {
    this.quantity = 0;
    this.selectedProduct = "Star Wars";
  }
}
