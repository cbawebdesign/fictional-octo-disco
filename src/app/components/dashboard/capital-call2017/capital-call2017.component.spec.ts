import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalCall2017Component } from './capital-call2017.component';

describe('CapitalCall2017Component', () => {
  let component: CapitalCall2017Component;
  let fixture: ComponentFixture<CapitalCall2017Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapitalCall2017Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitalCall2017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
