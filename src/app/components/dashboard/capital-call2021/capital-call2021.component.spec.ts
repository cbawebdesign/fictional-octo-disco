import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalCall2021Component } from './capital-call2021.component';

describe('CapitalCall2021Component', () => {
  let component: CapitalCall2021Component;
  let fixture: ComponentFixture<CapitalCall2021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapitalCall2021Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitalCall2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
