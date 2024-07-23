import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtworkPageComponent } from './atwork-page.component';

describe('AtworkPageComponent', () => {
  let component: AtworkPageComponent;
  let fixture: ComponentFixture<AtworkPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtworkPageComponent]
    });
    fixture = TestBed.createComponent(AtworkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
