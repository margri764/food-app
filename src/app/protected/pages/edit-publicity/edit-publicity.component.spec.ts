import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPublicityComponent } from './edit-publicity.component';

describe('EditPublicityComponent', () => {
  let component: EditPublicityComponent;
  let fixture: ComponentFixture<EditPublicityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPublicityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPublicityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
