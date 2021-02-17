import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TDFComponent } from './tdf.component';

describe('TDFComponent', () => {
  let component: TDFComponent;
  let fixture: ComponentFixture<TDFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TDFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
