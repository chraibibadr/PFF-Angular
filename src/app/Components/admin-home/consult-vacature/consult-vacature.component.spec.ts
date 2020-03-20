import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultVacatureComponent } from './consult-vacature.component';

describe('ConsultVacatureComponent', () => {
  let component: ConsultVacatureComponent;
  let fixture: ComponentFixture<ConsultVacatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultVacatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultVacatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
