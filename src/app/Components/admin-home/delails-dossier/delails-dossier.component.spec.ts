import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelailsDossierComponent } from './delails-dossier.component';

describe('DelailsDossierComponent', () => {
  let component: DelailsDossierComponent;
  let fixture: ComponentFixture<DelailsDossierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelailsDossierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelailsDossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
