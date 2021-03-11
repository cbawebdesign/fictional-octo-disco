import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Distribution2020Component } from './distribution2020.component';

describe('Distribution2020Component', () => {
  let component: Distribution2020Component;
  let fixture: ComponentFixture<Distribution2020Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Distribution2020Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Distribution2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
