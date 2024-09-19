import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseGlowComponent } from './mouse-glow.component';

describe('MouseGlowComponent', () => {
  let component: MouseGlowComponent;
  let fixture: ComponentFixture<MouseGlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MouseGlowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MouseGlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
