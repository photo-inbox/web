import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsListPreviewComponent } from './items-list-preview.component';

describe('ItemComponent', () => {
  let component: ItemsListPreviewComponent;
  let fixture: ComponentFixture<ItemsListPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemsListPreviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemsListPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
