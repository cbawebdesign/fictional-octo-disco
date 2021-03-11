import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterQ3Component } from './newsletter-q3.component';

describe('NewsletterQ3Component', () => {
  let component: NewsletterQ3Component;
  let fixture: ComponentFixture<NewsletterQ3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsletterQ3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterQ3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
