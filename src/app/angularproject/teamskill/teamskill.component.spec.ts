import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamskillComponent } from './teamskill.component';

describe('TeamskillComponent', () => {
  let component: TeamskillComponent;
  let fixture: ComponentFixture<TeamskillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamskillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
