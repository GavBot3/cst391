import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/users.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EstateService } from '../../services/estate-service.service';
import { Estate } from '../../models/estates.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-estate',
  imports: [FormsModule],
  templateUrl: './create-estate.component.html',
  styleUrl: './create-estate.component.css',
})
export class CreateEstateComponent implements OnInit {
  userId: number = 0;

  estate: Estate = {
    id: 0,
    type: '',
    address: '',
    costOfRent: 0,
    ownerId: 0,
    pictureLocation: '',
  };

  constructor(
    private route: ActivatedRoute,
    private estateService: EstateService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userId = +this.route.snapshot.paramMap.get('id')!;
    console.log(this.userId);
  }

  public onSubmit() {
    console.log(this.userId);
    this.estate.ownerId = this.userId;
    this.estateService.createEstate(this.estate, () => {});
  }
}
