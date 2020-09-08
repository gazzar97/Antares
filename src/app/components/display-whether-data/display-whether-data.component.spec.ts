import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayWhetherDataComponent } from './display-whether-data.component';

describe('DisplayWhetherDataComponent', () => {
  let component: DisplayWhetherDataComponent;
  let fixture: ComponentFixture<DisplayWhetherDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayWhetherDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayWhetherDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
