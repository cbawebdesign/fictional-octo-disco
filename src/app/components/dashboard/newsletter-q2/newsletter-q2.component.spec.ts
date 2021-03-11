import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterQ2Component } from './newsletter-q2.component';

describe('NewsletterQ2Component', () => {
  let component: NewsletterQ2Component;
  let fixture: ComponentFixture<NewsletterQ2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsletterQ2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterQ2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
