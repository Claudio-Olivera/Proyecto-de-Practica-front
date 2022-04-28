import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TWOComponent } from './two.component';

describe('TWOComponent', () => {
  let component: TWOComponent;
  let fixture: ComponentFixture<TWOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TWOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TWOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
