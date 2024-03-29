import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionsComponent } from './decisions.component';

describe('DecisionsComponent', () => {
  let component: DecisionsComponent;
  let fixture: ComponentFixture<DecisionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DecisionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DecisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
