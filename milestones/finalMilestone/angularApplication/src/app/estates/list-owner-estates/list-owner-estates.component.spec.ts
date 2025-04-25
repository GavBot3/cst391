import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOwnerEstatesComponent } from './list-owner-estates.component';

describe('ListOwnerEstatesComponent', () => {
  let component: ListOwnerEstatesComponent;
  let fixture: ComponentFixture<ListOwnerEstatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListOwnerEstatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOwnerEstatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
