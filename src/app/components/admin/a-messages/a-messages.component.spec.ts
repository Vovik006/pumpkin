import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AMessagesComponent } from './a-messages.component';

describe('AMessagesComponent', () => {
  let component: AMessagesComponent;
  let fixture: ComponentFixture<AMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
