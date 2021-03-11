import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Distribution2021Component } from './distribution2021.component';

describe('Distribution2021Component', () => {
  let component: Distribution2021Component;
  let fixture: ComponentFixture<Distribution2021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Distribution2021Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Distribution2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
