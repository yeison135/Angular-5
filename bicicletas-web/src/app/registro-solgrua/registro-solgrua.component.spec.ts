import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroSolgruaComponent } from './registro-solgrua.component';

describe('RegistroSolgruaComponent', () => {
  let component: RegistroSolgruaComponent;
  let fixture: ComponentFixture<RegistroSolgruaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroSolgruaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroSolgruaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
