import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsPracticeComponent } from './js-practice.component';

describe('JsPracticeComponent', () => {
  let component: JsPracticeComponent;
  let fixture: ComponentFixture<JsPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsPracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
