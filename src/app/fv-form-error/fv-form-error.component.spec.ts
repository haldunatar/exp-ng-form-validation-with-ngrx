import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FvFormErrorComponent } from './fv-form-error.component';

describe('FvFormErrorComponent', () => {
  let component: FvFormErrorComponent;
  let fixture: ComponentFixture<FvFormErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FvFormErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FvFormErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
