import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstateService } from '../../services/estate-service.service';
import { Estate } from '../../models/estates.model';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-estate',
  imports: [FormsModule, CommonModule, ReactiveFormsModule ],
  templateUrl: './edit-estate.component.html',
  styleUrl: './edit-estate.component.css',
})
export class EditEstateComponent implements OnInit {
  estateId: number = 0;
  estateForm: FormGroup;
  isLoading: boolean = true;
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
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.estateForm = this.formBuilder.group({
      type: ['', [Validators.required]],
      address: ['', [Validators.required]],
      costOfRent: [0, [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit() {
    this.estateId = +this.route.snapshot.paramMap.get('id')!;
    this.estateService.getEstateById(this.estateId, (data: Estate) => {
      console.log('Fetched estate:', data);
      this.estate = data;
      this.isLoading = false;
    });
  }

  public onSubmit() {
    if (this.estateForm.valid) {

      var estate2 = {
        id: this.estateId,
        type: this.estateForm.value.type,
        address: this.estateForm.value.address,
        costOfRent: this.estateForm.value.costOfRent,
        ownerId: 1,
        pictureLocation: '',
      }

      // var estate2 = {
      //   id: this.estateId,
      //   type: this.estateForm.value.type,
      //   address: this.estateForm.value.address,
      //   costOfRent: this.estateForm.value.type,
      //   ownerId: this.estate.ownerId,
      //   pictureLocation: '',
      // }

      console.log(estate2);
      this.estateService.updateEstate(estate2, () => {
        this.router.navigate(['/estates']);
      });
    } else {
      console.log("Form is not valid");
    }
  }

  get type() {
    return this.estateForm.get('type');
  }

  get address() {
    return this.estateForm.get('address');
  }

  get costOfRent() {
    return this.estateForm.get('costOfRent');
  }
}
