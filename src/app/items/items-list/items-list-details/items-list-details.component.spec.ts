import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsListDetailsComponent } from './items-list-details.component';

describe('ItemDialogComponent', () => {
  let component: ItemsListDetailsComponent;
  let fixture: ComponentFixture<ItemsListDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemsListDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemsListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
