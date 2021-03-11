import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Capitalaccount2021Component } from './capitalaccount2021.component';

describe('Capitalaccount2021Component', () => {
  let component: Capitalaccount2021Component;
  let fixture: ComponentFixture<Capitalaccount2021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Capitalaccount2021Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Capitalaccount2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
