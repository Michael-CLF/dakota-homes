import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialCardComponent } from './testimonial-card.component';

describe('TestimonialCardComponent', () => {
  let component: TestimonialCardComponent;
  let fixture: ComponentFixture<TestimonialCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonialCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestimonialCardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
