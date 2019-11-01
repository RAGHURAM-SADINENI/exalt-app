import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileNewsPage } from './mobile-news.page';

describe('MobileNewsPage', () => {
  let component: MobileNewsPage;
  let fixture: ComponentFixture<MobileNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileNewsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
