import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Estate } from '../../models/estates.model';
import { EstateService } from '../../services/estate-service.service';
import { RouterModule } from '@angular/router';

@Component({
  imports: [CommonModule, RouterModule],
  selector: 'app-estate-list',
  templateUrl: './list-estate.component.html',
  styleUrls: ['./list-estate.component.css']
})
export class ListEstateComponent implements OnInit {
  estates: Estate[] = [];

  constructor(private estateService: EstateService) {}

  ngOnInit(): void {
    console.log("EstateListComponent Initialized!");

    this.estateService.getEstates((estates: Estate[]) => {

      this.estates = estates;
      console.log('this.estates: ', estates);
    });

    console.log(this.estates)
  }

  onDelete(estateId: number){
    this.estateService.deleteEstate(estateId, () => {
      this.estates = this.estates.filter(e => e.id !== estateId);
    });
  }
}
