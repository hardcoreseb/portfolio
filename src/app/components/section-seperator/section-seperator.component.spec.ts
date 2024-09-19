import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSeperatorComponent } from './section-seperator.component';

describe('SectionSeperatorComponent', () => {
  let component: SectionSeperatorComponent;
  let fixture: ComponentFixture<SectionSeperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionSeperatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionSeperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
