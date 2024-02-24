import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NumeroCelularPage } from './numero-celular.page';

describe('NumeroCelularPage', () => {
  let component: NumeroCelularPage;
  let fixture: ComponentFixture<NumeroCelularPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NumeroCelularPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
