import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusDetailsComponent } from './aboutus-details.component';

describe('AboutusDetailsComponent', () => {
  let component: AboutusDetailsComponent;
  let fixture: ComponentFixture<AboutusDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutusDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
