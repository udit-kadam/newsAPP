import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinessNewsComponent } from './bussiness-news.component';

describe('BussinessNewsComponent', () => {
  let component: BussinessNewsComponent;
  let fixture: ComponentFixture<BussinessNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BussinessNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BussinessNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
