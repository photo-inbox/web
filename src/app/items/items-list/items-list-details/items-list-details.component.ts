import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngxs/store';
import { ItemDto } from '@photo-inbox/dtos';

@Component({
  selector: 'app-items-list-details',
  templateUrl: './items-list-details.component.html',
  styleUrls: ['./items-list-details.component.scss'],
})
export class ItemsListDetailsComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) private readonly data: ItemsDetailsComponentData,
    private readonly store: Store,
  ) {}

  get item(): ItemDto {
    return this.data.item;
  }
}

export interface ItemsDetailsComponentData {
  item: ItemDto;
}
