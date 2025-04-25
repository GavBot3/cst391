import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Estate } from '../../models/estates.model';
import { EstateService } from '../../services/estate-service.service';

@Component({
  selector: 'app-list-owner-estates',
  imports: [CommonModule, RouterModule],
  templateUrl: './list-owner-estates.component.html',
  styleUrl: './list-owner-estates.component.css',
})
export class ListOwnerEstatesComponent implements OnInit {
  estates: Estate[] = [];

  constructor(
    private estateService: EstateService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const ownerId = +this.route.snapshot.paramMap.get('id')!;
    this.estateService.getEstatesByOwner(ownerId, (estates: Estate[]) => {
      this.estates = estates;
      console.log('this.estates: ', estates);
    });

    console.log(this.estates);
  }

  onDelete(estateId: number){
    this.estateService.deleteEstate(estateId, () => {
      this.estates = this.estates.filter(e => e.id !== estateId);
    });
  }
}
