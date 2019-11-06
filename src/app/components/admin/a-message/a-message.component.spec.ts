import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AMessageComponent } from './a-message.component';

describe('AMessageComponent', () => {
  let component: AMessageComponent;
  let fixture: ComponentFixture<AMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
