import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxCategoryComponent } from './box-category.component';

describe('BoxCategoryComponent', () => {
  let component: BoxCategoryComponent;
  let fixture: ComponentFixture<BoxCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
