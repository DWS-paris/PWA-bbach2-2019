import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantCardComponent } from './merchant-card.component';

describe('MerchantCardComponent', () => {
  let component: MerchantCardComponent;
  let fixture: ComponentFixture<MerchantCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
