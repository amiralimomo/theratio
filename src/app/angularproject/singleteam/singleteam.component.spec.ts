import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleteamComponent } from './singleteam.component';

describe('SingleteamComponent', () => {
  let component: SingleteamComponent;
  let fixture: ComponentFixture<SingleteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleteamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
