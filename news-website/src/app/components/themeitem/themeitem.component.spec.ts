import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeitemComponent } from './themeitem.component';

describe('ThemeitemComponent', () => {
  let component: ThemeitemComponent;
  let fixture: ComponentFixture<ThemeitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
