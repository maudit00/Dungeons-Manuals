import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubClassesComponent } from './sub-classes.component';

describe('SubClassesComponent', () => {
  let component: SubClassesComponent;
  let fixture: ComponentFixture<SubClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubClassesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
