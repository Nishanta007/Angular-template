import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerhouseComponent } from './powerhouse.component';

describe('PowerhouseComponent', () => {
  let component: PowerhouseComponent;
  let fixture: ComponentFixture<PowerhouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PowerhouseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PowerhouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
