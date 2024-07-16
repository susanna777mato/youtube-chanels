import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoomPageComponent } from './hoom-page.component';

describe('HoomPageComponent', () => {
  let component: HoomPageComponent;
  let fixture: ComponentFixture<HoomPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoomPageComponent]
    });
    fixture = TestBed.createComponent(HoomPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
