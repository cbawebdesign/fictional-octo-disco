import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Capitalaccount2017Component } from './capitalaccount2017.component';

describe('Capitalaccount2017Component', () => {
  let component: Capitalaccount2017Component;
  let fixture: ComponentFixture<Capitalaccount2017Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Capitalaccount2017Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Capitalaccount2017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
