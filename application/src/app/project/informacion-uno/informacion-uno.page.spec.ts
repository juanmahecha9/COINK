import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InformacionUnoPage } from './informacion-uno.page';

describe('InformacionUnoPage', () => {
  let component: InformacionUnoPage;
  let fixture: ComponentFixture<InformacionUnoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InformacionUnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
