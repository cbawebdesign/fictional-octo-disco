import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Distribution2019Component } from './distribution2019.component';

describe('Distribution2019Component', () => {
  let component: Distribution2019Component;
  let fixture: ComponentFixture<Distribution2019Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Distribution2019Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Distribution2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
