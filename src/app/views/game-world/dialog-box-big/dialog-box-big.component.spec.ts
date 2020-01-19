import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBoxBigComponent } from './dialog-box-big.component';

describe('DialogBoxBigComponent', () => {
  let component: DialogBoxBigComponent;
  let fixture: ComponentFixture<DialogBoxBigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogBoxBigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBoxBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
