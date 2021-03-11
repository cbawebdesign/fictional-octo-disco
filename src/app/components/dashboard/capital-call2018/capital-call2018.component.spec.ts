import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalCall2018Component } from './capital-call2018.component';

describe('CapitalCall2018Component', () => {
  let component: CapitalCall2018Component;
  let fixture: ComponentFixture<CapitalCall2018Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapitalCall2018Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitalCall2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
