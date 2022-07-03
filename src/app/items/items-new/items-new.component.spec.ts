import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsNewComponent } from './items-new.component';

describe('ItemNewDialogComponent', () => {
  let component: ItemsNewComponent;
  let fixture: ComponentFixture<ItemsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemsNewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
