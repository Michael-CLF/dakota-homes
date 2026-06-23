import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeighborhoodsComponent } from './neighborhoods.component';

describe('NeighborhoodsComponent', () => {
  let component: NeighborhoodsComponent;
  let fixture: ComponentFixture<NeighborhoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeighborhoodsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NeighborhoodsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
