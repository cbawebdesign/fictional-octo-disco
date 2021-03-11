import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterQ1Component } from './newsletter-q1.component';

describe('NewsletterQ1Component', () => {
  let component: NewsletterQ1Component;
  let fixture: ComponentFixture<NewsletterQ1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsletterQ1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterQ1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
