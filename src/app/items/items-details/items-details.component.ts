import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngxs/store';
import { ItemsState } from '../../core';
import { Observable } from 'rxjs';
import { ItemDto } from '@photo-inbox/dtos';

@Component({
  selector: 'app-items-details',
  templateUrl: './items-details.component.html',
  styleUrls: ['./items-details.component.scss'],
})
export class ItemsDetailsComponent {
  item$: Observable<ItemDto> = this.store.select(ItemsState.item(this.data.id));

  constructor(
    @Inject(MAT_DIALOG_DATA) private readonly data: ItemsDetailsComponentData,
    private readonly store: Store,
  ) {}
}

export interface ItemsDetailsComponentData {
  id: string;
}
