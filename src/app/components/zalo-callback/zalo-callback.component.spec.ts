import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaloCallbackComponent } from './zalo-callback.component';

describe('ZaloCallbackComponent', () => {
  let component: ZaloCallbackComponent;
  let fixture: ComponentFixture<ZaloCallbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZaloCallbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZaloCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
