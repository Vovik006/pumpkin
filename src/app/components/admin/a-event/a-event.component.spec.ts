import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AEventComponent } from './a-event.component';

describe('AEventComponent', () => {
  let component: AEventComponent;
  let fixture: ComponentFixture<AEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
