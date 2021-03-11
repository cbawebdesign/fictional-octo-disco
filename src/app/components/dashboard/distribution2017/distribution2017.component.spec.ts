import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Distribution2017Component } from './distribution2017.component';

describe('Distribution2017Component', () => {
  let component: Distribution2017Component;
  let fixture: ComponentFixture<Distribution2017Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Distribution2017Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Distribution2017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
