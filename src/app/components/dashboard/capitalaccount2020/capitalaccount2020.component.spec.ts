import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Capitalaccount2020Component } from './capitalaccount2020.component';

describe('Capitalaccount2020Component', () => {
  let component: Capitalaccount2020Component;
  let fixture: ComponentFixture<Capitalaccount2020Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Capitalaccount2020Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Capitalaccount2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
