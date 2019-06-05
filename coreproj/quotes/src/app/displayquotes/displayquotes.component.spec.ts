import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayquotesComponent } from './displayquotes.component';

describe('DisplayquotesComponent', () => {
  let component: DisplayquotesComponent;
  let fixture: ComponentFixture<DisplayquotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayquotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayquotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
