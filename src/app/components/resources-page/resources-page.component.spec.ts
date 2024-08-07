import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesPageComponent } from './resources-page.component';

describe('ResourcesPageComponent', () => {
  let component: ResourcesPageComponent;
  let fixture: ComponentFixture<ResourcesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResourcesPageComponent]
    });
    fixture = TestBed.createComponent(ResourcesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
