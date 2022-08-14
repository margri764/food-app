import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopLocationComponent } from './pop-location.component';

describe('PopLocationComponent', () => {
  let component: PopLocationComponent;
  let fixture: ComponentFixture<PopLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
