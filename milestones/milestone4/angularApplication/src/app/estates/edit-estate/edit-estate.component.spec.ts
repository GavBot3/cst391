import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEstateComponent } from './edit-estate.component';

describe('EditEstateComponent', () => {
  let component: EditEstateComponent;
  let fixture: ComponentFixture<EditEstateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditEstateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
