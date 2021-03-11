import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Capitalaccount2018Component } from './capitalaccount2018.component';

describe('Capitalaccount2018Component', () => {
  let component: Capitalaccount2018Component;
  let fixture: ComponentFixture<Capitalaccount2018Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Capitalaccount2018Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Capitalaccount2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
