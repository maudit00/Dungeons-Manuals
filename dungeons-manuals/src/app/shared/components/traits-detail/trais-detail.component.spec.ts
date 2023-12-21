import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraisDetailComponent } from './trais-detail.component';

describe('TraisDetailComponent', () => {
  let component: TraisDetailComponent;
  let fixture: ComponentFixture<TraisDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TraisDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TraisDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
