import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemNewsComponent } from './item-news.component';

describe('ItemNewsComponent', () => {
  let component: ItemNewsComponent;
  let fixture: ComponentFixture<ItemNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
