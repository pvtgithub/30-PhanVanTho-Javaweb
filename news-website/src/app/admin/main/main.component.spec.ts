import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAdminComponent } from './main.component';

describe('MainComponent', () => {
  let component: MainAdminComponent;
  let fixture: ComponentFixture<MainAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
