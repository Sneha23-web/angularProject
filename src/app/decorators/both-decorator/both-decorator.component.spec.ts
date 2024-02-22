import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BothDecoratorComponent } from './both-decorator.component';

describe('BothDecoratorComponent', () => {
  let component: BothDecoratorComponent;
  let fixture: ComponentFixture<BothDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BothDecoratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BothDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
