import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Distribution2018Component } from './distribution2018.component';

describe('Distribution2018Component', () => {
  let component: Distribution2018Component;
  let fixture: ComponentFixture<Distribution2018Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Distribution2018Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Distribution2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
