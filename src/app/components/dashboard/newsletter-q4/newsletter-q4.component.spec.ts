import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterQ4Component } from './newsletter-q4.component';

describe('NewsletterQ4Component', () => {
  let component: NewsletterQ4Component;
  let fixture: ComponentFixture<NewsletterQ4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsletterQ4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterQ4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
