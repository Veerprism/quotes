import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThequotesComponent } from './thequotes.component';

describe('ThequotesComponent', () => {
  let component: ThequotesComponent;
  let fixture: ComponentFixture<ThequotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThequotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThequotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
