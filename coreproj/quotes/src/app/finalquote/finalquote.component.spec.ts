import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalquoteComponent } from './finalquote.component';

describe('FinalquoteComponent', () => {
  let component: FinalquoteComponent;
  let fixture: ComponentFixture<FinalquoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalquoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalquoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
