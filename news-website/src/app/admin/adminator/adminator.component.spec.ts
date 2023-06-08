import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminatorComponent } from './adminator.component';

describe('AdminatorComponent', () => {
  let component: AdminatorComponent;
  let fixture: ComponentFixture<AdminatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
