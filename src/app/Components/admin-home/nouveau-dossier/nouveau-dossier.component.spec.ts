import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauDossierComponent } from './nouveau-dossier.component';

describe('NouveauDossierComponent', () => {
  let component: NouveauDossierComponent;
  let fixture: ComponentFixture<NouveauDossierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauDossierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauDossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
