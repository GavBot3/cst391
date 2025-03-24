import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EstateService } from '../services/estate-service.service';
import { CommonModule } from '@angular/common';
import { User } from '../models/users.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  users: User[] = [];

  constructor(
    private route: ActivatedRoute,
    private estateService: EstateService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.estateService.getUsers((data: User[]) => {
      this.users = data;
    });
  }


}
