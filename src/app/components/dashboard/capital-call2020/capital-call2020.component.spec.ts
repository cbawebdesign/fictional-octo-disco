import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalCall2020Component } from './capital-call2020.component';

describe('CapitalCall2020Component', () => {
  let component: CapitalCall2020Component;
  let fixture: ComponentFixture<CapitalCall2020Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapitalCall2020Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitalCall2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
