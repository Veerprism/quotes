import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterquotesComponent } from './enterquotes.component';

describe('EnterquotesComponent', () => {
  let component: EnterquotesComponent;
  let fixture: ComponentFixture<EnterquotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterquotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterquotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
