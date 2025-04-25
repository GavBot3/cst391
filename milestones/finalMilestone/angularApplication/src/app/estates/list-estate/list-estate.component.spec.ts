import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEstateComponent } from './list-estate.component';

describe('ListEstateComponent', () => {
  let component: ListEstateComponent;
  let fixture: ComponentFixture<ListEstateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListEstateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
