import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Capitalaccount2019Component } from './capitalaccount2019.component';

describe('Capitalaccount2019Component', () => {
  let component: Capitalaccount2019Component;
  let fixture: ComponentFixture<Capitalaccount2019Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Capitalaccount2019Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Capitalaccount2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
