import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HearerComponent } from './hearer.component';

describe('HearerComponent', () => {
  let component: HearerComponent;
  let fixture: ComponentFixture<HearerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HearerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HearerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
