import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingExamplesComponent } from './data-binding-examples.component';

describe('DataBindingComponent', () => {
  let component: DataBindingExamplesComponent;
  let fixture: ComponentFixture<DataBindingExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBindingExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
