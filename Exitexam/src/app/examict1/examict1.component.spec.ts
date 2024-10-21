
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Examict1Component } from './examict1.component';

describe('Examict1Component', () => {
  let component: Examict1Component;
  let fixture: ComponentFixture<Examict1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Examict1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Examict1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});