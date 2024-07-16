import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvantagesPageComponent } from './advantages-page.component';

describe('AdvantagesPageComponent', () => {
  let component: AdvantagesPageComponent;
  let fixture: ComponentFixture<AdvantagesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvantagesPageComponent]
    });
    fixture = TestBed.createComponent(AdvantagesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
