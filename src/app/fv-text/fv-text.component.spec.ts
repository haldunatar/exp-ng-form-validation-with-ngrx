import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FvTextComponent } from './fv-text.component';

describe('FvTextComponent', () => {
  let component: FvTextComponent;
  let fixture: ComponentFixture<FvTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FvTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FvTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
